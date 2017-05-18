import {$} from 'meteor/jquery';

export default {
  trackLink(event) {
    var url = event.currentTarget.href;
    var type = $(event.currentTarget).data('type');
    // console.log('link', url, type);
    // analytics not exported by okgrow:analytics
    analytics.track('link', {
      url,
      type
    });
  }

};
