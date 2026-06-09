import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import logo from '../assets/images/logo.png';

const Header = () => {
  const { user, userLogout } = useContext(AuthContext);

  const handleUserLogout = () => {
    userLogout()
      .then((result) => {})
      .catch((error) => console.log(error.message));
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Book Visit</Link>
      </li>
      <li>
        <Link to="/team">Team</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <p className="text-secondary/70">{user.displayName}</p>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleUserLogout} className="btn btn-sm btn-primary text-white">
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-base-100/90 backdrop-blur-xl">
      <div className="navbar page-shell min-h-[76px] px-0 font-semibold">
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
        <div className="navbar-start min-w-fit">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Doctors Portal" className="h-11 w-auto" />
            <span className="hidden text-lg font-bold text-secondary sm:block">Doctors Portal</span>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1 p-0 text-sm">{menuItems}</ul>
          </div>
          <Link to="/appointment" className="btn btn-primary ml-4 hidden text-white lg:inline-flex">
            Schedule Now
          </Link>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 w-56 rounded-lg border border-primary/10 bg-base-100 p-2 shadow-xl">
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
