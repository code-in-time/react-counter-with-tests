import React from 'react';

interface iProps {
  count?: number
}

function Counter(props: iProps) {

  const { count=0 } = props
  return (
    <div className="Counter">
      <div data-test="count-box">{count}</div>

    </div>
  );
}

export default Counter;
