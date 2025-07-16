import React from 'react';

export default function AboutPopup({ onClose }) {
  return (
    <article className="about-popup">
      <button onClick={onClose} className="close-about">&times;</button>
      <h2>About</h2>
      <p>This app calculates fire foam requirements based on tank diameter, material, and capacity...</p>
      {/* Use your full content here — shortened for space */}
    </article>
  );
}
