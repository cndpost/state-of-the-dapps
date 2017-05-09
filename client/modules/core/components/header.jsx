import React from 'react';
import InfoModal from '/client/modules/core/containers/info_modal';
import SubmitModal from '/client/modules/core/containers/submit_modal';
import SettingsModal from '/client/modules/core/containers/settings_modal';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className='scroll-to-top' onClick={this.scrollToTop.bind(this)}>
          <i className='fa fa-fw fa-arrow-up'></i>
        </div>
        <div ref='navArea' className='header-container container'>
          <header className='center-align'>
            <h1><a href="/" id="home-link">State of the Ðapps</a></h1>
          </header>
          <section>
          </section>
        </div>
        <InfoModal/>
        <SubmitModal/>
        <SettingsModal/>
      </div>
    );
  }
}

export default Header;
