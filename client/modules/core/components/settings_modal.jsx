import React from 'react';
import Dropdown from '/client/modules/core/containers/dropdown';
class SettingsModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {tags} = this.props;
    return (
      <div id="settingsModal" className="modal modal-fixed-footer bottom-sheet closed">
        <div className="modal-content">
          <h6>Filter Settings</h6>
          <p>A bunch of text</p>
          <Dropdown items={tags} text="interesting tags"/>

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
