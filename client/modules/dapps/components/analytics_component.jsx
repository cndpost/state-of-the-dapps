import React from 'react';
import {$} from 'meteor/jquery';

class AnalyticsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

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
}

export default AnalyticsComponent;
