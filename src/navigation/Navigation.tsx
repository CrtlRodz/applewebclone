import React from 'react';
import { Link } from 'react-router-dom';
import { AppleIconBlack } from '../assets/Icons';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';



const Navigation = () => {
  return (
<nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <a className="navbar-brand" href="#"><AppleIconBlack /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
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
        <li className="nav-item">
        <Link  className="nav-link" to="/ipad">iPhone</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/ipad">Watch</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/ipad">Vision</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/ipad">AirPods</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/ipad">TV & Home</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/ipad">Entertainment</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/ipad">Accessories</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/ipad">Support</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/ipad"><SearchIcon/></Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/shop/bag"><LocalMallOutlinedIcon/></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navigation;
