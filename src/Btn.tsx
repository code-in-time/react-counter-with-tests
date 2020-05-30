import React from 'react';

interface IProps {
  operation?: '+' | '-',
  onClickFunc: () => void
}

function Btn( props: IProps) {

  const { operation='+', onClickFunc } = props

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
      <button
        data-test="btn-box"
        onClick={() => onClickFunc()}
        >{makeText()}</button>

    </div>
  );
}

export default Btn;
