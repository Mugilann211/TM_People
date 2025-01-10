import React, { useState } from "react";
import employeeData, { employees } from "../components/data/employees";
import SearchBar from "../components/SearchBar";

const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State for selected employee
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const rowsPerPage = 10; // Number of rows per page

  console.log(employeeData);

  // Filtered employees based on the search term
  const filteredEmployees = employees.filter((employee) =>
    `${employee.firstName} ${employee.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredEmployees.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Handle row click to open modal
  const handleRowClick = (employee) => {
    setSelectedEmployee(employee); // Set the selected employee details
    setIsModalOpen(true); // Open the modal
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Search bar component */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* HTML Table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-200 sticky left-0 bg-gray-100 z-10">
                Employee ID
              </th>
              <th className="px-4 py-2 border border-gray-200 sticky left-16 bg-gray-100 z-10">
                First Name
              </th>
              <th className="px-4 py-2 border border-gray-200 sticky left-32 bg-gray-100 z-10">
                Last Name
              </th>
              <th className="px-4 py-2 border border-gray-200">
                Email Address
              </th>
              <th className="px-4 py-2 border border-gray-200">Department</th>
              <th className="px-4 py-2 border border-gray-200">Designation</th>
              <th className="px-4 py-2 border border-gray-200">
                Employment Type
              </th>
              <th className="px-4 py-2 border border-gray-200">
                Employment Status
              </th>
              <th className="px-4 py-2 border border-gray-200">
                Reporting Manager
              </th>
              <th className="px-4 py-2 border border-gray-200">
                Date of Joining
              </th>
              <th className="px-4 py-2 border border-gray-200">
                Date of Birth
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((employee) => (
              <tr
                key={employee.id}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => handleRowClick(employee)}
              >
                <td className="px-4 py-2 border border-gray-200 sticky left-0 bg-white z-10">
                  {employee.id}
                </td>
                <td className="px-4 py-2 border border-gray-200 sticky left-16 bg-white z-10">
                  {employee.firstName}
                </td>
                <td className="px-4 py-2 border border-gray-200 sticky left-32 bg-white z-10">
                  {employee.lastName}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {employee.email}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {employee.department}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {employee.Role}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {employee.Type}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {employee.Active}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {employee.ReportingTo}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {employee.JoiningDate}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {employee.BirthDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Modal for employee details */}
      {isModalOpen && selectedEmployee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-4/5 shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Employee Details</h2>
            <div>
              <p>
                <strong>Employee ID:</strong> {selectedEmployee.id}
              </p>
              <p>
                <strong>First Name:</strong> {selectedEmployee.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {selectedEmployee.lastName}
              </p>
              <p>
                <strong>Email:</strong> {selectedEmployee.email}
              </p>
              <p>
                <strong>Department:</strong> {selectedEmployee.department}
              </p>
              <p>
                <strong>Designation:</strong> {selectedEmployee.Role}
              </p>
              <p>
                <strong>Employment Type:</strong> {selectedEmployee.Type}
              </p>
              <p>
                <strong>Employment Status:</strong> {selectedEmployee.Active}
              </p>
              <p>
                <strong>Reporting Manager:</strong>{" "}
                {selectedEmployee.ReportingTo}
              </p>
              <p>
                <strong>Date of Joining:</strong> {selectedEmployee.JoiningDate}
              </p>
              <p>
                <strong>Date of Birth:</strong> {selectedEmployee.BirthDate}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
