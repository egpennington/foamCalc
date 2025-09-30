import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import tankData from '../tankData.js'
import tankRoutes from '../tankRoutes.js'
import Menu from './Menu'
import AboutPopup from './AboutPopup'


export default function FoamCalcApp() {
  const [tankNumber, setTankNumber] = useState('')
  const [weather, setWeather] = useState(null)
  const [foamResults, setFoamResults] = useState(null)
  const [showAbout, setShowAbout] = useState(false);
  const [showRoute, setShowRoute] = useState(false);
  const [routeImage, setRouteImage] = useState("");

  function handleShowTankRoute(tankNum) {
  const tankKey = `Tank ${tankNum}`;
  const image = tankRoutes[tankKey];

  if (image) {
    setRouteImage(image);
    setShowRoute(true);
  } else {
    alert(`Route not available for ${tankKey}`);
  }
}


  useEffect(() => {
    // Fetch weather on mount
    const lat = 60.6834
    const lon = -151.3714

    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial`)
      .then((res) => res.json())
      .then((data) => {
        const windDeg = data.wind.deg
        const windSpeed = data.wind.speed.toFixed(1)
        const temp = data.main.temp.toFixed(0)
        const windDirection = getWindDirection(windDeg)

        setWeather({
          temp,
          windDirection,
          windSpeed,
        })
      })
      .catch((error) => console.error('Weather error:', error))
  }, [])

  function getWindDirection(deg) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    const index = Math.round(deg / 45) % 8
    return directions[index]
  }

  function calculateFoam(tankNum) {
    const tank = tankData[tankNum]
    if (!tank) return

    const PI = Math.PI
    const radius = tank.diameter / 2
    const baseArea = PI * radius * radius

    const volumePerInch = baseArea * (1 / 12) * 7.48052
    const volumePerFoot = baseArea * 7.48052

    const getFoamRate = (diameter) => {
      if (diameter < 150) return 0.2
      if (diameter <= 200) return 0.23
      if (diameter <= 250) return 0.25
      if (diameter <= 300) return 0.28
      return 0.31
    }

    const diameterSq = Math.round(tank.diameter * tank.diameter)
    const sqFoot = Math.round(diameterSq * 0.8)
    const foamRate = getFoamRate(tank.diameter)
    const criticalRate = Math.round(sqFoot * foamRate)
    const foam1GPM = Math.round(criticalRate * 0.01)
    const foam3GPM = Math.round(criticalRate * 0.03)
    const totalFoam1 = Math.round(foam1GPM * 65)
    const totalFoam3 = Math.round(foam3GPM * 65)

    setFoamResults({
      tank,
      sqFoot,
      criticalRate,
      foam1GPM,
      foam3GPM,
      totalFoam1,
      totalFoam3,
      volumePerInch: Math.round(volumePerInch),
      volumePerFoot: Math.round(volumePerFoot),
    })
  }

  useEffect(() => {
    if (tankNumber) {
      calculateFoam(tankNumber)
    }
  }, [tankNumber])

  return (
    <>
      <Navbar />
      <Menu onAboutClick={() => setShowAbout(true)} />
      {showAbout && <AboutPopup onClose={() => setShowAbout(false)} />}

      <main>
        <h1>Foam Calculation</h1>

        {/* TANK DROPDOWN */}
        <select onChange={(e) => setTankNumber(e.target.value)} value={tankNumber}>
          <option value="">Select a Tank</option>
          {Object.keys(tankData).map((key) => (
            <option key={key} value={key}>
              Tank {key}: {tankData[key].material}
            </option>
          ))}
        </select>

        {/* WEATHER */}
        {weather && (
          <div>
            <p>🌡 Temp: {weather.temp}°F</p>
            <p>💨 Wind: {weather.windDirection} at {weather.windSpeed} mph</p>
          </div>
        )}

        {/* RESULTS */}
        {foamResults && (
          <div>
            <h2>Results for Tank {tankNumber}</h2>
            <p><strong>Location:</strong> {foamResults.tank.location}</p>
            <p><strong>Hydrant:</strong> #{foamResults.tank.hydrant}</p>
            <p><strong>Material:</strong> {foamResults.tank.material}</p>
            <p><strong>Critical Rate:</strong> {foamResults.criticalRate} GPM</p>
            {/* Only show if this tank has foamSystem */}
            {foamResults.tank.foamSystem && (
              <p><strong>Foam System:</strong> {foamResults.tank.foamSystem}</p>
            )}
            <p><strong>Foam (1%):</strong> {foamResults.totalFoam1} gal</p>
            <p><strong>Foam (3%):</strong> {foamResults.totalFoam3} gal</p>
            <p><strong>Vol/ft:</strong> {foamResults.volumePerFoot} gal</p>
            <p><strong>Vol/in:</strong> {foamResults.volumePerInch} gal</p>
          </div>
        )}
      </main>
    </>
  )
}




