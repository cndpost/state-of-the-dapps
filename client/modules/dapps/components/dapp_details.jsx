import React from 'react';
import {dappHelper} from '/client/helpers/dappHelpers';
import DappsRelated from '/client/modules/dapps/containers/dapps_related';

class DappDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {dapp} = this.props;
    return (
      <div id="details-page" className="section">
        {(dapp) ?
          <div id="dapp-details-content">
            <div id="details-page-content" className="row">
              <div className="col l8 m12 xs12 md6">
                <div className="row">
                  <div className="col s12">
                    <div id="dapp-details-name" className={`card radius ${dappHelper.getStatusColor(dapp.status)}` }>
                      <div className="card-details-title">

                        <div className="col s4">
                          <span className="black-text">Details</span>
                        </div>
                        <div className="col s4"></div>
                        <div className="col s4">
                          <span className="black-text status-text">
                            {dappHelper.getStatusText(dapp.status)}
                          </span>
                        </div>
                      </div>

                      <div id="dapp-details-name-text"
                           className="black-text">
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

                      <ul id="overview-collection" className="collection z-depth-1">
                        {dapp.contact &&
                        <li className="collection-item">
                          <div className="col s4 grey-text darken-1">Contact</div>
                          <div className="col s8 grey-text text-darken-4 left-align">{dapp.contact}</div>
                        </li>
                        }
                        {dapp.license &&
                        <li className="collection-item">
                          <div className="col s4 grey-text darken-1">
                            Software License
                          </div>
                          <div className="col s8 grey-text text-darken-4 left-align">
                            {dapp.license}
                          </div>
                        </li>
                        }
                        { dapp.created &&
                        <li className="collection-item">
                          <div className="col s4 grey-text darken-1"><i className="mdi-social-cake"></i> Created
                          </div>
                          <div className="col s8 grey-text text-darken-4 left-align">{dapp.created}</div>
                        </li>
                        }
                        { dapp.last_update &&
                        <li className="collection-item">
                          <div className="col s4 grey-text darken-1"><i className="mdi-social-cake"></i> Last
                            Updated
                          </div>
                          <div className="col s8 grey-text text-darken-4 left-align">{dapp.last_update}</div>
                        </li>
                        }
                        {dapp.contract_address_mainnet &&
                        <li className="collection-item">
                          <div className="col s4 grey-text darken-1"><i className="mdi-social-cake"></i> Mainnet
                            contract address
                          </div>
                          <div className="col s8 grey-text text-darken-4 left-align">
                            <a target='_blank' href={'https://etherscan.io/address/' + dapp.contract_address_mainnet}>
                              {dapp.contract_address_mainnet}
                            </a>
                          </div>
                        </li>
                        }
                        {dapp.contract_address_ropsten &&
                        <li className="collection-item">
                          <div className="col s2 grey-text darken-1"><i className="mdi-social-cake"></i> Ropsten
                            contract address
                          </div>
                          <div className="col s10 grey-text text-darken-4 left-align">
                            <a target='_blank' href={'https://ropsten.io/address/' + dapp.contract_address_ropsten}>
                              {dapp.contract_address_mainnet}
                            </a>
                          </div>
                        </li>
                        }
                        <div className="link-title card-details-title">
                          <div className="row">
                            <div className="col s4">
                              <span className="">Important Links</span>
                            </div>
                          </div>
                        </div>

                        <div className="important-link col s6 m4 l4 grey-text text-darken-4 left-align truncate">
                          { dapp.url ?
                            <a href={dapp.url} target="_blank">
                              <i className='icon-link fa fa-fw fa-globe'></i> SITE
                            </a> :
                            <span><i className='icon-link fa fa-fw fa-globe'></i> NO SITE</span>
                          }
                        </div>


                        <div className="important-link col s6 m4 l4 grey-text text-darken-4 left-align">
                          {dapp.github ?
                            <a href={dapp.github} target="_blank">
                              <i className='icon-link fa fa-fw fa-github'></i> GITHUB
                            </a> :
                            <span><i className='icon-link fa fa-fw fa-github'></i> NO GITHUB</span>
                          }
                        </div>


                        <div className="important-link col s6 m4 l4 grey-text text-darken-4 left-align">
                          {dapp.blog ?
                            <a href={dapp.blog} target="_blank">
                              <i className='icon-link fa fa-fw fa-book'></i> BLOG
                            </a> :
                            <span><i className='icon-link fa fa-fw fa-book'></i> NO BLOG</span>
                          }
                        </div>

                        <div className="important-link col s6 m4 l4 grey-text text-darken-4 left-align">
                          {dapp.wiki ?

                            <a href={dapp.wiki} target="_blank">
                              <i className='icon-link fa fa-fw fa-wikipedia-w'></i> WIKI
                            </a> :
                            <span>
                            <i className='icon-link fa fa-fw fa-wikipedia-w'></i> NO WIKI
                          </span>
                          }
                        </div>


                        <div className="important-link col s6 m4 l4 grey-text text-darken-4 left-align">
                          {dapp.slack ?
                            <a href={dapp.slack} target="_blank">
                              <i className='icon-link fa fa-fw fa-slack'></i> SLACK
                            </a>
                            :
                            <span>
                              <i className='icon-link fa fa-fw fa-slack'></i> NO SLACK
                            </span>
                          }
                        </div>


                        <div className="important-link col s6 m4 l4 grey-text text-darken-4 left-align">
                          {dapp.gitter ?
                            <a href={dapp.gitter} target="_blank">
                              <i className='icon-link fa fa-fw fa-comments'></i> GITTER
                            </a> :
                            <span><i className='icon-link fa fa-fw fa-comments'></i> NO GITTER</span>
                          }
                        </div>


                        <div className="important-link col s6 m4 l4 grey-text text-darken-4 left-align">
                          { dapp.reddit ?
                            <a href={dapp.reddit} target="_blank">
                              <i className='icon-link fa fa-fw fa-reddit'></i> REDDIT
                            </a> :
                            <span><i className='icon-link fa fa-fw fa-reddit'></i> NO REDDIT</span>
                          }
                        </div>


                        <div className="important-link col s6 m4 l4 grey-text text-darken-4 left-align">
                          {dapp.the_etherian ?

                            <a href={dapp.the_etherian} target="_blank">
                              <i className='icon-link fa fa-fw fa-newspaper-o'></i> The Etherian
                            </a> :
                            <span>
                            <i className='icon-link fa fa-fw fa-newspaper-o'></i> NO Etherian</span>
                          }
                        </div>


                        <div className="important-link col s6 m4 l4 grey-text text-darken-4 left-align">
                          { dapp.twitter ?
                            <a href={dapp.twitter} target="_blank">
                              <i className='icon-link fa fa-fw fa-twitter'></i> Twitter
                            </a> :
                            <span><i className='icon-link fa fa-fw fa-twitter'></i> No Twitter</span>
                          }
                        </div>


                        <div className="important-link col s6 m4 l4 grey-text text-darken-4 left-align">
                          { dapp.facebook ?
                            <a href={dapp.facebook} target="_blank">
                              <i className='icon-link fa fa-fw fa-facebook'></i> Facebook
                            </a> :
                            <span><i className='icon-link fa fa-fw fa-facebook'></i> No Facebook</span>

                          }
                        </div>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
              <div id="details-page-sidebar" className="col l4 m12 xs12 md6">
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
