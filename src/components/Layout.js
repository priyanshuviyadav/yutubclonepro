import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className='grid grid-cols-12   gap-5 md:max-w-[1440px] md:mx-auto'>
        <div className='col-start-1 col-end-13'>
          <Navbar />
        </div>
        <div className=' col-start-1 col-end-3 border-2 border-slate-700 rounded bg-slate-700 '>
          <Sidebar />
        </div>
        <div className=' col-start-3 col-end-13 border-2 border-slate-400 rounded bg-slate-200 overflow-y-scroll  h-[2000px] w-[70rem]'>
          <Outlet />
        </div>
      </div>
      <div className='border-2 border-slate-700 rounded bg-slate-700 flex justify-center items-center gap-5'>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
