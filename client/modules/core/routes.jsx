import {Meteor} from 'meteor/meteor';
import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from './components/main_layout.jsx';
import DappLayout from '/client/modules/dapps/containers/dapp_layout';
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<DappLayout />)
      });
      const hasAnalytics = (typeof analytics !== 'undefined');
      if (hasAnalytics) {
        // XXX workaround for https://github.com/okgrow/analytics/issues/58
        Meteor.setTimeout(() => {
          const hasWeb3 = (typeof web3 !== 'undefined');
          analytics.page('home', {
            hasWeb3
          });
        }, 500);
      }
    }
  });
}
