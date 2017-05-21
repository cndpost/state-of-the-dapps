#!/usr/bin/env python

import os

import requests
from pymongo import MongoClient

MONGODB_URL = os.getenv('MONGODB_URL', 'mongodb://127.0.0.1:3001/meteor')

def check_url(url):
    code = 0
    error = None
    body = ''
    try:
        response = requests.get(url)
        code = response.status_code
        body = response.text
    except requests.exceptions.SSLError as err:
        code = -1
        error = str(err)
    except requests.exceptions.ConnectionError as err:
        code = -1
        error = str(err)

    return code, error, body

TEST_URLS = [
    # "http://www.stackoverflow.com",
    # "http://eyepi.com/",
    # "http://communitycurrency.website/",
    # "http://dappstore.io",
    # "http://ethereumwall.com/",
    # "https://github.com/profeth/",
    # "http://app.etherdoubler.com/",
    # "http://insureth.mkvd.net/",
    # "https://ventureequity.exchange/",
    # "http://lazooz.org/", # TODO detect
    # "http://etherscripter.com",
    # "http://airlock.me/",
    # "http://atomrigs.blogspot.com",
    # "http://etherboard.io/",
    # "http://quorumwallet.com/",
    # "http://verbatm.info/",
    # "https://ethereumpyramid.com/",
    # "http://cryptorps.com/",
    # "http://jaakme.in/"
]


PARKING_TEXTS = [
    "This domain is for sale.",
    "This domain may be for sale.",
    "This domain was recently registered",
    "This Domain Name Has Expired",
    "Sedo's Domain Parking",
    "This page is provided courtesy of GoDaddy.com",
    "Domain Parking",
    "parkingcrew.net",
    "This page has been suspended"
]

def is_parking(body):
    for text in PARKING_TEXTS:
        if text in body:
            return True
    return False


def main():
    client = MongoClient(MONGODB_URL)
    db = client.get_default_database()

    dapps = db.dapps.find({'url': {'$ne': ''}, 'status': {'$nin': ['1. Abandoned']}})
    for dapp in dapps:
        url = dapp.get('url')
        # print dapp.get('name'), " Checking ", url, "..."

        if not url:
            continue

        code, error, body = check_url(url)
        parking = False
        if code == 200:
            parking = is_parking(body)

        if code != 200 or parking:
            print dapp.get('name'), url, code, error, parking
            print

if __name__ == '__main__':
    main()