import React from "react";
import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../components/redux/slice/categorySlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories.categoriesArr);

  useEffect(() => {
    dispatch(getCategories());
  });
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=' h-[1440px] w-full  '>
        <div className='md:max-w-[90rem] text-center  flex justify-center items-center mx-auto '>
          <img
            className='h-[400px] w-[90rem] '
            src='./main.jpg'
            alt='main img'
          />
          <div className='  absolute flex flex-col  text-white text-xl font-extrabold  items-center'>
            <h1 className='text-5xl text-left  mr-20'>
              Stream and Jam To your Favorite Tunes
            </h1>
            <a
              className='border-2 bg-red-600 px-1 text-2xl border-red-600 rounded   mr-auto my-3 flex justify-left items-center py-1'
              href='/explore'
            >
              Watch Now
            </a>
          </div>
        </div>

        <div className=' text-center '>
          <h1 className='text-5xl font-serif mt-10'>Categories</h1>
          <div className='flex flex-wrap justify-between  items-center  '>
            {categories.map((item, index) => (
              <CategoryItem key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
      <div className='border-2 border-black bg-slate-700 flex justify-center items-center gap-5'>
        <Footer />
      </div>
    </>
  );
};

export default Main;
