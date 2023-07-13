import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p className="text-center text-white">© {new Date().getFullYear()} Joshua Andrew Santillan </p>
    </footer>
  );
}

const footerStyle = {
  color: '#fff',
  textAlign: 'center',
  position: 'fixed',
  top: '0',
  right: '0',
  zIndex: '2000',
}

export default Footer;