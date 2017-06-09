import {$} from 'meteor/jquery';

export default {
  trackLink(element, event) {
    var url = event.currentTarget.href;
    var dapp = $(event.currentTarget).data('dapp');
    var type = $(event.currentTarget).data('type');

    const hasAnalytics = (typeof analytics !== 'undefined');
    const hasWeb3 = (typeof web3 !== 'undefined');
    if (hasAnalytics) {
      analytics.track('link', {
        url,
        dapp,
        type,
        context: element.FlowRouter.current().route.name,
        hasWeb3
      });
    }
  }

};
