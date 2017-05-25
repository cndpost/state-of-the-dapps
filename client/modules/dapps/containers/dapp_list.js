import {composeAll, composeWithTracker, useDeps} from 'mantra-core';
import {_} from 'meteor/underscore';
import DappList from '../components/dapp_list.jsx';

export const composer = ({context, sortDirection, searchText, sortType, tags}, onData) => {
  const {Meteor, Collections} = context();
  console.log(tags);
  let subscriptionReady = [
    Meteor.subscribe('dapps.list').ready()
  ];
  const dataReady = () => {
    let sorter = (sortDirection === 'desc') ? -1 : 1;
    let sortField = (sortType === 'status') ? 'status' : 'last_update';
    let featuredDapps = (searchText) ? [] : Collections.Dapps.find({tags: {$in: [ 'featured' ]}}).fetch();
    (_.isEmpty(tags));
    let selector = (_.isEmpty(tags)) ?
      (searchText) ? {
        $or: [
    let defaultHideStates = [ '0. Unknown', '1. Abandoned', '2. On Hold', '3. Stealth Mode' ];
    const selector = (searchText) ? {
      $or: [
        {name: {$regex: searchText, $options: 'i'}},
        {description: {$regex: searchText, $options: 'i'}},
        {tags: {$regex: searchText, $options: 'i', $in: tags}},
          {
            contact: {
              $regex: searchText, $options: 'i'
            }
          },
        ]
      } :
      {
        tags: {
          $nin: [ 'featured' ]

        }
      } : {};

        {tags: {$regex: searchText, $options: 'i'}},
        {contact: {$regex: searchText, $options: 'i'}},
      ]
    } : {status: {$nin: defaultHideStates}, tags: {$nin: [ 'featured' ]}};
    const dapps = Collections.Dapps.find(selector, {sort: {[sortField]: sorter}}).fetch();
    onData(null, {dapps, featuredDapps});
  };
  (subscriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DappList);
