import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import DappDetails from '../components/dapp_details.jsx';

export const composer = ({context, dappName}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [ Meteor.subscribe('dapps.name', dappName).ready() ];
  const dataReady = () => {
    const selector = {name: dappName};
    const dapp = Collections.Dapps.findOne(selector);
    onData(null, {dapp});
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
