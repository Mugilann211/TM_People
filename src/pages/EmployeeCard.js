import React from "react";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-white shadow-md p-4 rounded-md mb-4">
      <img
        src={employee.photo}
        alt={`${employee.firstName} ${employee.lastName}`}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">
          {employee.firstName} {employee.lastName}
        </h3>
        <p className="text-gray-600">{employee.designation}</p>
        <p className="text-gray-500">{employee.department}</p>
      </div>
      <div className="text-sm text-right">
        <p>Modified: {employee.modifiedDate}</p>
        <p>Joined: {employee.dateOfJoining}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
