import React, { useState } from "react";
import { FaPlus, FaMapMarkerAlt, FaBuilding, FaRegClock, FaRegCalendarAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  const [showAbout, setShowAbout] = useState(false); // Toggle About section

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Profile Information</h2>

      {/* Scrollable Profile Information Container */}
      <div className="overflow-y-auto h-[500px]"> {/* Height and scrollable area */}
        {/* First Box: Location, Department, Shift, Timezone, Email, Phones */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="font-semibold text-lg mb-4">Basic Details</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center w-full md:w-1/2">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <p><strong>Location:</strong> Research & Development Office</p>
            </div>
            <div className="flex items-center w-full md:w-1/2">
              <FaBuilding className="text-green-500 mr-2" />
              <p><strong>Department:</strong> Software Engineering</p>
            </div>
            <div className="flex items-center w-full md:w-1/2">
              <FaRegClock className="text-yellow-500 mr-2" />
              <p><strong>Shift:</strong> Day</p>
            </div>
            <div className="flex items-center w-full md:w-1/2">
              <FaRegCalendarAlt className="text-purple-500 mr-2" />
              <p><strong>Time zone:</strong> (GMT+05:30)</p>
            </div>
            <div className="flex items-center w-full md:w-1/2">
              <FaEnvelope className="text-red-500 mr-2" />
              <p><strong>Email ID:</strong> sathish.as@tmachinesoftware.com</p>
            </div>
            <div className="flex items-center w-full md:w-1/2">
              <FaPhoneAlt className="text-orange-500 mr-2" />
              <p><strong>Mobile Phone:</strong> 91-6382524059</p>
            </div>
            <div className="flex items-center w-full md:w-1/2">
              <FaPhoneAlt className="text-orange-500 mr-2" />
              <p><strong>Work Phone:</strong> 91-6382524059</p>
            </div>
          </div>

          {/* About Section with Plus Icon */}
          <div className="flex items-center cursor-pointer mt-6" onClick={() => setShowAbout(!showAbout)}>
            <FaPlus className="text-gray-500 mr-2" />
            <p className="text-blue-600 font-semibold">About</p>
          </div>
          {showAbout && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <p>About Me: [Add About]</p>
            </div>
          )}
        </div>

        {/* Scrollable Profile Details Container */}
        <div className="space-y-6">
          
          {/* Organization Structure Box */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-4">Organization Structure</h3>
            <div className="flex flex-wrap gap-6">
              <div className="w-full">
                <p><strong>Department:</strong> Software Engineering</p>
              </div>
            </div>
          </div>

          {/* Basic Information Box */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-4">Basic Information</h3>
            <div className="flex flex-wrap gap-6">
              <div className="w-full md:w-1/2">
                <p><strong>Employee ID:</strong> TM-240815</p>
              </div>
              <div className="w-full md:w-1/2">
                <p><strong>First Name:</strong> Sathish</p>
              </div>
              <div className="w-full md:w-1/2">
                <p><strong>Last Name:</strong> Ashok</p>
              </div>
              <div className="w-full md:w-1/2">
                <p><strong>Nick Name:</strong> -</p>
              </div>
              <div className="w-full md:w-1/2">
                <p><strong>Email Address:</strong> sathish.as@tmachinesoftware.com</p>
              </div>
            </div>
          </div>

          {/* Work Information Box */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-4">Work Information</h3>
            <div className="flex flex-wrap gap-6">
              <div className="w-full md:w-1/2">
                <p><strong>Department:</strong> Software Engineering</p>
              </div>
              <div className="w-full md:w-1/2">
                <p><strong>Location:</strong> Research & Development Office</p>
              </div>
              <div className="w-full md:w-1/2">
                <p><strong>Designation:</strong> Associate Software Engineer</p>
              </div>
              <div className="w-full md:w-1/2">
                <p><strong>Zoho Role:</strong> Team member</p>
              </div>
              <div className="w-full md:w-1/2">
                <p><strong>Employment Type:</strong> Permanent</p>
              </div>
              <div className="w-full md:w-1/2">
                <p><strong>Employee Status:</strong> Active</p>
              </div>
              <div className="w-full md:w-1/2">
                <p><strong>Source of Hire:</strong> -</p>
              </div>
              <div className="w-full md:w-1/2">
                <p><strong>Date of Joining:</strong> 19-Aug-2024</p>
              </div>
            </div>
          </div>

          {/* Hierarchy Information Box */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-4">Hierarchy Information</h3>
            <div className="flex flex-wrap gap-6">
              <div className="w-full md:w-1/2">
                <p><strong>Reporting Manager:</strong> Anand Sivanandam TM-230401</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
