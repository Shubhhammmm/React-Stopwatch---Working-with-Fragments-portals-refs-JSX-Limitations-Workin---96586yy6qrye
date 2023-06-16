import React, { useRef, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);
  let secondElapsed = 0;
  const startbtn = () => {
    startTime.current = Date.now()
    intervalRef.current = setInterval(()=>{
      setCurrentTime(Date.now())
    },10)
  }
    const stopbtn = ()=>{
    clearInterval(intervalRef.current)
      intervalRef.current =0
    }
  secondElapsed = ((currentTime - startTime.current)/1000)
  const resetbtn = () => {
    setCurrentTime(0);
    startTime.current = 0;
    secondElapsed =0;
    setLaps([])
  }

  const trackLapes = () => {
    setLaps([...laps,secondElapsed])
  }
  
  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>{secondElapsed.toFixed(3)} Time</h1>
        <section className='buttons'>
          <button onClick={startbtn} className="start-btn">START</button>
          <button onClick={stopbtn} className="stop-btn">STOP</button>
          <button onClick={trackLapes} className="lap-btn">LAP</button>
          <button onClick={resetbtn} className="reset-btn">RESET</button>
        </section>
      </section>
{laps.length ? (
  <section className='lap-section'>
        <h2>Laps</h2>
        <section className='laps'>
  {laps.map((e,i) => (
    <p key={i}>{e}</p>
  ))}
        </section>
      </section>
):null}
      
    </div>
  )
}


export default App;
