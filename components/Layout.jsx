import React from 'react';
import NavUserMenu from './NavUserMenu';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <NavUserMenu />
      </header>
      <main className="container mx-auto p-4">{children}</main>
      <footer className="bg-blue-600 text-white p-4 text-center">© 2025 Suriyawan Saffari</footer>
    </div>
  );
};

export default Layout;
