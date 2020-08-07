import React from 'react';
import '../css/nav.css';




const NavBar = (props) => {
  return (
    <div class="container">
        <ul>
            <li><a href="http://localhost:3001/explore">Explore</a></li>
            <li><a href="#">Boards</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>
  );
}
export default NavBar;