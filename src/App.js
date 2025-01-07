import React from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import DynamicSecondaryNavbar from "./components/DynamicSecondaryNavbar"; 
import Dashboard from "./pages/Dashboard"; 
import TeamSpaceDashboard from "./pages/TeamSpaceDashboard"; 
import DepartmentDashboard from "./pages/DepartmentDashboard";
import PeersDashboard from "./pages/PeersDashboard";
import EmployeeTree from "./pages/EmployeeTree";
import EmployeeList from "./pages/EmployeeList";
import ClickOrganization from "./pages/ClickOrganization";



const App = () => {
  const [activeSection, setActiveSection] = React.useState("mySpace");
  const [activeSubsection, setActiveSubsection] = React.useState(null);

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header with Dynamic Secondary Navbar */}
      <DynamicSecondaryNavbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        activeSubsection={activeSubsection}
        setActiveSubsection={setActiveSubsection}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
          {/* Conditional rendering based on active section and subsection */}
          {activeSection === "mySpace" && <Dashboard />}
          {activeSection === "team" && activeSubsection === "Team Space" && <TeamSpaceDashboard />}
          {activeSection === "team" && activeSubsection === "Department" && <DepartmentDashboard />}
          {activeSection === "team"  && activeSubsection === "Peers" && <PeersDashboard />}
          {activeSection === "organization" &&  activeSubsection === "Employee Tree" && <EmployeeTree />}
          {activeSection === "organization" &&  activeSubsection === "Employee List" && <EmployeeList />}
          {activeSection === "organization" &&  activeSubsection === "Overview" && <ClickOrganization/>}
        </div>
      </div>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
};

export default App;
