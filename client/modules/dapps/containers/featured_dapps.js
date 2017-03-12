import {useDeps, composeAll, composeWithTracker, compose} from "mantra-core";
import FeaturedDapps from "../components/featured_dapps.jsx";

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionReady = [Meteor.subscribe('dapps.featured').ready()];
  const dataReady = () => {
    const selector = {featured: true};
    const featuredDapps = Collections.Dapps.find(selector, {limit: 5}).fetch();
    onData(null, {featuredDapps});
  };
  (subscriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FeaturedDapps);
