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
      background: 'rgba(255, 255, 255, 0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid #D6EDF7',
      boxShadow: '0 2px 14px rgba(79, 168, 209, 0.06)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
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
          <Sparkles size={20} color="#78C5E8" />
          <span className="font-serif" style={{ fontSize: '1.35rem', color: '#263B46', fontWeight: 600 }}>
            {birthdayConfig.name || 'Kashish'} 🩵
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
                color: '#607782',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s',
                letterSpacing: '0.01em'
              }}
              onMouseEnter={(e) => e.target.style.color = '#397D9F'}
              onMouseLeave={(e) => e.target.style.color = '#607782'}
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
            color: '#263B46',
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
          background: 'rgba(255, 255, 255, 0.98)',
          borderBottom: '1px solid #D6EDF7',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 8px 20px rgba(79, 168, 209, 0.08)'
        }}>
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                textDecoration: 'none',
                color: '#263B46',
                fontSize: '1rem',
                fontWeight: 500,
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
