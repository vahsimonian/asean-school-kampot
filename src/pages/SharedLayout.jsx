import React from 'react';
import StyledNavbar from './StyledNavbar';
import { Outlet, useLocation } from 'react-router-dom';
import '../App.css';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const SharedLayout = () => {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames={'fade'} timeout={300}>
        <div className="layout">
          <div className="styled-navbar">
            <StyledNavbar />
          </div>
          <main className="content">
            <Outlet />
          </main>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default SharedLayout;
