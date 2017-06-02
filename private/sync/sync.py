#!/usr/bin/env python

import argparse
import codecs
import json
import os
import re
from collections import Counter

import gspread
from oauth2client.client import GoogleCredentials
from pymongo import MongoClient
from slugify import slugify
import dateutil.parser

DAPPS_SHEET_KEY = '1VdRMFENPzjL2V-vZhcc_aa5-ysf243t5vXlxC2b054g'
MONGODB_URL = os.getenv('MONGODB_URL', 'mongodb://127.0.0.1:3001/meteor')

def sync_sheet(worksheet, db):
    list_of_lists = worksheet.get_all_values()
    print list_of_lists
    row_nr = 0

    tags_cnt = Counter()

    for cell_list in list_of_lists:
        print(cell_list)

        if row_nr > 0:
            name, description, url, github, reddit, slack, gitter, blog, wiki, the_etherian, twitter, facebook, contact, tags, license, platform, status, created, last_update, contract_address_mainnet, contract_address_ropsten, logo = cell_list
            tags = [tag.strip().lower() for tag in tags.split(',')]

            for tag in tags:
                if tag:
                    tags_cnt[tag] += 1

            attributes = {
                'row_nr': row_nr,
                'description': description,
                'url': url,
                'github': github,
                'reddit': reddit,
                'slack': slack,
                'gitter': gitter,
                'blog': blog,
                'wiki': wiki,
                'the_etherian': the_etherian,
                'twitter': twitter,
                'facebook': facebook,
                'contact': contact,
                'tags': tags,
                'license': license,
                'platform': platform,
                'slug': slugify(name),
                'status': status,
                'created': created,
                'last_update': last_update,
                'contract_address_mainnet': contract_address_mainnet,
                'contract_address_ropsten': contract_address_ropsten,
                'logo': logo,
            }

            if 'featured' in tags:
                attributes['featured'] = True

            db.dapps.update({'name': name}, {'$set': attributes}, upsert=True)

        row_nr += 1

    # TODO remove unused tags
    for tag, freq in tags_cnt.items():
        db.tags.update({'tag': tag}, {'$set': {'freq': freq}}, upsert=True)

def import_json(filename):
    data = []
    with codecs.open(filename, 'rU', 'utf-8') as f:
        for line in f:
            data.append(json.loads(line))
    return data

def import_queue(db):
    return list(db.queue.find())

def update_sheet(worksheet, db, data):
    for row in data:
        dapp_name = row['dapp_name']
        dt = dateutil.parser.parse(row['timestamp'])
        timestamp = dt.strftime('%Y-%m-%d')
        print row['timestamp'], dt, timestamp
        db_entry = db.dapps.find_one({'name': re.compile('^' + re.escape(dapp_name) + '$', re.IGNORECASE)})
        if db_entry:
            print 'Existing', row['dapp_name'], db_entry['row_nr']
            print worksheet.row_values(db_entry['row_nr'] + 1)
        else:
            print 'New', row['dapp_name']
            output = [
                row['dapp_name'],
                row['description'],
                row['site'],
                row['github'],
                row['reddit'],
                row.get('slack', ''),
                row.get('gitter', ''),
                row.get('blog', ''),
                row.get('wiki', ''),
                row.get('the_etherian', ''),
                row.get('twitter', ''),
                row.get('facebook', ''),
                row['contact'],
                row['tags'],
                row['license'],
                'Ethereum',
                row['status'],
                timestamp,
                timestamp,
                row['contract_address_mainnet'],
                row['contract_address_ropsten'],
            ]
            worksheet.append_row(output)


def parse_cli_args():
    parser = argparse.ArgumentParser()
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('--import', action='store_true', dest='import_queue', help='import submission queue to worksheet')
    group.add_argument('--sync', action='store_true', help='sync worksheet to database')
    return parser.parse_args()

def main():
    args = parse_cli_args()

    credentials = GoogleCredentials.get_application_default()
    credentials = credentials.create_scoped(['https://spreadsheets.google.com/feeds'])
    gc = gspread.authorize(credentials)

    sh = gc.open_by_key(DAPPS_SHEET_KEY)
    worksheet = sh.get_worksheet(0)

    client = MongoClient(MONGODB_URL)
    db = client.get_default_database()
    db.dapps.ensure_index('name')
    db.dapps.ensure_index('slug')
    db.dapps.ensure_index('tags')

    if args.import_queue:
        print "import queue"
        data = import_queue(db)
        update_sheet(worksheet, db, data)

    if args.sync:
        print "sync"
        sync_sheet(worksheet, db)

if __name__ == '__main__':
    main()
