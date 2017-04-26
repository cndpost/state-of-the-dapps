import React from 'react';
import Dapp from '../containers/dapp';

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
    let { featuredDapps } = this.props;
    return (
      <div>
        {
          featuredDapps.map((dapp, index) => (
            <Dapp key={index} index={index} dapp={dapp}/>
          ))
        }
      </div>
    );
  }
}

export default FeaturedDapps;
