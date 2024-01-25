import React from 'react';
import StyledNavbar from './StyledNavbar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div className="layout">
      <StyledNavbar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
