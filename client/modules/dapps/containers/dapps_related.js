import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DappsRelated from '../components/dapps_related.jsx';

export const composer = ({context, tags}, onData) => {
  const {Meteor, Collections} = context();
  console.log('loading related dapps', tags);
  const subscriptionReady = [Meteor.subscribe('dapps.related', tags).ready()];

  const dataReady = () => {
    const selector = {tags: {$in: tags}};
    const dapps = Collections.Dapps.find(selector).fetch();
    onData(null, {dapps});
  };
  (subscriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DappsRelated);
