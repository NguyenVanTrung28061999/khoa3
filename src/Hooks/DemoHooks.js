import React, { useState, useEffect } from "react";

export default function DemoHooks() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [state, setState] = useState({ like: 0 });

  useEffect(() => {
    console.log("load Data update ");
  }, []);

  return (
    <div>
      <h1>like : {state.like}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setState({
            like: state.like + 1,
          });
        }}
      >
        +
      </button>
    </div>
  );
}
