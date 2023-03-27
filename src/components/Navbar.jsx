import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navegacion() {
  const setActiveClass = ({ isActive }) => {
    return isActive ? "active" : undefined;
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="container">
          <a className="navbar-brand" href="/pokeapi/">
            <img src="https://i.pinimg.com/originals/66/89/dc/6689dc331be27e66349ce9a4d15ddff3.gif" alt="logo" width="45" height="36"></img>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={`nav-link ${setActiveClass}`} exact to='/pokeapi/'>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${setActiveClass}`} to='/pokeapi/pokemones'>
                Pokemons
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
