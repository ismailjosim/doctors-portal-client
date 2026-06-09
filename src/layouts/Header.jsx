import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaSignOutAlt, FaTachometerAlt, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Contexts/AuthProvider';
import logo from '../assets/images/logo.png';
import ThemeToggle from '../components/Theme/ThemeToggle';

const Header = () => {
  const { user, userLogout } = useContext(AuthContext);

  const handleUserLogout = () => {
    userLogout()
      .then(() => {
        localStorage.removeItem('userAccessToken');
      })
      .catch((error) => console.log(error.message));
  };

  const userInitial = user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U';

  const userDropdown = user?.uid ? (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="avatar btn btn-circle btn-ghost h-11 w-11 overflow-hidden border border-primary/15 bg-[#eef5f4]"
      >
        {user?.photoURL ? (
          <img src={user.photoURL} alt={user.displayName || 'User profile'} />
        ) : (
          <span className="text-base font-bold uppercase text-primary">{userInitial}</span>
        )}
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content mt-3 w-64 rounded-lg border border-primary/10 bg-base-100 p-2 shadow-xl"
      >
        <li className="pointer-events-none border-b border-primary/10 px-3 py-2">
          <div className="flex items-center gap-3 p-0">
            <FaUserCircle className="text-2xl text-primary" />
            <div className="min-w-0">
              <p className="truncate font-semibold text-secondary">
                {user.displayName || 'Doctors Portal User'}
              </p>
              <p className="truncate text-xs font-normal text-secondary/60">{user.email}</p>
            </div>
          </div>
        </li>
        <li>
          <Link to="/dashboard/profile">
            <FaRegUser />
            User Profile
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FaTachometerAlt />
            Dashboard
          </Link>
        </li>
        <li>
          <button onClick={handleUserLogout}>
            <FaSignOutAlt />
            Logout
          </button>
        </li>
      </ul>
    </div>
  ) : (
    <Link to="/login" className="btn btn-ghost">
      Login
    </Link>
  );

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
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1 p-0 text-sm">{menuItems}</ul>
          </div>
          <Link to="/appointment" className="btn btn-primary ml-4 hidden text-white lg:inline-flex">
            Schedule Now
          </Link>
          <div className="ml-2">
            <ThemeToggle />
          </div>
          <div className="ml-2 hidden lg:block">{userDropdown}</div>
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
              {!user?.uid && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="ml-1 lg:hidden">{user?.uid && userDropdown}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
