import React from "react";

export default props => {
  return (
    <ul>
      {props.definitions.map(e => (
        <li key={e.definition}>{e.definition}</li>
      ))}
    </ul>
  );
};
