import React from "react";

export default props => {
  return (
    <div>
      <p>Rhymes:</p>
      <ul>
        {props.rhymes.rhymes.all.map(rhyme => (
          <li key={rhyme}>{rhyme}</li>
        ))}
      </ul>
    </div>
  );
};
