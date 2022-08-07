import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

function Videoltem({ data }) {
  const { title, creator, views, dateAdded } = data;

  const crete = creator
    .split(" ")
    .map((creator) => creator[0])
    .join("")
    .toUpperCase();

  return (
    <>
      <div className='flex  justify-around '>
        <div className='border-2 border-slate-200 bg-slate-400 rounded-lg w-[330px] h-[350px]   ml-7 p-2  my-3   '>
          <div className='   '>
            <img
              className='object-cover rounded-lg    w-[34rem] h-[200px]'
              src=' https://source.unsplash.com/random'
              alt='random img'
            />
            <h1 className=' font-bold text-2xl shadow-lg	mb-2  rounded-lg '>
              {title}
            </h1>
          </div>
          <div className='  truncate flex justify-left gap-2 items-center  px-2 mx-2'>
            <p className='border-2 bg-slate-700 border-slate-400 object-cover text-white overflow-hidden rounded-full h-[50px] w-[50px] flex items-center justify-center '>
              {crete}
            </p>
            {creator}
          </div>
          <div className='flex justify-around truncate items-center   '>
            <p className='flex '>
              <AiOutlineUsergroupAdd />
              {views}
            </p>
            <p>{dateAdded}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videoltem;
