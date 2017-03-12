import {Dapps} from "/lib/collections";
import {Meteor} from "meteor/meteor";

export default function () {
  Meteor.publish('dapps.list', function () {
    return Dapps.find();
  });
  Meteor.publish('dapps.byId', function (dappId) {
    const selector = {_id: new Mongo.ObjectID(dappId)};
    return Dapps.find(selector);
  });
};