import React from 'react';
import { FaBook, FaMagnifyingGlass, FaCircleQuestion } from 'react-icons/fa6';

export default function Menu({ onAboutClick }) {
  return (
    <div className="menu">
      <ul className="menu-list">
        <li onClick={onAboutClick}>
          <FaCircleQuestion aria-label="About" /> ABOUT
        </li>
        <li>
          <a href="https://www.google.com/" target="_blank">
            <FaMagnifyingGlass /> GOOGLE
          </a>
        </li>
        <li>
          <a href="https://www.phmsa.dot.gov/sites/phmsa.dot.gov/files/2024-04/ERG2024-Eng-Web-a.pdf" target="_blank">
            <FaBook /> ERG Guide
          </a>
        </li>
      </ul>
    </div>
  );
}
