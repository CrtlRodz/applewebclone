import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/mac">Mac</Link>
        </li>
        <li>
          <Link to="/ipad">iPad</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Header
