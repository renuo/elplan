import React from 'react';
import { Link } from 'react-router-dom';
import { AuthWidget } from './auth';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav role="navigation" className="navbar navbar-light navbar-toggleable-md bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button"
          data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          El Plan
        </Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        </ul>
        <AuthWidget/>
        </div>
      </nav>
    );
  }
}
