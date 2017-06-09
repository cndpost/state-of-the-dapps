import {Meteor} from 'meteor/meteor';
import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import DappDetails from '/client/modules/dapps/containers/dapp_details';
import {dappHelper} from '/client/helpers/dappHelpers';
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  FlowRouter.route('/dapp/:slug', {
    name: 'dappDetailsPage',
    action(params) {
      mount(MainLayoutCtx, {
        content: () => (<DappDetails slug={params.slug}/>)
      });
      const hasAnalytics = (typeof analytics !== 'undefined');
      if (hasAnalytics) {
        // XXX workaround for https://github.com/okgrow/analytics/issues/58
        Meteor.setTimeout(() => {
          const hasWeb3 = (typeof web3 !== 'undefined');
          analytics.page('dappDetailsPage', {
            dapp: params.slug,
            hasWeb3
          });
        }, 500);
      }
    }
  });
}
