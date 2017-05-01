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

              <div className="col s10">
                <div className="row">
                  <div className="col s12">
                    <div id="dapp-details-name" className="card light-blue">
                      <div className="card-details-title">
                        <div className="row">
                          <div className="col s4">
                            <span className="white-text">Details</span>
                          </div>
                        </div>
                      </div>
                      <div id="dapp-details-name-text" className="card-content white-text">

                        <h5>
                          <a className="white-text" href={dapp.url} target="_blank">{dapp.name}</a>
                        </h5>


                        <p>{dapp.description}</p>
                      </div>
                    </div>
                    <div id="details-page-overview-details" className="card">
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
                            <div className="row">
                              <div className="col s5 grey-text darken-1">
                                <i className="mdi-action-wallet-travel"></i>URL
                              </div>
                              <div className="col s7 grey-text text-darken-4 right-align truncate"><a href={dapp.url}
                                                                                                      target="_blank">{dapp.url}</a>
                              </div>
                            </div>
                          </li>
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s5 grey-text darken-1"><i className="mdi-social-poll"></i>Repo</div>
                              <div className="col s7 grey-text text-darken-4 right-align truncate"><a href={dapp.github}
                                                                                                      target="_blank">{dapp.github}</a>
                              </div>
                            </div>
                          </li>
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s5 grey-text darken-1"><i className="mdi-social-domain"></i> Slack
                              </div>
                              <div className="col s7 grey-text text-darken-4 right-align truncate"><a href={dapp.slack}
                                                                                                      target="_blank">{dapp.slack}</a>
                              </div>
                            </div>
                          </li>
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s5 grey-text darken-1"><i className="mdi-social-cake"></i> Licence
                              </div>
                              <div className="col s7 grey-text text-darken-4 right-align">{dapp.license}</div>
                            </div>
                          </li>
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s5 grey-text darken-1"><i className="mdi-social-cake"></i> Last
                                Updated
                              </div>
                              <div className="col s7 grey-text text-darken-4 right-align">{dapp.last_update}</div>
                            </div>
                          </li>
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s5 grey-text darken-1"><i className="mdi-social-cake"></i> Reddit
                              </div>
                              <div className="col s7 grey-text text-darken-4 right-align truncate"><a href={dapp.reddit}
                                                                                                      target="_blank">{dapp.reddit}</a>
                              </div>
                            </div>
                          </li>
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s5 grey-text darken-1"><i className="mdi-social-cake"></i> Platform
                              </div>
                              <div className="col s7 grey-text text-darken-4 right-align">{dapp.platform}</div>
                            </div>
                          </li>
                          <li className="collection-item">
                            <div className="row">
                              <div className="col s5 grey-text darken-1"><i className="mdi-social-cake"></i> Contact
                              </div>
                              <div className="col s7 grey-text text-darken-4 right-align">{dapp.contact}</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div id="details-page-sidebar" className="col s2">
                <div id="dapp-details-status" className={`card ${dappHelper.getStatusColor(dapp.status)}` }>
                  <div className="card-details-title">
                    <div className="row">
                      <div className="col s4">
                        <span className="">Status</span>
                      </div>
                    </div>
                  </div>
                  <div id="dapp-details-status-text" className="card-content black-text center-align">
                    <p>{dappHelper.getStatusText(dapp.status)}</p>
                  </div>
                </div>
                <div id="related-dapps" className="card">
                  <div className="card-details-title">
                    <div className="row">
                      <div className="col s12">
                        <span className="">Related Dapps</span>
                      </div>
                      <div className="">
                        <DappsRelated tags={dapp.tags}/>
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
