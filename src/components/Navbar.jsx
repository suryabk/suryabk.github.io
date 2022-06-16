import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { HiSun } from "react-icons/hi";

function Navbar() {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  const navigation = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <nav className="bg-color-bg-variant">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              {menu ? (
                <HiX className="text-2xl" onClick={() => setMenu(false)} />
              ) : (
                <HiMenu className="text-2xl" onClick={() => setMenu(true)} />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center  sm:items-stretch">
            <div className="flex-shrink-0 flex items-center">
              <a href="#">
                <HiSun className="text-4xl text-color-white z-20" />
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((nav, idx) => (
                  <a
                    href={nav.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    {nav.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {menu && (
        <div className="sm:hidden inset-0 w-full">
          <div className="px-2 pt-2 pb-3 bg-color-bg-variant">
            {navigation.map((nav, idx) => (
              <a
                key={idx}
                href={nav.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={(event) => event.preventDefault && setMenu(false)}>
                {nav.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
