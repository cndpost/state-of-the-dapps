export default {
  count({Meteor, LocalState}) {
    Meteor.call('dapps.count', (err, res) => {
      if (res) {
        LocalState.set('dappCount', res);
      } else {
        LocalState.set('dappCount', 0);
      }
    });
  },
  related({Meteor, LocalState}, tags) {
    Meteor.call('dapps.related', tags, (err, res) => {
      if (res) {
        LocalState.set('dappRelated', res);
      } else {
        LocalState.set('dappRelated', []);
      }
    });
  }
}
