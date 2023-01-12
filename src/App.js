import {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4ed000ad38d59e46e65402a30cd1897b`

  const searchLocation = (e)=>{
    if(e.key === 'Enter'){

      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data);
      })
      setLocation('')
    }

  }
  return (
    <div className='app'>
      <div className='search'>
        <input type='text' value={location} onChange={e=>setLocation(e.target.value)} placeholder='ciudad' onKeyPress={searchLocation}/>
      </div>
      <div className='Container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp} °F</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined && 
        
        <div className='bottom'>
          <div className='feels'>
            {data.main ? <p>{data.main.feels_like}°F</p> :null}
            <p>Feels like</p>
          </div>
          <div className='humidity'>
          {data.main ? <p>{data.main.humidity}%</p> :null}
          <p>humidity</p>
          </div>
          <div className='wint'>
            {data.wind ? <p>{data.wind.speed} MPH</p>: null}
            <p>Wind speed</p>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default App;
