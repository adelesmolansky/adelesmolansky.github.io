import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const PAGES = [
  { title: 'About', path: '/about' },
  { title: 'AI-Learners', path: '/ai-learners' },
  { title: 'Research', path: '/research' },
  { title: 'News', path: '/news' },
];

const Navbar = () => {
  const location = useLocation();

  // This width needs to match what is in the css file
  const isMobile = useMediaQuery({ query: '(max-width: 60rem)' });

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      {/* Always write my name in the left corner */}
      {!isMobile && (
        <Link
          className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
          to="/about"
        >
          Adele Smolansky
        </Link>
      )}

      <div className="flex space-x-8">
        {PAGES.map((item, idx) => (
          <Link
            key={item.path}
            className={`transition-all duration-200 hover:text-gray-600 ${
              location.pathname === item.path
                ? 'font-black text-xl mt-1'
                : 'font-normal text-lg mt-2'
            }`}
            to={PAGES[idx].path}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
