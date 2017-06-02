import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SearchBox from '../components/search_box.jsx';

export const composer = ({context, get}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  get();
  console.log(LocalState.get('tags'));
  let tags = LocalState.get('tags');
  onData(null, {tags});
};


export const depsMapper = (context, actions) => ({
  get: actions.tags.get,
  context: () => context,

});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SearchBox);
