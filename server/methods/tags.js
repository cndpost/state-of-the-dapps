import {Tags} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
export default function () {
  Meteor.methods({
    'tags.getAll'() {
      const selector = {freq: {$gt: 1}};
      const options = {sort: {freq: -1}};
      return Tags.find(selector,options).fetch();
    }
  });
}
