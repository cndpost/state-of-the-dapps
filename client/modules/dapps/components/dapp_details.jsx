import React from 'react';
import {dappHelper} from '/client/helpers/dappHelpers';
import DappsRelated from '/client/modules/dapps/containers/dapps_related';

class DappDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {dapp} = this.props;
    return (
      <div id="details-page" className="section">
        {(dapp) ?
          <div id="dapp-details-content">
            <div id="details-page-content" className="row">

              <div className="col s8">
                <div className="row">
                  <div className="col s12">
                    <div id="dapp-details-name" className={`card radius ${dappHelper.getStatusColor(dapp.status)}` }>
                      <div className="card-details-title">
                        <div className="row">
                          <div className="col s4">
                            <span className="black-text">Details</span>
                          </div>
                          <div className="col s4"></div>
                          <div className="col s4">
                            <span className="black-text">{dappHelper.getStatusText(dapp.status)}</span>
                          </div>
                        </div>
                      </div>
                      <div id="dapp-details-name-text"
                           className="card-content black-text">
                        <div className="row">
                          <h5>
                            <a className="black-text" href={dapp.url}
                               target="_blank">{dapp.name}
                            </a>
                          </h5>
                          <p>{dapp.description}</p>
                        </div>
                      </div>
                    </div>
                    <div id="details-page-overview-details" className="card radius">
                      <div className="card-details-title">
                        <div className="row">
                          <div className="col s4">
                            <span className="">Overview</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <ul id="overview-collection" className="collection z-depth-1">
                          <li className="collection-item">
                            { dapp.url && <div className="row">
                              <div className="col s2 grey-text darken-1">
                                <i className="mdi-action-wallet-travel"></i>Site
                              </div>
                              <div className="col s10 grey-text text-darken-4 left-align truncate"><a href={dapp.url}
                                                                                                      target="_blank">{dapp.url}</a>
                              </div>
                            </div>
                            }
                          </li>
                          {dapp.github &&
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s2 grey-text darken-1"><i className="mdi-social-poll"></i>Repository</div>
                              <div className="col s10 grey-text text-darken-4 left-align truncate"><a href={dapp.github}
                                                                                                      target="_blank">{dapp.github}</a>
                              </div>
                            </div>
                          </li>
                          }
                          {dapp.slack &&
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s2 grey-text darken-1"><i className="mdi-social-domain"></i> Slack
                              </div>
                              <div className="col s10 grey-text text-darken-4 left-align truncate"><a href={dapp.slack}
                                                                                                      target="_blank">{dapp.slack}</a>
                              </div>
                            </div>
                          </li>
                          }
                          {dapp.license &&
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s2 grey-text darken-1"><i className="mdi-social-cake"></i> Software License
                              </div>
                              <div className="col s10 grey-text text-darken-4 left-align">{dapp.license}</div>
                            </div>
                          </li>
                          }
                          { dapp.last_update &&
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s2 grey-text darken-1"><i className="mdi-social-cake"></i> Last
                                Updated
                              </div>
                              <div className="col s10 grey-text text-darken-4 left-align">{dapp.last_update}</div>
                            </div>
                          </li>
                          }
                          { dapp.reddit &&
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s2 grey-text darken-1"><i className="mdi-social-cake"></i> Reddit
                              </div>
                              <div className="col s10 grey-text text-darken-4 left-align truncate"><a href={dapp.reddit}
                                                                                                      target="_blank">{dapp.reddit}</a>
                              </div>
                            </div>
                          </li>
                          }
                          {dapp.contact &&
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s2 grey-text darken-1"><i className="mdi-social-cake"></i> Contact
                              </div>
                              <div className="col s10 grey-text text-darken-4 left-align">{dapp.contact}</div>
                            </div>
                          </li>
                          }
                          {dapp.contract_address_mainnet &&
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s2 grey-text darken-1"><i className="mdi-social-cake"></i> Mainnet contract address
                              </div>
                              <div className="col s10 grey-text text-darken-4 left-align">
                                <a target='_blank' href={'https://etherscan.io/address/' + dapp.contract_address_mainnet}>
                                  {dapp.contract_address_mainnet}
                                </a>
                              </div>
                            </div>
                          </li>
                          }
                          {dapp.contract_address_ropsten &&
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s2 grey-text darken-1"><i className="mdi-social-cake"></i> Ropsten contract address
                              </div>
                              <div className="col s10 grey-text text-darken-4 left-align">
                                <a target='_blank' href={'https://ropsten.io/address/' + dapp.contract_address_ropsten}>
                                  {dapp.contract_address_mainnet}
                                </a>
                              </div>
                            </div>
                          </li>
                          }
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div id="details-page-sidebar" className="col s4">
                <div id="related-dapps" className="card radius">
                  <div className="card-details-title">
                    <div className="row">
                      <div className="col s12">
                        <span className="">Related Dapps</span>
                      </div>
                      <div className="">
                        <DappsRelated tags={dapp.tags} slug={dapp.slug}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> : null
        }

      </div>
    );
  }
}
export default DappDetails;
