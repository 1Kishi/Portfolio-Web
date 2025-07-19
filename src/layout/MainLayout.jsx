import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main className="pt-[80px] max-w-7xl mx-auto px-4">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
