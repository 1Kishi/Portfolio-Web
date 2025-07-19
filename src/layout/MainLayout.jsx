import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: '80px' }}> {/* padding to avoid being hidden under nav */}
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
