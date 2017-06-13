import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import FilterArea from '../components/filter_area.jsx';
export const composer = ({context, count}, onData) => {
  const {LocalState} = context();
  let dappCount = LocalState.get('dappCount');
  onData(null, {dappCount});
};

export const depsMapper = (context, actions) => ({
  count: actions.dapps.count,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FilterArea);
