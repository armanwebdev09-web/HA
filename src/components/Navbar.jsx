import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Beginning', href: '#beginning' },
    { label: 'Little Things', href: '#little-things' },
    { label: 'Our Story', href: '#relationship' },
    { label: 'Future ❄️', href: '#future' },
    { label: 'Photos', href: '#photos' },
    { label: 'Songs', href: '#songs' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(10, 7, 18, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        paddingTop: '0.85rem',
        paddingBottom: '0.85rem'
      }}>
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
        >
          <Sparkles size={20} color="#d42b58" />
          <span className="font-serif" style={{ fontSize: '1.3rem', color: '#fcf9f2', fontWeight: 600 }}>
            {birthdayConfig.name || 'Kashish'} ❤️
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                textDecoration: 'none',
                color: '#e4dec3',
                fontSize: '0.88rem',
                fontWeight: 400,
                transition: 'color 0.2s',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fcf9f2'}
              onMouseLeave={(e) => e.target.style.color = '#e4dec3'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fcf9f2',
            cursor: 'pointer',
            padding: '0.4rem'
          }}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(10, 7, 18, 0.95)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                textDecoration: 'none',
                color: '#fcf9f2',
                fontSize: '1rem',
                padding: '0.4rem 0'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
