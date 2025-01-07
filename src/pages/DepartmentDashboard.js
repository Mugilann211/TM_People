import React, { useState } from "react";
import { consolidatedMembers } from "./data"; // Import your data file

const DepartmentDashboard = () => {
  const members = consolidatedMembers; // Use the imported data

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filteredMembers = members.filter(
    (member) =>
      (selectedRole === "All Roles" || member.role === selectedRole) &&
      (selectedLocation === "All Locations" ||
        member.status === selectedLocation) &&
      member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const teamLead = members.find((member) => member.role === "Senior Developer");
  const totalMembers = members.length;

  return (
    <div className="bg-white p-4 my-5 rounded shadow">
      {/* Dropdowns and Search Input */}
      <div className="mb-4 flex items-center gap-4">
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="p-2 border rounded-lg bg-gray-50"
        >
          <option value="All Roles">All Roles</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Associate Software Developer">
            Associate Software Developer
          </option>
          <option value="Senior Developer">Senior Developer</option>
        </select>

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="p-2 border rounded-lg bg-gray-50"
        >
          <option value="All Locations">All Locations</option>
          <option value="Checked In">Checked In</option>
          <option value="Yet to Check-in">Yet to Check-in</option>
        </select>

        <input
          type="text"
          placeholder="Search members..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-lg bg-gray-50 flex-grow"
        />
      </div>

      {/* Team Lead Section */}
      <div className="mb-6">
        <h4 className="text-lg font-bold mb-3">Team Lead</h4>
        {teamLead && (
          <div className="flex items-center gap-3 p-3 bg-gray-100 border rounded-lg shadow-sm">
            <img
              src={teamLead.profileImage}
              alt="Lead Profile"
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <p className="font-semibold text-sm">{teamLead.name}</p>
              <p className="text-xs text-gray-500">{teamLead.role}</p>
            </div>
            <div className="ml-[1100px]">
              <p className="text-lg font-bold cursor-pointer"><span>{totalMembers} </span>
               
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Members Sections */}
      <div className="grid grid-cols-3 gap-4">
        {/* Column for each role */}
        {["Software Developer", "Associate Software Developer", "Senior Developer"].map((role) => (
          <div key={role}>
            <h4 className="text-lg font-bold mb-3">{role}s</h4>
            <div className="grid grid-cols-1 gap-3">
              {filteredMembers
                .filter((member) => member.role === role)
                .map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center gap-3 p-3 bg-gray-100 border rounded-lg shadow-sm"
                  >
                    <img
                      src={
                        member.profileImage || "https://via.placeholder.com/150"
                      }
                      alt={member.name}
                      className="w-12 h-12 rounded-full border"
                    />
                    <div>
                      <p className="font-semibold text-sm">{member.name}</p>
                      <p
                        className={`text-xs ${
                          member.status === "Checked In"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {member.status}
                      </p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              {filteredMembers.filter((m) => m.role === role).length === 0 && (
                <div className="flex items-center gap-3 p-3 bg-gray-100 border rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-sm">No Members</p>
                    <p className="text-xs text-gray-500">{role}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentDashboard;
