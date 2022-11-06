import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// const styles = require('./Navbar.module.css');
import './Navbar.css'

const PAGES = [
  { title: 'About', path: '/about' },
  { title: 'AI-Learners', path: '/ai-learners' },
  { title: 'Research', path: '/research' },
  // { title: 'News', path: '/news' },
  // { title: 'Personal', path: '/personal' },
];

const Navbar = () => {
  const location = useLocation();

  // This width needs to match what is in the css file
  const isMobile = useMediaQuery({ query: '(max-width: 60rem)' });

  const getLinkStyle = (isSelected: boolean) => {
    if (isSelected) 
      return {
        fontWeight: 900, 
        fontSize: '1.25rem',
        marginTop: '0.4rem'
      }
    else 
    return {
      fontWeight: 400, 
      fontSize: '1.1rem',
      marginTop: '0.55rem'
    }
  }

  return (
    <div className='navbarContainer'>

      {/* Always write my name in the left corner */}
      {!isMobile && (
        <Link
          className={"navbarAdeleName navbarItem"}
          to='/about'
        >
          Adele Smolansky
        </Link>
      )}
      
        <div className='navbarItemsContainer'>
          {PAGES.map((item, idx) => (
            <Link
              className="navbarItem"
              to={PAGES[idx].path}
              style={getLinkStyle(location.pathname === item.path)}
            >
              {item.title}
            </Link>
        
        ))}
       </div>
      </div>
  )

};

export default Navbar;
