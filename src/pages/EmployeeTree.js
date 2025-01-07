import React from "react";

const EmployeeTree = () => {
  // Employee data
  const employeeData = [
    {
      name: "Sylvia Prince",
      designation: "Head - HR",
      profilePic: "https://via.placeholder.com/48",
      isSenior: true,
    },
    {
      name: "Joy Helen Michael Duraisamy",
      designation: "Senior HR Executive",
      profilePic: "https://via.placeholder.com/48",
      isSenior: true,
    },
    {
      name: "Karthikeyan Ponniah",
      designation: "Senior Software Engineer",
      profilePic: "https://via.placeholder.com/48",
      isSenior: true,
    },
    {
      name: "Arun Periyakaruppan",
      designation: "Software Engineer",
      profilePic: "https://via.placeholder.com/48",
      isSenior: false,
    },
    {
      name: "Anusha Reyya",
      designation: "HR Executive",
      profilePic: "https://via.placeholder.com/48",
      isSenior: false,
    },
    {
      name: "Anand Sivanandam",
      designation: "Software Engineer",
      profilePic: "https://via.placeholder.com/48",
      isSenior: false,
    },
    {
      name: "Selcia Mariaraj",
      designation: "Software Engineer",
      profilePic: "https://via.placeholder.com/48",
      isSenior: false,
    },
    {
      name: "Ramanakishore Sambath",
      designation: "Associate Software Engineer",
      profilePic: "https://via.placeholder.com/48",
      isSenior: false,
    },
    {
      name: "Mohan Krishna Meganathan",
      designation: "Associate Software Engineer",
      profilePic: "https://via.placeholder.com/48",
      isSenior: false,
    },
  ];

  // Filter employees into seniors and juniors
  const seniors = employeeData.filter((employee) => employee.isSenior);
  const juniors = employeeData.filter((employee) => !employee.isSenior);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Employee Tree</h1>
      <div className="grid grid-cols-2 gap-8">
        {/* Seniors Column */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-blue-700">Seniors</h2>
          <div className="flex flex-col gap-4">
            {seniors.map((employee, idx) => (
              <div
                key={idx}
                className="p-4 bg-white shadow-md rounded-md w-48 text-center"
              >
                <img
                  src={employee.profilePic}
                  alt={employee.name}
                  className="h-16 w-16 rounded-full mx-auto border-2 border-gray-300"
                />
                <p className="mt-2 font-semibold text-sm">{employee.name}</p>
                <p className="text-xs text-gray-500">{employee.designation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Juniors Column */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-blue-700">Juniors</h2>
          <div className="flex flex-col gap-4">
            {juniors.map((employee, idx) => (
              <div
                key={idx}
                className="p-4 bg-white shadow-md rounded-md w-48 text-center"
              >
                <img
                  src={employee.profilePic}
                  alt={employee.name}
                  className="h-16 w-16 rounded-full mx-auto border-2 border-gray-300"
                />
                <p className="mt-2 font-semibold text-sm">{employee.name}</p>
                <p className="text-xs text-gray-500">{employee.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTree;
