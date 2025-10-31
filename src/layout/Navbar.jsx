import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineMenu, AiOutlineClose, AiOutlineTeam, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { IoMdContacts } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa";
import stem from '../assets/Stem.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMembersOpen, setIsMembersOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMembers = () => {
    setIsMembersOpen(!isMembersOpen);
  };

  return (
    <nav className="bg-[#FFF] text-blue-500 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex gap-2.5 flex-shrink-0">
            <img src={stem} alt='stem' width={30}/>
            <h1 className="text-xl font-bold">STEM</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-blue-500 hover:bg-blue-100 hover:text-blue-500'
                  }`
                }
              >
                <AiOutlineHome className="mr-2" />
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-blue-500 hover:bg-blue-100 hover:text-blue-500'
                  }`
                }
              >
                <AiOutlineInfoCircle className="mr-2" />
                About
              </NavLink>
              {/* Members Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleMembers}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-blue-500 hover:bg-blue-100 hover:text-blue-500 focus:outline-none"
                >
                  <AiOutlineTeam className="mr-2" />
                  Members
                  {isMembersOpen ? <AiOutlineUp className="ml-1" /> : <AiOutlineDown className="ml-1" />}
                </button>
                {isMembersOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-[#FFF] rounded-md shadow-lg z-10">
                    <NavLink
                      to="/organizing-committee"
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? 'bg-blue-100 text-blue-500'
                            : 'text-blue-500 hover:bg-blue-100 hover:text-blue-500'
                        }`
                      }
                      onClick={() => setIsMembersOpen(false)}
                    >
                      Organizing Committee
                    </NavLink>
                    <NavLink
                      to="/advisory-committee"
                      className={({ isActive }) =>
                      `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'bg-blue-100 text-blue-500'
                          : 'text-blue-500 hover:bg-blue-100 hover:text-blue-500'
                      }`
                    }
                      onClick={() => setIsMembersOpen(false)}
                    >
                      Advisory Committee
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-blue-500 hover:bg-blue-100 hover:text-blue-500'
                  }`
                }
              >
                <FaRegRegistered className="mr-2" />
                Registration
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-blue-500 hover:bg-blue-100 hover:text-blue-500'
                  }`
                }
              >
                <IoMdContacts className="mr-2" />
                Contact
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#292966] border-t border-[#5C5C99]">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-blue-500 hover:bg-blue-100 hover:text-blue-500'
                  }`
                }
            >
              <AiOutlineHome className="mr-2" />
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-blue-500 hover:bg-blue-100 hover:text-blue-500'
                  }`
                }
            >
              <AiOutlineInfoCircle className="mr-2" />
              About
            </NavLink>
            {/* Mobile Members Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMembers}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-[#CCCCFF] hover:bg-[#5C5C99] hover:text-[#CCCCFF] focus:outline-none w-full text-left"
              >
                <AiOutlineTeam className="mr-2" />
                Members
                {isMembersOpen ? <AiOutlineUp className="ml-1" /> : <AiOutlineDown className="ml-1" />}
              </button>
              {isMembersOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <NavLink
                    to="/organizing-committee"
                    onClick={() => { setIsOpen(false); setIsMembersOpen(false); }}
                    className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-blue-500 hover:bg-blue-100 hover:text-blue-500'
                  }`
                }
                  >
                    Organizing Committee
                  </NavLink>
                  <NavLink
                    to="/advisory-committee"
                    onClick={() => { setIsOpen(false); setIsMembersOpen(false); }}
                    className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-blue-100 text-blue-500'
                        : 'text-blue-500 hover:bg-blue-100 hover:text-blue-500'
                    }`
                  }
                  >
                    Advisory Committee
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/registration"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-blue-500 hover:bg-blue-100 hover:text-blue-500'
                  }`
                }
            >
              <FaRegRegistered className="mr-2" />
              Registration
            </NavLink>
            <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-blue-500 hover:bg-blue-100 hover:text-blue-500'
                  }`
                }
              >
                <IoMdContacts className="mr-2" />
                Contact
              </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
