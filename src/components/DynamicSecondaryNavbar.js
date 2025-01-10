import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

const DynamicSecondaryNavbar = ({ activeSection, setActiveSection, activeSubsection, setActiveSubsection }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  // Toggle profile dropdown visibility when profile image is clicked
  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };


  // Handle sign-out logic (clear session, redirect, etc.)
  const handleSignOut = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      console.log('User signed out');
      // Implement your sign-out logic here
    }
  };


  // Close the profile dropdown when the close icon is clicked
  const handleCloseProfile = () => {
    setIsProfileOpen(false);
  };


  // Close profile dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleSubNavClick = (subsection) => {
    setActiveSubsection(subsection);
  };


  
 

  const secondaryNavItems = {
    team: ["Team Space", "Department", "Peers"],
    mySpace: ["Overview", "Projects", "Tasks"],
    organization: ["Overview", "Employee Tree", "Employee List",],
    
  };

  return (
    <>
      {/* Primary Header Navbar */}
      <div className="bg-blue-900 text-white flex justify-between items-center p-2">
        <div className="flex items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <img src="T-Machine.Ai_logo.png" alt="Logo" className="h-8" />
          </div>
          <nav className="ml-10">
            <ul className="flex space-x-6">
              <li
                className={`cursor-pointer ${activeSection === "mySpace" ? "font-bold" : ""}`}
                onClick={() => {
                  setActiveSection("mySpace");
                  setActiveSubsection("Overview"); // Reset subsection
                }}
              >
                My Space
              </li>
              <li
                className={`cursor-pointer ${activeSection === "team" ? "font-bold" : ""}`}
                onClick={() => {
                  setActiveSection("team");
                  setActiveSubsection("Team Space"); // Reset subsection
                }}
              >
                Team
              </li>
              <li
                className={`cursor-pointer ${activeSection === "organization" ? "font-bold" : ""}`}
                onClick={() => {
                  setActiveSection("organization");
                  setActiveSubsection("Overview"); // Reset subsection
                }}
              >
                Organization
              </li>
            </ul>
          </nav>
        </div>
        {/* Profile Picture and Dropdown */}
      <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src="/profile-picture.jpg"
              alt="Profile"
              className="h-8 w-8 rounded-full cursor-pointer"
              onClick={handleProfileClick}  
            />
            {isProfileOpen && (
              <div
                ref={profileDropdownRef}
                className="absolute right-0 bg-white text-black shadow-lg rounded-lg mt-2 w-[500px] p-6 z-50 transition-transform duration-300 ease-in-out"
              >
                {/* Close Icon */}
                <button
                  onClick={handleCloseProfile}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={20} />
                </button>


                <div className="flex items-center space-x-6">
                  <img
                    src="/profile-picture.jpg"
                    alt="Profile"
                    className="h-24 w-24 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-2xl">John Doe</p>
                    <p className="text-sm text-gray-600">User ID: 12345</p>
                    <p className="text-sm text-gray-600">Email: johndoe@example.com</p>
                  </div>
                </div>
                <button
                  className="mt-6 bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
                  onClick={handleSignOut}  
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      

      {/* Dynamic Secondary Navbar */}
      {activeSection && secondaryNavItems[activeSection] && (
        <div className="bg-gray-800 text-white flex justify-start items-center p-2">
          <nav className="flex space-x-6 ml-10">
            {secondaryNavItems[activeSection].map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer hover:text-gray-300 ${activeSubsection === item ? "font-bold" : ""}`}
                onClick={() => handleSubNavClick(item)}
              >
                {item}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default DynamicSecondaryNavbar;
