import React from 'react';
import Dapp from '../containers/dapp';

class DappsRelated extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {dapps} = this.props;
    return (
      <div>
        {
          (dapps) ? dapps.map((dapp, index) => (
            <Dapp className="col l6 s12" key={index} dapp={dapp} customClass="col s6" isRelated="true"/>
          )) :
            <div className='no-results center-align white-text flow-text section'>
              <p>No Related Dapps Yet</p>
            </div>
        }
      </div>
    );
  }
}

export default DappsRelated;
