import React, { useState } from "react";
import { consolidatedMembers } from "./data"; // Import consolidated data

const TeamSpaceDashboard = () => {
  // State to toggle modal, search functionality, and team strength div
  const [showModal, setShowModal] = useState(false);
  const [showTeamStrength, setShowTeamStrength] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered list based on search query
  const filteredMembers = consolidatedMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-1 bg-gray-100 p-4">
      {/* Left Sidebar */}
      <div className="w-1/4 my-20 mr-6 space-y-4">
        <div className="absolute top-[9.5rem] left-[13.9rem] border border-black w-24 h-24 flex justify-center items-center bg-white font-bold text-6xl cursor-pointer">
          SE
        </div>
        <div className="bg-white shadow p-4 h-40 rounded-lg">
          <h3 className="font-semibold my-10 ml-16">Software Engineering</h3>
          <p>
            Team strength{" "}
            <span
              className="cursor-pointer ml-[128px] text-blue-500 hover:underline"
              onClick={() => setShowTeamStrength(!showTeamStrength)}
            >
              {consolidatedMembers.length}
            </span>
          </p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="font-semibold">Team Availability</h3>
          <p>WFH: 9</p>
          <p>Yet to check-in: 9</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="font-semibold">Location Diversity</h3>
          <p>R&D: 59</p>
          <p>Unspecified: 51</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg h-40">
          <h3 className="font-semibold">Stream</h3>
        </div>
      </div>

      {/* Center Content */}
      <div className="w-1/2 my-20 mr-6 space-y-4">
        <div className="bg-white shadow p-4 rounded-lg h-40">
          <p className="font-semibold">Post a message to your department</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg h-80">
          <h3 className="font-semibold">Recent Updates</h3>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 my-20 space-y-4">
        <div className="bg-white shadow p-4 rounded-lg h-74">
          <h3 className="font-semibold mb-4">Recently Checked In</h3>
          <div className="space-y-2 overflow-y-auto max-h-48">
            {consolidatedMembers.slice(0, 5).map((member) => (
              <div key={member.id} className="flex items-center gap-3 p-2 bg-gray-50 border rounded-lg">
                <img
                  src={member.profileImage}
                  alt={member.name}
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <p className="text-sm font-semibold">{member.name}</p>
                  <p className="text-xs text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
            {consolidatedMembers.length > 5 && (
              <button
                onClick={() => setShowModal(true)}
                className="text-sm text-blue-500 hover:underline"
              >
                +99 More
              </button>
            )}
          </div>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="font-semibold">New Hires</h3>
          <p>No new hires in the last 15 days</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="font-semibold">Birthday Buddy</h3>
          <p>No birthday celebrations today</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="font-semibold">Department Files</h3>
          <p>No files found</p>
        </div>
      </div>

      {/* Team Strength Div */}
      {showTeamStrength && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-3/4 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">All Members</h3>
              <button onClick={() => setShowTeamStrength(false)} className="text-red-500 font-bold">
                X
              </button>
            </div>
            <input
              type="text"
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full mb-4 p-2 border rounded"
            />
            <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              {filteredMembers.map((member) => (
                <div key={member.id} className="flex items-center gap-3 p-2 bg-gray-50 border rounded-lg">
                  <img
                    src={member.profileImage}
                    alt={member.name}
                    className="w-12 h-12 rounded-full border"
                  />
                  <div>
                    <p className="text-sm font-semibold">{member.name}</p>
                    <p className="text-xs text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSpaceDashboard;
