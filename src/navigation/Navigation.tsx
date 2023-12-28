import React from 'react';
import { Link } from 'react-router-dom';
import { AppleIconBlack } from '../assets/Icons';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg">
   <div className="container-fluid ">
        <Link className="navbar-brand d-lg-none" to="/">
          <AppleIconBlack />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="navbar-brand" to="/">
          <AppleIconBlack />
        </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-spacing " to="/store">
                Store
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-spacing" to="/mac">
                Mac
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-spacing" to="/ipad">
                iPad
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-spacing" to="/iphone">
                iPhone
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-spacing" to="/watch">
                Watch
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-spacing" to="/vision">
                Vision
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-spacing" to="/airpods">
                AirPods
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-spacing" to="/tv-home">
                TV & Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-spacing" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-spacing" to="/accessories">
                Accessories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-spacing" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-spacing" to="/search">
                <SearchIcon />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop/bag">
                <LocalMallOutlinedIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
