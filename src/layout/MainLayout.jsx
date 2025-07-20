import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayout = () => {
  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-zinc-900 text-neutral-900 dark:text-white">
      <NavBar />
      <main className="pt-[80px] max-w-7xl mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
