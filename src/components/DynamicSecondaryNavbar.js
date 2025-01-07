import React from "react";

const DynamicSecondaryNavbar = ({ activeSection, setActiveSection, activeSubsection, setActiveSubsection }) => {
  const handleSubNavClick = (subsection) => {
    setActiveSubsection(subsection); // Update the active subsection
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
            <img src="/logo.png" alt="Logo" className="h-8" />
          </div>
          <nav className="ml-10">
            <ul className="flex space-x-6">
              <li
                className={`cursor-pointer ${activeSection === "mySpace" ? "font-bold" : ""}`}
                onClick={() => {
                  setActiveSection("mySpace");
                  setActiveSubsection(null); // Reset subsection
                }}
              >
                My Space
              </li>
              <li
                className={`cursor-pointer ${activeSection === "team" ? "font-bold" : ""}`}
                onClick={() => {
                  setActiveSection("team");
                  setActiveSubsection(null); // Reset subsection
                }}
              >
                Team
              </li>
              <li
                className={`cursor-pointer ${activeSection === "organization" ? "font-bold" : ""}`}
                onClick={() => {
                  setActiveSection("organization");
                  setActiveSubsection(null); // Reset subsection
                }}
              >
                Organization
              </li>
            </ul>
          </nav>
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
