import React from 'react';

const DepartmentWall = () => {
  const lead = {
    name: 'Jane Smith',
    userId: 'LEAD001',
    status: 'Logged In', // Change to "Yet to Check-in" based on real-time data
    jobRole: 'Team Lead', // Added job role
  };

  return (
    <div className="p-4 space-y-4">
      <div className="bg-white p-4 rounded shadow w-[350px]"> {/* Reduced width */}
        <h3 className="text-xl font-bold">Reporting To</h3>
        <div className="flex items-center space-x-3 mt-4"> {/* Reduced spacing */}
          <img
            src="https://via.placeholder.com/150" // Replace with your lead's profile image
            alt="Lead Profile"
            className="w-12 h-12 rounded-full border"
          />
          <div>
            <h4 className="text-xl font-bold">{lead.name}</h4> {/* Reduced font size */}
            <p className="text-sm text-gray-600">User ID: {lead.userId}</p> {/* Reduced font size */}
            <p className="text-sm text-gray-600">Job Role: {lead.jobRole}</p> {/* Reduced font size */}
            <p className={`mt-1 ${lead.status === 'Logged In' ? 'text-green-600' : 'text-red-600'}`}>
              {lead.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentWall;
