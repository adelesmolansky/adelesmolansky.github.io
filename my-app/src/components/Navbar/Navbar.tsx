import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'About' },
    { path: '/ai-learners', label: 'AI-Learners' },
    { path: '/research', label: 'Research' },
    { path: '/news', label: 'News' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Adele Smolansky
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-desktop">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar-link ${
                isActive(item.path) ? 'navbar-link-active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="navbar-mobile-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`navbar-hamburger ${
              isOpen ? 'navbar-hamburger-open' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="navbar-mobile">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar-mobile-link ${
                isActive(item.path) ? 'navbar-mobile-link-active' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
