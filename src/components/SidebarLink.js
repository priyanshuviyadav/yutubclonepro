import React from "react";
import { Link } from "react-router-dom";
function SidebarLink({ data }) {
  const { label, path, logo } = data;
  return (
    <>
      <Link to={path}>
        <div className='text-xl flex px-5 py-3 justify-between '>
          {label} {logo}
        </div>
      </Link>
    </>
  );
}

export default SidebarLink;
