import React, { useState } from 'react';

const DepartmentMembers = () => {
  const members = [
    { id: 1, name: 'John Doe', profileImage: 'https://via.placeholder.com/150', status: 'Checked In', role: 'Software Developer' },
    { id: 2, name: 'Jane Smith', profileImage: 'https://via.placeholder.com/150', status: 'Checked In', role: 'Associate Software Developer' },
    { id: 3, name: 'Emily Davis', profileImage: 'https://via.placeholder.com/150', status: 'Yet to Check-in', role: 'Senior Developer' },
    { id: 4, name: 'Michael Brown', profileImage: 'https://via.placeholder.com/150', status: 'Checked In', role: 'Associate Software Developer' },
    { id: 5, name: 'Sarah Johnson', profileImage: 'https://via.placeholder.com/150', status: 'Yet to Check-in', role: 'Associate Software Developer' },
    { id: 6, name: 'David Lee', profileImage: 'https://via.placeholder.com/150', status: 'Checked In', role: 'Software Developer' },
    { id: 7, name: 'Chris White', profileImage: 'https://via.placeholder.com/150', status: 'Checked In', role: 'Associate Software Developer' },
  ];

  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded shadow w-[350px]">
      <h3 className="text-lg font-bold mb-3">Department Members</h3>
      
      {/* Initial Preview of Members */}
      <div className="grid grid-cols-1 gap-3">
        {members.slice(0, 3).map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-3 p-3 bg-gray-100 border rounded-lg shadow-sm"
          >
            <img
              src={member.profileImage}
              alt={member.name}
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <p className="font-semibold text-sm">{member.name}</p>
              <p className={`text-xs ${member.status === 'Checked In' ? 'text-green-600' : 'text-red-600'}`}>
                {member.status}
              </p>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* "Show More" Button */}
      <button
        onClick={() => setIsBoxVisible(true)}
        className="mt-4 text-sm text-blue-500 hover:underline"
      >
        Show More
      </button>

      {/* Modal with All Members */}
      {isBoxVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="relative w-full max-w-[500px] bg-white rounded shadow-lg">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white border-b p-3">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">All Department Members</h3>
                <button
                  onClick={() => setIsBoxVisible(false)}
                  className="text-gray-600 hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <input
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mt-2 w-full p-2 text-sm border rounded"
              />
            </div>

            {/* Scrollable Member List */}
            <div className="max-h-[300px] overflow-y-auto p-3">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 border rounded-lg shadow-sm mb-3"
                  >
                    <img
                      src={member.profileImage}
                      alt={member.name}
                      className="w-12 h-12 rounded-full border"
                    />
                    <div>
                      <p className="font-semibold text-sm">{member.name}</p>
                      <p
                        className={`text-xs ${
                          member.status === 'Checked In' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {member.status}
                      </p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No members found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentMembers;
