export default {
  count({Meteor, LocalState}) {
    Meteor.call('dapps.count', (err, res) => {
      if (res) {
        LocalState.set('dappCount', res);
      }else{
        LocalState.set('dappCount',0);
      }
    });
  }
}
