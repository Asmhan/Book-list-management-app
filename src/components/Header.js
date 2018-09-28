import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <div style={{display: 'flex', width: "100%", background: 'red', padding: 10}}>
    <NavLink to="/" activeClassName="is-active" exact={true} style={{background: 'orange', padding: 10, flex: 1}}>Home</NavLink>
  </div>
)

export default Header;
