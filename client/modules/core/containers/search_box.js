import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SearchBox from '../components/search_box.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('tags.list').ready()];
  const dataReady = () => {
    let tags = _.pluck(Collections.Tags.find().fetch(), 'tag');
    console.log(tags);
    onData(null, {tags});
  };
  (subscriptionReady) ? dataReady() : onData();
};


export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SearchBox);
