import {_}from 'meteor/underscore';
export default {
  get({Meteor, LocalState}) {
    Meteor.call('tags.getAll', (err, res) => {
      if (res) {
        LocalState.set('tags', _.pluck(res, 'tag'));
      }
    });
  }
}
