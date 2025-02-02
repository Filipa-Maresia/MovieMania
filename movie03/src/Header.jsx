

import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header>
    <Link to="/">
        <h1>MovieMania</h1>
    </Link>
    
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

