import React from 'react';
import {_} from 'meteor/underscore';
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

      const hasAnalytics = (typeof analytics !== 'undefined');
      const hasWeb3 = (typeof web3 !== 'undefined');

      if (hasAnalytics && searchText.length >= 3) {
        analytics.track('searchAction', {
          searchText,
          hasWeb3
        });
      }
    }, 300);
  }

  toggleSortType() {
    let sortType = (this.state.sortType === 'status') ? 'updated' : 'status';
    this.setState({sortType});

    const hasAnalytics = (typeof analytics !== 'undefined');
    const hasWeb3 = (typeof web3 !== 'undefined');
    if (hasAnalytics) {
      analytics.track('toggleSortType', {
        sortType,
        hasWeb3
      });
    }
  }

  toggleDirection() {
    let sortDirection = (this.state.sortDirection === 'asc') ? 'desc' : 'asc';
    this.setState({sortDirection});

    const hasAnalytics = (typeof analytics !== 'undefined');
    const hasWeb3 = (typeof web3 !== 'undefined');
    if (hasAnalytics) {
      analytics.track('toggleDirection', {
        sortDirection,
        hasWeb3
      });
    }
  }

  searchAction(searchText) {
    this.debounceSearchAction(searchText);
  }

  tagAction(tags) {
    if (!_.isEmpty(tags)) {
      this.setState({tags});

      const hasAnalytics = (typeof analytics !== 'undefined');
      const hasWeb3 = (typeof web3 !== 'undefined');
      if (hasAnalytics) {
        analytics.track('searchAction', {
          tags,
          hasWeb3
        });
      }
    } else {
      this.setState({tags: []});
    }
  }

  render() {
    let {sortType, sortDirection, searchText, tags} = this.state;
    return (
      <div className='row'>

        <SearchBox searchAction={this.searchAction.bind(this)} selectedTags={tags}
                   tagAction={this.tagAction.bind(this)}/>

        <FilterArea toggleSortType={this.toggleSortType.bind(this)}
                    toggleDirection={this.toggleDirection.bind(this)}
                    sortType={sortType} sortDirection={sortDirection}/>
        <DappList searchText={searchText} sortType={sortType} sortDirection={sortDirection} tags={tags}/>
      </div>
    );
  }
}

export default DappLayout;
