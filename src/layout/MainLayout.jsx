import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f1f1] via-[#dfadc0] to-[#ebd391] dark:from-[#05011f] dark:via-[#3b383d] dark:to-[#1f1f1f] text-white transition-colors duration-500">

      <NavBar />
      <main className="pt-[80px] max-w-7xl mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

/*#e3ecb0*/