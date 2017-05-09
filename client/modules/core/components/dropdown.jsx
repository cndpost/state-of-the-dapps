import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );
  }

  render() {
    const {items, text} = this.props;
    return (

      <div>
        <a className='dropdown-button btn' href='#' data-activates='dropdown1'>{text}</a>
        <ul id='dropdown1' className='dropdown-content'>
          {items.map((item, i) =>
            <li><a key={i}>{item}</a></li>
          )}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
