import React from 'react';
import { formatHelper } from '/client/helpers/format-helpers';
class FilterArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: 'updated',
      sortTypes: [ 'updated', 'status' ],
      sortDirection: 'desc',
    };
  }

  getSortType() {

  }

  toggleSortType() {
    this.setState({ sortType: (this.state.sortType == 'status') ? 'status' : 'updated' });
  }

  toggleDirection() {
    this.setState({ sortDirection: (this.state.sortDirection == 'desc') ? 'desc' : 'asc' });
  }

  render() {
    let { sortTypes } = this.state;
    let { dappCount, toggleDirection, toggleSortType, sortType, sortDirection } = this.props;
    return (
      <div>
        <div className='filter-area white-text'>
          <div className='col s5'>
            {dappCount} dapps listed
          </div>
          <div className='col s7 right-align'>
            Sort: <a className="sort-direction"
                     onClick={toggleSortType.bind(this)}>{formatHelper.capitalize(sortType)} </a>
            <i className={`sort-direction fa fa-sort-amount-${sortDirection}`}
               onClick={toggleDirection.bind(this)}></i>
          </div>
        </div>

      </div>
    );
  }
}
FilterArea.defaultProps = {
  dappCount: 0
};
export default FilterArea;
