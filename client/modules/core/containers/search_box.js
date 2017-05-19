import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SearchBox from '../components/search_box.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('dapps.tags.distinct').ready()];
  const dataReady = () => {
    let data = Collections.Dapps.find().fetch();
    let distinctData = _.uniq(data, false, function (d) {
      return d.tags;
    });
    let tags = _.flatten(_.pluck(distinctData, 'tags'));
    const allTags = _.map(tags, (tag, index) => {
      return {id: index, text: tag};
    });onData(null, {allTags});
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
