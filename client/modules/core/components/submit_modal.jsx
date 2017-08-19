import React from 'react';

class SubmitModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optIn: true
    };
  }

  pressOptIn(event) {
    const {optIn} = this.state;
    event.stopPropagation();
    this.setState({optIn: !optIn});
  }


  submitQueue() {
    const {create} = this.props;
    let $thisForm = $(this.refs.submissionForm);
    const getFormData = () => {
      let dataObj = {};
      $thisForm.serializeArray().forEach((item, i) => {
        dataObj[item.name] = item.value;
      });
      return dataObj;
    };
    let res = create(this.refs.antiSpam.value, getFormData(), $thisForm);

  }

  render() {
    const {optIn} = this.state;
    const licenses = ['Apache', 'LGPL', 'GPL', 'proprietary', 'MIT', 'LGPL', 'Opensource', 'GPLv3', 'CC0', 'CC BY-SA', 'CC BY-NC-S'];
    return (
      <div id='submitModal' className='modal'>
        <div className='modal-content'>
          <div className='row slim-row center-align'>
            <h4>Submit a Dapp</h4>
            <p>
              Complete the form below or email <a href='mailto:wrkallman@gmail.com' target='_blank'>wrkallman@gmail.com</a>
            </p>
          </div>
          <form ref='submissionForm'>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <input className='validate' name='dapp_name' type='text' required maxLength='32'/>
                <label>Dapp Name *</label>
              </div>
              <div className='input-field col s12 m6'>
                <input className='validate' name='description' type='text' required maxLength='64'/>
                <label>Dapp Description *</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <input className='validate' name='contact' type='text' required maxLength='32'/>
                <label>Founder(s) *</label>
              </div>
              <div className='input-field col s12 m6'>
                <input className='validate' name='contact_email' type='email' required maxLength='32'/>
                <label>Contact Email (not shown publicly) *</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <input name='site' type='url' pattern="https?://.+" required maxLength='128'/>
                <label>Site URL *</label>
              </div>
              <div className='input-field col s12 m6'>
                <input name='reddit' type='url' pattern="https?://.+" maxLength='128'/>
                <label>Reddit URL</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <input name='github' type='url' pattern="https?://.+" maxLength='128'/>
                <label>GitHub URL</label>
              </div>
              <div className='input-field col s12 m6'>
                <input name='slack' type='url' pattern="https?://.+" maxLength='128'/>
                <label>Slack URL</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <input name='twitter' type='url' pattern="https?://.+" maxLength='64'/>
                <label>Twitter URL</label>
              </div>
              <div className='input-field col s12 m6'>
                <input name='facebook' type='url' pattern="https?://.+" maxLength='128'/>
                <label>Facebook URL</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <input name='wiki' type='url' pattern="https?://.+" maxLength='128'/>
                <label>Wiki URL</label>
              </div>
              <div className='input-field col s12 m6'>
                <input name='blog' type='url' pattern="https?://.+" maxLength='128'/>
                <label>Blog URL</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <label>Software License *</label>
                <input name='license' type='text' required maxLength='16'/>

              </div>
              <div className='input-field col s12 m6'>
                <input name='the_etherian' type='url' pattern="https?://.+" maxLength='128'/>
                <label>The Etherian URL</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <input name='contract_address_mainnet' type='text' pattern="(0x)?[0-9a-fA-F]{40}" maxLength='42'/>
                <label>Mainnet contract address</label>
              </div>
              <div className='input-field col s12 m6'>
                <input name='contract_address_ropsten' type='text' pattern="(0x)?[0-9a-fA-F]{40}" maxLength='42'/>
                <label>Ropsten contract address</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12'>
                <input name='tags' type='text' maxLength='128'/>
                <label>Tags (comma separated)</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12 m6'>
                <select className='browser-default validate' required name='status'>
                  <option value='' defaultValue>Project Status *</option>
                  <option value='1. Abandoned'>Abandoned</option>
                  <option value='2. On Hold'>On Hold</option>
                  <option value='3. Stealth Mode'>Stealth Mode</option>
                  <option value='4. Concept'>Concept</option>
                  <option value='5. Work In Progress'>Work In Progress</option>
                  <option value='6. Demo'>Demo</option>
                  <option value='7. Working Prototype'>Working Prototype</option>
                  <option value='8. Live'>Live</option>
                </select>
              </div>
              <div className='input-field col s12 m6'>
                <input className="filled-in" type="checkbox" id="test5" name="opt_in" checked={optIn}
                       onChange={this.pressOptIn.bind(this)}
                />
                <label htmlFor="test5"> It's ok to send me (very occasional) email about the State of the Dapps
                  service.</label>
              </div>
              <div className='input-field col s12 m6'>
                <input ref='antiSpam' className='anti-spam validate' required type='text' maxLength='3'/>
                <label>Anti Spam: 40 + 2 = ?</label>
              </div>
            </div>
            <div className='row center-align slim-row'>
              <a href='#' className='modal-action modal-close waves-effect waves-green btn-flat'>Cancel</a>
              &nbsp;&nbsp;
              <button type='button'
                      className='waves-effect waves-blue btn light-blue'
                      onClick={this.submitQueue.bind(this)}>Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SubmitModal;
