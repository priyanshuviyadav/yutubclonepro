import React from "react";

function CategoryItem({ data }) {
  const { categoryName } = data;
  return (
    <div className='flex  justify-center items-center mx-auto text-center   h-[60%]  w-1/2 mt-5 '>
      <div className='  p-1  my-1   '>
        <div className=' flex justify-center items-center   text-center my-2 '>
          <img
            className='object-cover rounded-lg overflow-auto w-[28rem] h-[400px]'
            src=' https://source.unsplash.com/random'
            alt='random img'
          />
          <div className=' absolute flex justify-between items-center  mx-auto'>
            <p className='font-bold text-4xl  underline  text-white cursor-pointer hover:bg-red-500'>
              {categoryName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
