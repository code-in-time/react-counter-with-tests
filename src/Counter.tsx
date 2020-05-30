import React from 'react';


function Counter({ count=0 }) {
  return (
    <div className="Counter">
      <div data-test="count-box">{count}</div>

    </div>
  );
}

export default Counter;
