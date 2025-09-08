import React from 'react';
import useUser from '../hooks/useUser';

const NavUserMenu = () => {
  const { user } = useUser();
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>Home</li>
        {user && <li>{user.name}</li>}
      </ul>
    </nav>
  );
};

export default NavUserMenu;
