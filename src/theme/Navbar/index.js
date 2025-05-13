import React from 'react';
import DefaultNavbar from '@theme-original/Navbar';

export default function Navbar(props) {
  return (
    <DefaultNavbar {...props}>
      <span className="gradient-text" style={{ fontWeight: 900, fontSize: '1.7rem', letterSpacing: '-1px', marginRight: '2rem', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
        Tusk
      </span>
    </DefaultNavbar>
  );
} 