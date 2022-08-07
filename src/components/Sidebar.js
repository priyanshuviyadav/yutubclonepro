import React from "react";

import { AiOutlineLike, AiFillPlaySquare } from "react-icons/ai";
import { MdOutlineWatchLater, MdHistory } from "react-icons/md";
import SidebarLink from "./SidebarLink";
const Sidebar = () => {
  const linksArr = [
    { label: "Playlist", path: "/playlist", logo: <AiFillPlaySquare /> },
    { label: "Likes", path: "/likes", logo: <AiOutlineLike /> },
    {
      label: "Watch Later",
      path: "/watchlater",
      logo: <MdOutlineWatchLater />,
    },
    { label: "History", path: "/history", logo: <MdHistory /> },
  ];
  return (
    <>
      <div
        className=' font-extrabold md:max-w-3/4 py-1 mx-auto
         md:flex md:flex-col gap-10
       md:justify-start  md:h-[1000px]'
      >
        {linksArr.map((item, index) => (
          <SidebarLink key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
