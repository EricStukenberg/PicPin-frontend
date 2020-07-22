import React from 'react';
import '../css/nav.css';




const NavBar = (props) => {
  return (
    <div class="container">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
  );
}
export default NavBar;