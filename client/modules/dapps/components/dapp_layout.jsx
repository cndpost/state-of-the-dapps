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
      tags: ''
    };

  }

  toggleSortType() {
    this.setState({sortType: (this.state.sortType == 'status') ? 'updated' : 'status'});
  }

  toggleDirection() {
    this.setState({sortDirection: (this.state.sortDirection == 'asc') ? 'desc' : 'asc'});
  }

  searchAction(searchText) {
    this.setState({searchText});
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
