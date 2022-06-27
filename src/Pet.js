// If you're using JSX, import React from "react" is called under the hood.
// There's no need to call it.
// import React from "react";

const Pet = (props) => {
  return (
    <div>
      <h1>{props.name} </h1>
      <h2>{props.animal} </h2>
      <h3>{props.breed} </h3>
    </div>
  );
};

export default Pet;
