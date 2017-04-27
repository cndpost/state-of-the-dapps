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
        <div id="details-page-header" className="card">

        </div>
        <div id="details-page-content" className="row">
          <div id="details-page-sidebar" className="col s12 m4">
            <div className="card light-blue">
              <div className="card-content white-text">
                <span className="card-title">About Dapp</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
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
            <div className="card amber darken-2">
              <div className="card-content white-text center-align">
                Dapp Status
              </div>
            </div>

          </div>
          <div id="details-page-wall" className="col s12 m8">
            <div id="details-page-wall-share" className="row">
              <div className="col s12">

              </div>
            </div>

            <div id="details-page-wall-posts" className="row">
              <div className="col s12">
                <div id="details-page-wall-post" className="card">
                  <div className="card-details-title">
                    <div className="row">
                      <div className="col s1">

                      </div>

                      <div className="col s1 right-align">
                        <i className="mdi-navigation-expand-more"></i>
                      </div>
                    </div>

                  </div>
                  <div className="card-image details-medium">
                    <span className="card-title">DAPP NAME</span>
                  </div>
                </div>

                <div id="details-page-wall-post" className="card">
                  <div className="card-details-title">
                    <div className="row">
                      <div className="col s1">

                      </div>

                      <div className="col s1 right-align">
                        <i className="mdi-navigation-expand-more"></i>
                      </div>
                    </div>
                  </div>
                  <div className="card-image details-medium">
                    <div className="video-container no-controls">
                    </div>
                  </div>
                  <div className="card-content">
                    <p></p>
                  </div>

                </div>

                <div id="details-page-wall-post" className="card">
                  <div className="card-details-title">
                    <div className="row">
                      <div className="col s1">

                      </div>
                      <div className="col s1 right-align">
                        <i className="mdi-navigation-expand-more"></i>
                      </div>
                    </div>

                  </div>
                  <div className="card-image details-small">
                    <span className="card-title">Dapp Name</span>
                  </div>
                  <div className="card-content">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>


          </div>


        </div>
      </div>
    );
  }
}
export default DappDetails;
