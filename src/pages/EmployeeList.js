import React, { useState } from "react";
import { employees } from "./EmployeesData"; // Import employee data
import { AgGridReact } from "ag-grid-react"; // AgGridReact for the table
import "ag-grid-community/styles/ag-grid.css"; // AgGrid styles
import "ag-grid-community/styles/ag-theme-alpine.css";

const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State for selected employee
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Column definitions for the AgGrid table
  const [columnDefs] = useState([
    { headerName: "Employee ID", field: "id", sortable: true, filter: true, pinned: "left" },
    { headerName: "First Name", field: "firstName", sortable: true, filter: true, pinned: "left" },
    { headerName: "Last Name", field: "lastName", sortable: true, filter: true, pinned: "left" },
    { headerName: "Email Address", field: "email", sortable: true, filter: true },
    { headerName: "Department", field: "department", sortable: true, filter: true },
    { headerName: "Designation", field: "Role", sortable: true, filter: true },
    { headerName: "Employment Type", field: "Type", sortable: true, filter: true },
    { headerName: "Employment Status", field: "Active", sortable: true, filter: true },
    { headerName: "Reporting Manager", field: "ReportingTo", sortable: true, filter: true },
    { headerName: "Date of Joining", field: "JoiningDate", sortable: true, filter: true },
    { headerName: "Date of Birth", field: "BirthDate", sortable: true, filter: true },
  ]);

  // Handle row click to open modal
  const handleRowClick = (event) => {
    setSelectedEmployee(event.data); // Set the selected employee details
    setIsModalOpen(true); // Open the modal
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  // Filtered employees based on the search term
  const filteredEmployees = employees.filter((employee) =>
    `${employee.firstName} ${employee.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    
      {/* AgGrid table */}
      <div
        className="ag-theme-alpine"
        style={{
          height: "500px",
          width: "100%",
          position: "relative",
        }}
      >
        <style>
          {`
            .ag-header {
              position: sticky;
              top: 0;
              z-index: 10; /* Ensures the header is above rows */
              background-color: white; /* Keep the header visible */
            }
            .ag-header-cell {
              background-color: white; /* Ensure individual header cells remain visible */
              border-bottom: 1px solid #ddd; /* Optional: Add a bottom border for better visibility */
            }
          `}
        </style>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={filteredEmployees} // Display filtered employees
          domLayout="normal"
          pagination={true} // Add pagination
          paginationPageSize={10} // Set the number of rows per page
          onRowClicked={handleRowClick} // Trigger modal on row click
        />
      </div>

      {/* Modal for employee details */}
      {isModalOpen && selectedEmployee && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 20,
            background: "white",
            borderRadius: "8px",
            padding: "20px",
            width: "80%",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>Employee Details</h2>
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            Close
          </button>
          <div style={{ marginTop: "20px" }}>
            <p><strong>Employee ID:</strong> {selectedEmployee.id}</p>
            <p><strong>First Name:</strong> {selectedEmployee.firstName}</p>
            <p><strong>Last Name:</strong> {selectedEmployee.lastName}</p>
            <p><strong>Email:</strong> {selectedEmployee.email}</p>
            <p><strong>Department:</strong> {selectedEmployee.department}</p>
            <p><strong>Designation:</strong> {selectedEmployee.Role}</p>
            <p><strong>Employment Type:</strong> {selectedEmployee.Type}</p>
            <p><strong>Employment Status:</strong> {selectedEmployee.Active}</p>
            <p><strong>Reporting Manager:</strong> {selectedEmployee.ReportingTo}</p>
            <p><strong>Date of Joining:</strong> {selectedEmployee.JoiningDate}</p>
            <p><strong>Date of Birth:</strong> {selectedEmployee.BirthDate}</p>
          </div>
        </div>
      )}

      {/* Modal background */}
      {isModalOpen && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 10,
          }}
        ></div>
      )}
    </div>
  );
};

export default EmployeeList;
