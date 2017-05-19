import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';


import SearchBox from '../components/search_box.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('dapps.tags.distinct').ready()];
  const dataReady = () => {
    let data = Collections.Dapps.find().fetch();
    let tags = _.map(_.flatten(_.pluck(_.uniq(data, false, function (d) {
      return d.tags;
    }), 'tags')), (tag, index) => {
      return {label: tag, value: tag};
    });
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
