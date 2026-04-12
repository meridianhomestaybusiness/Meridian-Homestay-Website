import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Pricing', path: '/rooms' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-[100] transition-all duration-300 w-full',
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
            : 'bg-white py-4 border-b border-gray-100'
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo Section */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 w-full h-full -translate-x-full group-hover:animate-shine"></div>
                <span className="text-white font-heading font-extrabold text-xl relative z-10">M</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-xl text-gray-900 tracking-tight">Meridian</span>
                <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mt-0.5">Homestay</span>
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={clsx(
                      'relative px-4 py-2 text-sm font-semibold transition-colors',
                      isActive ? 'text-blue-700' : 'text-gray-600 hover:text-gray-900'
                    )}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-blue-50 rounded-full -z-0"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Action Button & Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/916290381799"
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-600/30 transition-all items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Book Now
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-900"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={clsx(
          'lg:hidden fixed inset-x-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out z-[90]',
          isOpen ? 'top-[73px] opacity-100 visible' : '-top-[400px] opacity-0 invisible'
        )}
      >
        <div className="flex flex-col px-4 py-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={clsx(
                  'px-4 py-3 rounded-xl text-base font-semibold transition-all',
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                {link.name}
              </NavLink>
            );
          })}
          <div className="pt-4 mt-2 border-t border-gray-100">
             <a
               href="https://wa.me/916290381799"
               target="_blank"
               rel="noreferrer"
               className="flex items-center justify-center gap-2 px-4 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold w-full shadow-lg shadow-blue-600/30 transition-colors"
             >
               <Phone className="w-5 h-5" />
               Book Now
             </a>
          </div>
        </div>
      </div>
    </>
  );
}
