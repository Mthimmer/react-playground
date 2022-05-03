import React, { Component } from "react";

// function StateDescription({ name, description }) {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>
//         <i>{description}</i>
//       </p>
//     </div>
//   );
// }

// export default StateDescription;

// import React, { Component } from 'react'

export default class StateDescription extends Component {
  render() {
    const { name, description } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>
          <i>{description}</i>
        </p>
      </div>
    );
  }
}
