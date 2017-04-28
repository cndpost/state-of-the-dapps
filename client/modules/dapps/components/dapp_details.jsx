import React from 'react';
import {dappHelper} from '/client/helpers/dappHelpers';

class DappDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {dapp} = this.props;
    return (
      <div id="details-page" className="section ">
        {(dapp) ?
          <div id="dapp-details-content">
            <div id="details-page-content" className="row">
              <div className="row container">
                <div id="details-page-header" className="card transparent">
                  <span className="card-title white-text"><h4>{dapp.name}</h4>
                  </span>
                  <hr/>
                </div>
              </div>

              <div id="details-page-sidebar" className="col s12 m4">
                <div className="card light-blue">
                  <div className="card-content white-text">
                    <span className="card-title">Details</span>
                    <p>{dapp.description}</p>
                  </div>
                </div>
                <ul id="details-page-about-details" className="collection z-depth-1">
                  <li className="collection-item">
                    <div className="row">
                      <div className="col s5 grey-text darken-1">
                        <i className="mdi-action-wallet-travel"></i>URL</div>
                      <div className="col s7 grey-text text-darken-4 right-align truncate"><a href={dapp.url} target="_blank">{dapp.url}</a></div>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div className="row">
                      <div className="col s5 grey-text darken-1"><i className="mdi-social-poll"></i>Repo</div>
                      <div className="col s7 grey-text text-darken-4 right-align truncate"><a href={dapp.github} target="_blank">{dapp.github}</a></div>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div className="row">
                      <div className="col s5 grey-text darken-1"><i className="mdi-social-domain"></i> Slack</div>
                      <div className="col s7 grey-text text-darken-4 right-align truncate"><a href={dapp.slack} target="_blank">{dapp.slack}</a></div>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div className="row">
                      <div className="col s5 grey-text darken-1"><i className="mdi-social-cake"></i> Licence</div>
                      <div className="col s7 grey-text text-darken-4 right-align">{dapp.license}</div>
                    </div>
                  </li>
                </ul>
                <div className={`card ${dappHelper.getStatusColor(dapp.status)}` }>
                  <div className="card-content black-text center-align">
                    <p className="flow-text">{dappHelper.getStatusText(dapp.status)}</p>
                  </div>
                </div>

              </div>
              <div className="col s12 m8">

                <div id="" className="row">
                  <div className="col s12">
                    <div id="" className="card">
                    </div>

                    <div id="" className="card">
                      <div className="card-details-title">
                        <div className="row">
                          <div className="col s1">
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <p></p>
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
