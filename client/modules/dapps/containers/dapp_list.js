import {composeAll, composeWithTracker, useDeps} from 'mantra-core';
import DappList from '../components/dapp_list.jsx';

export const composer = ({context, sortDirection, searchText, sortType}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [
    Meteor.subscribe('dapps.list').ready()
  ];
  const dataReady = () => {

    let sorter = (sortDirection == 'desc') ? -1 : 1;
    let sortField = (sortType == 'status') ? 'status' : 'last_update';
    let featuredDapps = (searchText) ? [] : Collections.Dapps.find({tags: {$in: [ 'featured' ]}}).fetch();
    let defaultHideStates = [ '0. Unknown', '1. Abandoned', '2. On Hold', '3. Stealth Mode' ];
    const selector = (searchText) ? {
      $or: [
        {name: {$regex: searchText, $options: 'i'}},
        {description: {$regex: searchText, $options: 'i'}},
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
