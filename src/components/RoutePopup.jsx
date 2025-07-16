import React from 'react';

export default function RoutePopup({ routeImage, onClose }) {
  return (
    <div className="route-popup">
      <button className="close-route" onClick={onClose}>
        <i className="fa-regular fa-circle-xmark fa-xl"></i>
      </button>
      <img src={routeImage} alt="Tank Route Image" />
    </div>
  );
}
