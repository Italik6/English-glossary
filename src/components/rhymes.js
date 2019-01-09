import React from "react";

export default props => {
  return (
    <div>
      <p>Rhymes:</p>
      <ul>
        {props.rhymes.rhymes.all.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
