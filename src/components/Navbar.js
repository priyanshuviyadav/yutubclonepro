import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { AiFillHome, AiOutlineLogin } from "react-icons/ai";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='border-2 font-bold bg-slate-700 py-1 px-8 mx-auto md:flex md:justify-around md:items-baseline'>
        <img
          className=' text-center mx-2 '
          src='./logo.png'
          height={50}
          width={30}
          alt='logo'
        />
        <h1 className='font-serif font-bold text-black flex justify-center items-center gap-5 text-4xl '>
          Stream <span className='text-red-500'> tube</span>
        </h1>
        <div className='flex w-[200] m-0 mx-auto   '>
          <input
            className=' p-1 border-2 border-white bg-white  mx-auto'
            type='text'
            placeholder='Search  '
          />

          <label className=' border-2 w-11  bg-slate-400 text-white border-white text-center mx-auto flex justify-center items-center text-lg'>
            <BiSearch />
          </label>
          <label className='    rounded-full h-10 w-10 flex  justify-center items-center  mx-auto  text-4xl  text-white  '>
            <MdOutlineKeyboardVoice />
          </label>
        </div>
        <div className='flex gap-5  justify-between items-center text-white text-xl '>
          <p className=' flex justify-center items-center text-white '>
            <Link to={"/"}>Home</Link>
            <AiFillHome />
          </p>

          <Link to={"explore"}>Explore</Link>
          <p className='flex justify-center items-center text-white '>
            <Link to={"mockapi"}>Login</Link>
            <AiOutlineLogin />
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
