import React from 'react';
import {$} from 'meteor/jquery';
import IconButtons from '../containers/icon_buttions';


class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {searchBox, allTags} = this.refs;
    var data = [{id: 0, text: 'enhancement'}, {id: 1, text: 'bug'}, {id: 2, text: 'duplicate'}, {
      id: 3,
      text: 'invalid'
    }, {id: 4, text: 'wontfix'}];
    searchBox.focus();
    this.initializeSelect();
  }

  componentDidUpdate() {
    this.initializeSelect();
  }

  initializeSelect() {
    let {allTags} = this.props;
    $(function () {
      $('#filter-area').select2({
        placeholder: 'Select Tags',
        data: allTags
      });
    });
  }

  searchButtonPress() {
    let {searchBox} = this.refs;
    searchBox.focus();
  }

  handleKeyUp() {
    let {searchAction} = this.props;
    let {searchBox} = this.refs;
    searchAction(searchBox.value);
  }

  render() {
    return (
      <section className="bg-white">
        <div className="row container">
          <div className='search-area'>
            <div className='input-field col s12'>
              <i className='fa fa-fw fa-search prefix' onClick={this.searchButtonPress.bind(this)}></i>
              <input ref='searchBox' onClick={this.searchButtonPress.bind(this)} onKeyUp={this.handleKeyUp.bind(this)}
                     type='text' className='search-box'></input>
              <label>Search</label>
            </div>


            <IconButtons/>
            <select id="filter-area" class="js-example-basic-multiple" multiple="multiple">
            </select>
          </div>

        </div>
      </section>
    );
  }
}

export default SearchBox;
