import {useDeps, composeAll, composeWithTracker, compose} from "mantra-core";
import DappDetails from "../components/dapp_details.jsx";

export const composer = ({context, dappId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('dapps.byId', dappId).ready()];
  const dataReady = () => {
    console.log(dappId);
    const selector = {_id: dappId};
    const dapp = Collections.Dapps.findOne(dappId);
    console.log(dapp);
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
