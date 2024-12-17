import { useState } from 'react'
import { MainChart } from "./cmps/MainChart.jsx"
import { debounce } from 'lodash'


function App() {
  const [timePeriod, setTimePeriod] = useState('')
  const [period, setPeriod] = useState('')
  const [ipAddress, setIpAddress] = useState('')

  const [debouncedTimePeriod, setDebouncedTimePeriod] = useState('');
  const [debouncedPeriod, setDebouncedPeriod] = useState('');
  const [debouncedIpAddress, setDebouncedIpAddress] = useState('');


  const debouncedHandleChange = debounce((ev) => {
    let cuurentFiled = ev.target.name

    if (cuurentFiled === "time-period") {
      setDebouncedTimePeriod(ev.target.value);
    } else if (cuurentFiled === 'period') {
      setDebouncedPeriod(ev.target.value);
    } else if (cuurentFiled === 'ip-address') {
      setDebouncedIpAddress(ev.target.value);
    }
  }, 500)



  function handleChange(ev) {
    let cuurentFiled = ev.target.name
    
    if (cuurentFiled === "time-period"){
      setTimePeriod(ev.target.value)
    } else if (cuurentFiled === "period"){
      setPeriod(ev.target.value)
    } else if (cuurentFiled === "ip-address"){
      setIpAddress(ev.target.value)
    }
    debouncedHandleChange(ev)
  }





  return (
    
    <>
      <div className='header'>
        <h1>Amit Katz - Home Exercise</h1>
      </div>
      <div className="main">
        <div className='inputs-area'>
          <select name="time-period" id="time-period" value={timePeriod} onChange={handleChange} className='setting'>
            <option value="">Select Time period</option>
            <option value='12'>Last 12 hours</option>
            <option value='24'>Last Day</option>
            <option value="48">Last 48 hours</option>
            <option value="168">Last Week</option>
          </select>
          <select name='period' id = 'period' value={period} onChange={handleChange} className='setting'>
            <option value="">Select Period</option>
            <option value="900">900</option>
            <option value="1800">1800</option>
            <option value="3600">3600</option>
            <option value="7200">7200</option>
          </select>
          <input type="text" name='ip-address'value={ipAddress} onChange={handleChange} className='setting' autoComplete='off' placeholder='insert IP adress'/>
        </div>
        <div className='chart-area'>
          {!debouncedPeriod || !debouncedIpAddress || !debouncedTimePeriod?(<h2 className='no-data'> insert data</h2>):(
          <MainChart period={debouncedPeriod} timePeriod={debouncedTimePeriod} ip ={debouncedIpAddress}/>
         )}
        </div>
      </div>
    </>

  )
}

export default App
