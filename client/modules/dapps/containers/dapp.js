import { composeAll, composeWithTracker, useDeps } from 'mantra-core';

import Dapp from '../components/dapp.jsx';

export const composer = ({ context, dapp }, onData) => {
  const { Meteor, Collections } = context();
  let isFeatured = _.contains(dapp.tags, 'featured');
  onData(null, { isFeatured });
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Dapp);
