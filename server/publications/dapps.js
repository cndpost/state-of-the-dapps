import {Dapps} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export default function () {
  Meteor.publish('dapps.list', function () {
    return Dapps.find();
  });
  Meteor.publish('dapps.byId', function (dappId) {
    const selector = {_id: new Mongo.ObjectID(dappId)};
    return Dapps.find(selector);
  });
  Meteor.publish('dapps.name', function (dappName) {
    const selector = {name: dappName};
    return Dapps.find(selector);
  });
  Meteor.publish('dapps.bySlug', function (slug) {
    const selector = {slug};
    return Dapps.find(selector);
  });
  Meteor.publish('dapps.featured', function () {
    const selector = {tags: {$in: 'featured'}};
    return Dapps.find(selector);
  });
  Meteor.publish('dapps.related', function (tags) {
    const selector = (tags) ? {tags: {$in: tags}} : {_id: 'cant-be-found'};
    return Dapps.find(selector);
  });

}
