import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SearchBox from '../components/search_box.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('dapps.tags.distinct').ready()];
  const dataReady = () => {
    let data = Collections.Dapps.find().fetch();
    let tagData = _.map(_.flatten(_.pluck(_.uniq(data, false, function (d) {
      return d.tags;
    }), 'tags')), (tag, index) => {
      return {tag};
    });
    let tags = (_.uniq(_.flatten(_.pluck(tagData, 'tag'))));
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
