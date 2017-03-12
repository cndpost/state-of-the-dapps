import React from "react";
import {mount} from "react-mounter";
import MainLayout from "/client/modules/core/components/main_layout.jsx";
import DappDetails from "/client/modules/dapps/containers/dapp_details";
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/dapp/:id', {
    name: 'dappDetailsPage',
    action() {
      console.log('details page route');
      mount(MainLayoutCtx, {
        content: () => (<DappDetails/>)
      });
    }
  });
}
