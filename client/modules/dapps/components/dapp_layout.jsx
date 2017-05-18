import React from 'react';
import FilterArea from '/client/modules/core/containers/filter_area';
import DappList from '/client/modules/dapps/containers/dapp_list';
import SearchBox from '/client/modules/core/containers/search_box';

let trackSearchAction = _.debounce(function (searchText) {
  // console.log('searchAction', searchText);
  analytics.track('searchAction', {
    searchText
  });
}, 300);

class DappLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: 'updated',
      sortDirection: 'desc',
      searchText: '',
      tags: ''
    };

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
    this.setState({searchText});
    trackSearchAction(searchText);
  }

  filterAction(tags) {
    console.log(tags);
    this.setState({tags});
  }

  render() {
    let {sortType, sortDirection, searchText, tags} = this.state;
    return (
      <div className='row'>

        <SearchBox searchAction={this.searchAction.bind(this)} filterAction={this.filterAction.bind(this)}/>

        <FilterArea toggleSortType={this.toggleSortType.bind(this)}
                    toggleDirection={this.toggleDirection.bind(this)}
                    sortType={sortType} sortDirection={sortDirection}/>
        <DappList searchText={searchText} sortType={sortType} sortDirection={sortDirection} tags={tags}/>
      </div>
    );
  }
}

export default DappLayout;
