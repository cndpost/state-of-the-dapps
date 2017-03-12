import React from "react";
import {dappHelper} from "/client/helpers/dappHelpers";

class DappDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {dapp} = this.props;
    return (
      <div id="details" className="container">
        <a href="/">
          <i className="fa fa-home" aria-hidden="true"></i>
        </a>
        {(dapp) ?
          <div className="row bg-white">

            <div className={`col s8`}>
              <div className={(dapp.status) ? dappHelper.getStatusColor(dapp.status) : 'bg-white'}>
                <div className="title">
                  <h2>{dapp.name}</h2>
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
                      <i className='icon-clickaBleIconlink fa fa-fw fa-github'></i>
                    </a>
                    }
                    {dapp.reddit &&
                    <a target='_blank' href={dapp.reddit}>
                      <i className='icon-link fa fa-fw fa-reddit'></i>
                    </a>
                    }
                    { dapp.contract_address_mainnet &&
                    <a target='_blank' href={'https://etherscan.io/address/' + dapp.contract_address_mainnet}>
                      <i className='icon-link fa fa-fw fa-cogs'></i>
                    </a>
                    }
                    { dapp.contract_address_ropsten &&
                    <a target='_blank' href={'https://ropsten.io/address/' + dapp.contract_address_ropsten}>
                      <i className='icon-link fa fa-fw fa-bug'></i>
                    </a>

                    }
                  </p>
                  <p className='pull-right'>
                    {dapp.last_update}
                  </p>
                  <p className='status truncate'>
                    {(dapp.status) ? dapp.status.substring(3) : ''}
                  </p>
                </div>
                <p>
                  {dapp.description}
                </p>
              </div>
            </div>
            <div className={`col s4`}>
              <div className={`${(dapp.status) ? dappHelper.getStatusColor(dapp.status) : 'bg-white'}`}>
                <div className={`title`}>
                  <h5>Details</h5>
                  <table>
                    <tbody>
                    <tr>
                      <td>
                        <b>Name</b>
                      </td>
                      <td>{dapp.name}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Website</b>
                      </td>
                      <td>
                        <a target="_blank" href={dapp.url}>
                          {dapp.url}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Licence</td>
                      <td>{dapp.license}</td>
                    </tr>
                    <tr>
                      <td>Updated</td>
                      <td>{dapp.last_updated}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>{(dapp.status) ? dapp.status.substring(3) : ''}</td>
                    </tr>
                    <tr>
                      <td>Platform</td>
                      <td>{dapp.platform}</td>
                    </tr>
                    <tr>
                      <td>GitHub</td>
                      <td>{dapp.github}</td>
                    </tr>
                    <tr>
                      <td>Reddit</td>
                      <td>{dapp.reddit}</td>
                    </tr>

                    <tr>
                      <td>Tags</td>
                      <td>{(dapp.tags) ? dapp.tags.toString() : null}</td>
                    </tr>
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          </div> : null}
      </div>
    );
  }
}

DappDetails.defaultProps = {
  dapp: {
    name: 'dapps',
    website: 'https://dapps.ethercasts.com/',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
    ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' +
    'when an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
    ' It has survived not only five centuries, but also the leap into electronic typesetting, ' +
    'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ' +
    'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus ' +
    'PageMaker including versions of Lorem Ipsum.',
  }

};

export default DappDetails;