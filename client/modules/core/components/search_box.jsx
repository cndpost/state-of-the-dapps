import React from 'react';
import {$} from 'meteor/jquery';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import IconButtons from '../containers/icon_buttions';


class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTags: []
    };
  }

  componentDidMount() {
    let {searchBox} = this.refs;
    searchBox.focus();
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

  onFilterChange(selectedTags) {
    let {filterAction} = this.props;
    this.setState({selectedTags: (selectedTags) ? selectedTags : []});
    filterAction((selectedTags) ? selectedTags.split(',') : []);
  }

  render() {
    let {tags} = this.props;
    let {selectedTags} = this.state;
    return (

      <section className="bg-white">
        <div className="row container">
          <div className='search-area'>
            <div className='input-field col s12'>
              <section id="search-area">
                <i className='fa fa-fw fa-search prefix' onClick={this.searchButtonPress.bind(this)}></i>
                <input ref='searchBox' onClick={this.searchButtonPress.bind(this)}
                       onKeyUp={this.handleKeyUp.bind(this)}
                       type='text' className='search-box'></input>
                <label onClick={this.searchButtonPress.bind(this)}>Search</label>
                <IconButtons/>
              </section>

            </div>
            <Select multi simpleValue value={selectedTags} placeholder="Select Tags"
                    options={tags} onChange={this.onFilterChange.bind(this)}/>


          </div>

        </div>
      </section>
    );
  }
}

export default SearchBox;
