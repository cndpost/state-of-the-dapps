import {Tags} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('tags.list', function () {
    const selector = {freq: {$gt: 1}};
    const options = {sort: {freq: -1}};
    return Tags.find(selector,options);
  });
}
