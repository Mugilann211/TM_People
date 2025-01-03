import React, { useState } from 'react';
import { consolidatedMembers } from './data';

const PeersDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Extracting the department head and team lead
  const departmentHead = consolidatedMembers.find((member) => member.role === 'Senior Developer' && member.status === 'Checked In');
  const teamLead = consolidatedMembers.find((member) => member.role === 'Team Lead' && member.status === 'Checked In');

  // Filtering members based on search query
  const filteredMembers = consolidatedMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      {/* Department Head Section */}
      <div className="mb-6">
        <h4 className="text-lg font-bold mb-3">Department Head</h4>
        {departmentHead && (
          <div className="flex items-center gap-3 p-3 bg-gray-100 border rounded-lg shadow-sm">
            <img
              src={departmentHead.profileImage || 'https://via.placeholder.com/150'}
              alt="Department Head"
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <p className="font-semibold text-sm">{departmentHead.name}</p>
              <p className="text-xs text-gray-500">{departmentHead.role}</p>
            </div>
          </div>
        )}
      </div>

      {/* Team Lead Section */}
      <div className="mb-6">
        <h4 className="text-lg font-bold mb-3">Team Lead</h4>
        {teamLead && (
          <div className="flex items-center gap-3 p-3 bg-gray-100 border rounded-lg shadow-sm">
            <img
              src={teamLead.profileImage || 'https://via.placeholder.com/150'}
              alt="Team Lead"
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <p className="font-semibold text-sm">{teamLead.name}</p>
              <p className="text-xs text-gray-500">{teamLead.role}</p>
            </div>
          </div>
        )}
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search members..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border rounded-lg bg-gray-50 flex-grow mb-4"
      />

      {/* All Members Grid Section */}
      <div className="grid grid-cols-3 gap-4">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-3 p-3 bg-gray-100 border rounded-lg shadow-sm"
          >
            <img
              src={member.profileImage || 'https://via.placeholder.com/150'}
              alt={member.name}
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <p className="font-semibold text-sm">{member.name}</p>
              <p className="text-xs text-gray-500">{member.role}</p>
              <p className="text-xs text-gray-500">{member.status}</p> {/* Display status */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeersDashboard;
