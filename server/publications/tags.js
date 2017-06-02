import {Tags} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('tags', function (tagsId) {
    return Tags.find(tagsId);
  });
}
