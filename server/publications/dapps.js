import {Dapps} from "/lib/collections";
import {Meteor} from "meteor/meteor";

export default function () {
  Meteor.publish('dapps.list', function () {
    return Dapps.find();
  });
  Meteor.publish('dapps.byId', function (dappId) {
    console.log(dappId);
    const selector = {_id: dappId};
    console.log(Dapps.find({selector}).fetch());
    return Dapps.find(selector);
  });
};