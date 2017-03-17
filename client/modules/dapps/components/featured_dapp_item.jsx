import React from 'react';
import {dappHelper} from '/client/helpers/dappHelpers';

class FeaturedDappItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /* let slider = $('.carousel');
     if (slider.hasClass('initialized')) {
     slider.removeClass('initialized')
     }
     slider.carousel();*/

  }

  render() {
    let {dapp, index} = this.props;
    return (
      <li className={`${dappHelper.getStatusColor(dapp.status)}`}>
        <div className={`collapsible-header black-text ${dappHelper.getStatusColor(dapp.status)}`}>{dapp.name}</div>
        <div className="collapsible-body"><span>{dapp.description}</span></div>
        {/*<div className={`carousel-item ${dappHelper.getStatusColor(dapp.status)} black-text`} href={`#${dapp._id}`}>
         <h2>{dapp.name}</h2>
         <p className="black-text">{dapp.description}</p>
         </div>*/}
      </li>
    );
  }
}

export default FeaturedDappItem;
