import React from 'react';
import PropTypes from 'prop-types';
import {dappHelper} from '/client/helpers/dappHelpers';
class Dapp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {dapp, isFeatured} = this.props;
    return (
      <div className={`col ms12 m4 l3 xl2 xxl1`}>
        <a href={`/dapp/${dapp._id}`}>
          <div
            className={`card hoverable dapp-card ${dappHelper.getStatusColor(dapp.status)} ${(isFeatured) ? 'featured' : ''}`}>
            <div className='card-content'>
              <div className='main-section center-align'>
                <div className='card-title truncate'>
                  {dapp.url ? <a target='_blank'
                                 href={dapp.url}>{dapp.name}</a> : dapp.name}
                </div>
                <div className='card-subtitle trunchate'>
                  {dapp.contact}
                </div>
                <div className='card-description'>
                  <p>{dapp.description}</p>
                </div>
              </div>
              <div className='section status-section'>
                <p className='icon-row center-align'>
                  { dapp.url &&
                  <a target='_blank' href={dapp.url}>
                    <i className='icon-link fa fa-fw fa-globe'></i>
                  </a>
                  }
                  { dapp.github &&
                  <a target='_blank' href={dapp.github}>
                    {dapp.license}
                    <i
                      className='icon-clickaBleIconlink fa fa-fw fa-github'></i>
                  </a>
                  }
                  {dapp.reddit &&
                  <a target='_blank' href={dapp.reddit}>
                    <i className='icon-link fa fa-fw fa-reddit'></i>
                  </a>
                  }
                  { dapp.contract_address_mainnet &&
                  <a target='_blank'
                     href={'https://etherscan.io/address/' + dapp.contract_address_mainnet}>
                    <i className='icon-link fa fa-fw fa-cogs'></i>
                  </a>
                  }
                  { dapp.contract_address_ropsten &&
                  <a target='_blank'
                     href={'https://ropsten.io/address/' + dapp.contract_address_ropsten}>
                    <i className='icon-link fa fa-fw fa-bug'></i>
                  </a>

                  }
                </p>
                <p className='pull-right'>
                  {dapp.last_update}
                </p>
                <p className='status truncate'>
                  {dapp.status.substring(3)}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
Dapp.propTypes = {
  dapp: React.PropTypes.object.isRequired
};
Dapp.defaultProps = {
  dapp: {
    name: 'sample dapp',
    description: 'description',
    url: 'url',
    github: 'github',
    status: '6. Demo',
    last_update: '2012',
    reddit: 'reddit',
    contact: ''
  }
};
export default Dapp;