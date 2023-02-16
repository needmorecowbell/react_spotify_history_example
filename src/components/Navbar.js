import React from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom'
export function  Navbar(){
  return (
    <div className='top-navbar'>
      <Link className='navbar-logo' to="/">
        <img src={logo} width="40px" ></img>
      </Link>
      <Link to="/listenHistory">Listen History</Link>
      <Link to="#">Playlists</Link>
      <Link to="#">Goats</Link>
    </div>
  );}

