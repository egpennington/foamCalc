import React, { useState, useEffect } from 'react';
import tankData from '../data/tankData';
import tankRoutes from '../data/tankRoutes';
import { calculateFoam } from '../utilities/foamUtilities'

export default function TankSelect({ onRouteOpen }) {
  const [selectedTank, setSelectedTank] = useState('');
  const [tankInfo, setTankInfo] = useState(null);
  const [foamResults, setFoamResults] = useState(null);

 useEffect(() => {
    if (selectedTank && tankData[selectedTank]) {
        const tank = tankData[selectedTank];
        setTankInfo(tank);

        const foam = calculateFoam(tank);
        setFoamResults(foam);
    } else {
        setTankInfo(null);
        setFoamResults(null);
    }
    }, [selectedTank]);

  const handleRouteClick = () => {
    const routeKey = `Tank ${selectedTank}`;
    const image = tankRoutes[routeKey];
    if (image) {
      onRouteOpen(image);
    } else {
      alert(`Route not available for ${routeKey}`);
    }
  };

  return (
    <div className="tank-select">
      <label htmlFor="tank-dropdown">Select a Tank:</label>
        <select
            id="tank-dropdown"
            value={selectedTank}
            onChange={(e) => setSelectedTank(e.target.value)}
            aria-label="Tank selection dropdown"
        >

        <option value="" disabled>Select a tank</option>
        {Object.keys(tankData).map((key) => (
          <option key={key} value={key}>
            Tank {key}: {tankData[key].material}
          </option>
        ))}
      </select>

      {tankInfo && (
        <div className="tank-info">
          <p><strong>Location:</strong> {tankInfo.location}</p>
          <p><strong>Material:</strong> {tankInfo.material}</p>
          <p><strong>Capacity:</strong> {tankInfo.capacity.toLocaleString()} gal</p>
          <button onClick={handleRouteClick}>View Route</button>
        </div>
      )}

      {foamResults && (
        <div className="foam-results">
            <h4>Foam Requirements</h4>
            <p><strong>Surface Area (80%):</strong> {foamResults.sqFoot.toLocaleString()} ft²</p>
            <p><strong>Critical Rate:</strong> {foamResults.criticalRate.toLocaleString()} GPM</p>
            <p><strong>Foam Needed (1%):</strong> {foamResults.totalFoam1.toLocaleString()} gal</p>
            <p><strong>Foam Needed (3%):</strong> {foamResults.totalFoam3.toLocaleString()} gal</p>
            <p><strong>Vol per Inch:</strong> {foamResults.volumePerInch.toLocaleString()} gal</p>
            <p><strong>Vol per Foot:</strong> {foamResults.volumePerFoot.toLocaleString()} gal</p>
        </div>
        )}
    </div>
  );
}
