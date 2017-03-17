import React from 'react';
import FeaturedDappItem from '/client/modules/dapps/containers/featured_dapp_item';

class FeaturedDapps extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.collapsible').collapsible();
  }

  componentDidUpdate() {
    $('.collapsible').collapsible();
  }

  render() {
    let {featuredDapps} = this.props;
    return (
      <div>
        {(_.isEmpty(featuredDapps)) ? null :
          <h4>Featured Dapps</h4>
        }
        <ul className="collapsible" data-collapsible="accordion">
          {
            featuredDapps.map((dapp, index) => (
              <FeaturedDappItem key={index} index={index} dapp={dapp}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default FeaturedDapps;
