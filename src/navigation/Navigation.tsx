import React from 'react';
import { Link } from 'react-router-dom';
import { AppleIconBlack } from '../assets/Icons';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><AppleIconBlack/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to="/store">Store</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/mac">Mac</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/ipad">iPad</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navigation;
