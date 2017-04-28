import React from 'react';
import {dappHelper} from '/client/helpers/dappHelpers';

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
            <div id="details-page-header" className="card">

            </div>
            < div id="details-page-content" className="row">
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
                      <div className="col s5 grey-text darken-1"><i className="mdi-action-wallet-travel"></i> Name</div>
                      <div className="col s7 grey-text text-darken-4 right-align">Name</div>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div className="row">
                      <div className="col s5 grey-text darken-1"><i className="mdi-social-poll"></i> Name</div>
                      <div className="col s7 grey-text text-darken-4 right-align">Name</div>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div className="row">
                      <div className="col s5 grey-text darken-1"><i className="mdi-social-domain"></i> Name</div>
                      <div className="col s7 grey-text text-darken-4 right-align">Name</div>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div className="row">
                      <div className="col s5 grey-text darken-1"><i className="mdi-social-cake"></i> Name</div>
                      <div className="col s7 grey-text text-darken-4 right-align">Name</div>
                    </div>
                  </li>
                </ul>
                <div className={`card ${dappHelper.getStatusColor(dapp.status)}` }>
                  <div className="card-content black-text center-align">
                    <p className="flow-text">{dappHelper.getStatusText(dapp.status)}</p>
                  </div>
                </div>

              </div>
              <div id="details-page-content" className="col s12 m8">
                <span className="card-title white-text"><h4>{dapp.name}</h4></span>
                <hr/>
                <div id="details-page-wall-posts" className="row">
                  <div className="col s12">
                    <div id="details-page-wall-post" className="card">
                    </div>

                    <div id="details-page-wall-post" className="card">
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
