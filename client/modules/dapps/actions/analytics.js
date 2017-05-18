import {$} from 'meteor/jquery';

export default {
  trackLink(element, event) {
    var url = event.currentTarget.href;
    var type = $(event.currentTarget).data('type');
    // analytics not exported by okgrow:analytics
    analytics.track('link', {
      url,
      type,
      context: element.FlowRouter.current().route.name
    });
  }

};
