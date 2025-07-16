import React from 'react';

export default function TankRoutePopup({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="route-popup">
      <button className="close-route" onClick={onClose}>✖</button>
      <img src={image} alt="Tank route map" className="route-image" />
    </div>
  );
}
