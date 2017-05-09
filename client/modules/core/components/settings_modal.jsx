import React from 'react';

class SettingsModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="settingsModal" className="modal modal-fixed-footer bottom-sheet closed">
        <div className="modal-content">
          <h6>Filter Settings</h6>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <button className=" modal-action modal-close waves-effect btn-flat">Save</button>
          <button className=" modal-action modal-close waves-effect btn-flat">Cancel</button>
        </div>
      </div>
    );
  }
}

export default SettingsModal;
