import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className='white-text center-align'>
        <div className='row'>
          <div className='col s12 m4'>
            Service by <a target='_blank' href='http://www.moby-corp.com/'>Moby Corp</a>
          </div>
          <div className='col s12 m4'>
            Twitter <a href='https://twitter.com/mobycorp' target='_blank'>@MobyCorp</a>
          </div>
          <div className='col s12 m4'>
            Fork me on <a target='_blank' href='https://github.com/cndpost/state-of-the-dapps'><i
            className='fa fa-fw fa-github'></i>GitHub</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
