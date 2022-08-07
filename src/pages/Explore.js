import React, { useEffect } from "react";
import Videoltem from "../components/Videoltem";
import { useSelector, useDispatch } from "react-redux";
import { getVideos } from "../components/redux/slice/videoSlice";

const Explore = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videos.videosArr);

  useEffect(() => {
    dispatch(getVideos());
  });

  return (
    <>
      <div className='my-5 mx-5'>
        <button className='border-2 rounded-3xl bg-white  hover:bg-red-500 px-5 font-bold text-lg  mx-2 my-2 border-slate-500 '>
          All
        </button>
        <button className='border-2 rounded-3xl  bg-white px-5 font-bold text-lg hover:bg-red-500 mx-2 my-2 border-slate-500'>
          Indian Classical
        </button>
        <button className=' border-2 rounded-3xl bg-white hover:bg-red-500 px-5 font-bold text-lg my-2 mx-2 border-slate-500'>
          Indie India
        </button>
        <button className='border-2 rounded-3xl bg-white hover:bg-red-500 px-5 font-bold text-lg  mx-2 my-2 border-slate-500'>
          Bollywood
        </button>
        <button className='border-2 rounded-3xl bg-white px-5 font-bold text-lg hover:bg-red-500  mx-2 my-2 border-slate-500'>
          English Pop
        </button>
      </div>

      <div className='md:w-full md:h-full rounded-sm border-2   flex flex-wrap  my-10 '>
        {videos.map((item, index) => (
          <Videoltem key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Explore;
