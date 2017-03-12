import React from "react";
import FeaturedDappItem from "/client/modules/dapps/containers/featured_dapp_item";

class FeaturedDapps extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  }

  componentDidUpdate() {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  }

  render() {
    let {featuredDapps} = this.props;
    console.log(featuredDapps);
    return (
      <div className="carousel carousel-slider center" data-indicators="true">
        <div className="carousel-fixed-item center">
        </div>
        {(!_.isEmpty(featuredDapps)) ?
          featuredDapps.map((dapp, index) => (
            <FeaturedDappItem key={index} index={index} dapp={dapp}/>
          )) :
          <div className="carousel-item black white-text" href="#Dapps">
            <h2>STATE OF THE ÐAPPS</h2>
            <p className="white-text">A Curated Collection of Decentralized Apps</p>
          </div>
        }
      </div>


    );
  }
}

export default FeaturedDapps;
