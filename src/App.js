import logo from './logo.svg'
import './App.css'

import useGeolocation from 'react-hook-geolocation'

const App = () => {
  const geolocation = useGeolocation()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className="content">
          <ul>
            <li>Latitude: {geolocation.latitude}</li>
            <li>Longitude: {geolocation.longitude}</li>
            <li>Location accuracy: {geolocation.accuracy}</li>
            <li>Altitude: {geolocation.altitude}</li>
            <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
            <li>Heading: {geolocation.heading}</li>
            <li>Speed: {geolocation.speed}</li>
            <li>Timestamp: {geolocation.timestamp}</li>
          </ul>
        </section>
      </header>
    </div>
  )
}

export default App
