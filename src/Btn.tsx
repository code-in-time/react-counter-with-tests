import React from 'react';


function Btn({ operation='+' }) {

  const makeText = () => {
    if (operation === '+') {
      return 'Add'
    }

    if (operation === '-') {
      return 'Subtract'
    }
  }

  return (
    <div className="Btn">
      <div data-test="btn-box">{makeText()}</div>

    </div>
  );
}

export default Btn;
