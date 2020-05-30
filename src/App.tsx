import React, { useState } from 'react';
import Counter from './Counter';
import Btn from './Btn';


function App() {

  const [countVal, setCountVal] = useState(0)

  return (
    <div className="App" data-test="app-box">
      <Counter count={countVal}/ >
      <Btn data-test="btn-add" operation='+' onClickFunc={() => setCountVal((v:number) => v + 1)}/>
      <Btn data-test="btn-subtract" operation='-' onClickFunc={() => setCountVal((v:number) => v - 1)}/>
    </div>
  );
}

export default App;
