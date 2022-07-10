import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer p-2 bg-gray-600 text-primary-content footer-center">
      <div>
        <p>Copyright &copy; {currentYear} All rights reserved</p>
      </div>
    </footer>
  );
}
