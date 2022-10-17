import './App.css';
import { useState } from 'react'
import { BsCloudSun } from "react-icons/bs";

function App() {

  const [num , setNum] = useState(0)
  const [isLit , setLit] = useState(true)

  return (
    <div className="App">
      <div className={`body ${(isLit) ? 'lit' : 'dark'}`}>
        <div className="header">
          <nav>
            <div className="logoName">
              Counter App
            </div>
            <div className="btn1">
              <i className={`bi ${(isLit) ? 'bi-moon' : 'bi-sun'}`} onClick={ () => {
                  setLit(!isLit)
              } }></i>
            </div>
          </nav>
        </div>
        <div className="mainPart">
          <div className="screen">
            <p>You're Count is</p>
            {num}
          </div>
          <div className="btn">
            <button className='plus' onClick={() => {
              setNum(num + 1)
            }}>Add + </button>
            
            <button className='min'
            onClick={() => {
              setNum(num - 1)
            }}>Subtract -</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
