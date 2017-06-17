import {Tags} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
export default function () {
  Meteor.methods({
    'tags.getAll'() {
      const selector = {freq: {$gt: 1}};
      const ignoredFields = {last_synced: 0};
      const options = {sort: {freq: -1}};
      return Tags.find(selector, ignoredFields, options).fetch();
    }
  });
}
