import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-slate-100 flex justify-center items-center shadow-md px-7">
      <div className="flex justify-center items-center shadow-none">
        <Link
          to="/"
          className="text-lg mx-4 my-2 py-2 hover:text-blue-500"
        >
          Home
        </Link>

        <Link
          to="/list"
          className="text-lg mx-4 my-2 py-2 hover:text-blue-500"
        >
          List
        </Link>

        <Link
          to="/edit"
          className="text-lg mx-4 my-2 py-2 hover:text-blue-500"
        >
          Edit
        </Link>

      </div>

    </div>
  );
}

export default Navbar;
