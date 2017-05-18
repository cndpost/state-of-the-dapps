import React from 'react';
import {$} from 'meteor/jquery';

class IconButton extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function () {
      $('.modal').modal();
    });
  }

  componentDidUpdate() {
    $(document).ready(function () {
      $('.modal').modal();
    });
  }

  handleClick() {
    let {target} = this.props;
    $('#' + target).modal('open');
    analytics.page(target);
  }

  render() {
    let {style, customClass, target} = this.props;
    return (
      <i ref='iconButton' style={style}
         className={`${customClass} iconButton`}
         data-target={target}
         onClick={this.handleClick.bind(this)}
         aria-hidden="true"
      ></i>
    );
  }
}

export default IconButton;
