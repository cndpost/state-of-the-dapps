import {Tags} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('tags.list', function () {
    const selector = {freq: {$gt: 1}};
    const ignoredFields = {last_synced: 0};
    const options = {sort: {freq: -1}};
    return Tags.find(selector, ignoredFields, options);
  });
}
