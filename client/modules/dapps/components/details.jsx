import React from "react";
class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props
    return (
      <div id="details" className="container">
        <div className="row">
          <div className="col s8">
            <div className=" bg-white">
              <div class="title">
                <h2>About {props.name}</h2>
              </div>
              <p>
                {props.details}
              </p>

              <a href={props.website} className="btn black">
                {props.name}
              </a>
            </div>
          </div>
          <div className="col s4">
            <div className=" bg-white">
              <div class="title">
                <h2>Details</h2>
                <table>
                  <tr>
                    <td>
                      <b>Name</b>
                    </td>
                    <td>{props.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Website</b>
                    </td>
                    <td>
                      <a target="_blank" href={props.website}>
                        {props.website}
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Details.defaultProps = {
  name: 'dapps',
  website: 'https://dapps.ethercasts.com/',
  details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
  ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' +
  'when an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
  ' It has survived not only five centuries, but also the leap into electronic typesetting, ' +
  'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ' +
  'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus ' +
  'PageMaker including versions of Lorem Ipsum.',
}

export default Details;