import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import DappDetails from '../components/dapp_details.jsx';

export const composer = ({context, slug}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [ Meteor.subscribe('dapps.bySlug', slug).ready() ];
  const dataReady = () => {
    const selector = {slug};
    const dapp = Collections.Dapps.findOne(selector);
    let relatedDappsReady = (dapp) ? [ Meteor.subscribe('dapp.related', dapp.tags).ready() ] : false;
    let relatedDapps = (relatedDappsReady) ? Collections.Dapps.find({
      _id: {$ne: dapp._id},
      tags: {$in: dapp.tags}
    }).fetch() : [];
    console.log(relatedDapps);
    onData(null, {dapp, relatedDapps});
  };
  (subscriptionReady) ? dataReady() : onData();

};


export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DappDetails);
