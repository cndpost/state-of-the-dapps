import React from 'react';
import IconButtons from '../containers/icon_buttions';
import Select2 from 'react-select2-wrapper';
import {_} from 'meteor/underscore';
class SearchBox extends React.Component {
  constructor(props) {
    super(props);

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

  tagChange() {
    let {tagAction} = this.props;
    let values = [];
    let selectedValues = $('.select2-selection__choice');
    _.each(selectedValues, (item) => {
      values.push($(item).attr('title'));
    });
    tagAction(values);
  }

  render() {
    let {tags,selectedTags} = this.props;
    return (
      <section className="bg-white">
        <div className="row container">
          <div className='search-area'>
            <div className='input-field col s12'>
              <i className='fa fa-fw fa-search prefix' onClick={this.searchButtonPress.bind(this)}></i>
              <input ref='searchBox' onClick={this.searchButtonPress.bind(this)} onKeyUp={this.handleKeyUp.bind(this)}
                     type='text' className='search-box'></input>
              <label onClick={this.searchButtonPress.bind(this)}>Search</label>
              <Select2
                multiple
                data={tags}
                value = {selectedTags}
                options={
                  {
                    placeholder: 'search by tags'
                  }
                }
                ref='selectedTags'
                onChange={this.tagChange.bind(this)}

              />

            </div>
            <IconButtons/>
          </div>

        </div>
      </section>
    );
  }
}

export default SearchBox;
