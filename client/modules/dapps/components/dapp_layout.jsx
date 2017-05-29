import React from 'react';
import FilterArea from '/client/modules/core/containers/filter_area';
import DappList from '/client/modules/dapps/containers/dapp_list';
import SearchBox from '/client/modules/core/containers/search_box';

class DappLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: 'updated',
      sortDirection: 'desc',
      searchText: '',
      tags: []
    };
  }

  componentDidMount() {
    this.debounceSearchAction = _.debounce(function (searchText) {
      this.setState({searchText});
      if (searchText.length >= 3) {
        // console.log('searchAction', searchText);
        analytics.track('searchAction', {
          searchText
        });
      }
    }, 300);
  }

  toggleSortType() {
    let sortType = (this.state.sortType === 'status') ? 'updated' : 'status';
    this.setState({sortType});
    analytics.track('toggleSortType', {
      sortType
    });
  }

  toggleDirection() {
    let sortDirection = (this.state.sortDirection === 'asc') ? 'desc' : 'asc';
    this.setState({sortDirection});
    analytics.track('toggleDirection', {
      sortDirection
    });
  }

  searchAction(searchText) {
    this.debounceSearchAction(searchText);
  }

  tagAction(tags) {
    this.setState({tags});
  }

  render() {
    let {sortType, sortDirection, searchText, tags} = this.state;
    return (
      <div className='row'>

        <SearchBox searchAction={this.searchAction.bind(this)} tagAction={this.tagAction.bind(this)}/>

        <FilterArea toggleSortType={this.toggleSortType.bind(this)}
                    toggleDirection={this.toggleDirection.bind(this)}
                    sortType={sortType} sortDirection={sortDirection}/>
        <DappList searchText={searchText} sortType={sortType} sortDirection={sortDirection} tags={tags}/>
      </div>
    );
  }
}

export default DappLayout;
