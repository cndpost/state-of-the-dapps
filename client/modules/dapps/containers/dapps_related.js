import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DappsRelated from '../components/dapps_related.jsx';

export const composer = ({context, tags, slug}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('dapps.related', tags).ready()];

  const dataReady = () => {
    const selector = {tags: {$in: tags}, slug: {$ne: slug}};
    const options = {fields: {slug: 1, name: 1, description: 1, status: 1}};

    const dapps = Collections.Dapps.find(selector, options).fetch();
    console.log(dapps);
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
