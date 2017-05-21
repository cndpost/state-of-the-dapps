import {Dapps} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {_} from 'meteor/underscore';

export default function () {
  Meteor.publish('dapps.list', function () {
    return Dapps.find({}, {sort: {['last_update']: -1}});
  }, {
    url: '/api/dapps'
  });
  Meteor.publish('dapp.byTag', function (tag) {
    return Dapps.find({tags: tag});
  }, {
    url: '/api/dapps-by-tag/:0'
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
  Meteor.publish('dapps.tags.distinct', function () {
    const selector = {};
    const options = {fields: {tags: 1}};
    return Dapps.find(selector, options);
  });
}
