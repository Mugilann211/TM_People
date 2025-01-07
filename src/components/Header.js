// import React, { useState } from 'react';

// const Header = () => {
//   // State to toggle the profile dropdown visibility
//   const [isProfileOpen, setIsProfileOpen] = useState(false); 

//   // Toggle profile dropdown visibility when profile image is clicked
//   const handleProfileClick = () => {
//     setIsProfileOpen(!isProfileOpen);  
//   };

//   // Handle sign-out logic (clear session, redirect, etc.)
//   const handleSignOut = () => {
//     console.log('User signed out');
//     // Implement your sign-out logic here
//     // For example, clearing the session or redirecting to login
//   };

//   return (
//     <div className="bg-blue-900 text-white flex justify-between items-center p-2">
//       <div className="flex items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <img src="/logo.png" alt="Logo" className="h-8" /> {/* Replace with actual logo path */}
//         </div>
//         <nav className="ml-10">
//           <ul className="flex space-x-6">
//             <li className="cursor-pointer">My Space</li>
//             <li className="cursor-pointer">Team</li>
//             <li className="cursor-pointer">Organization</li>
//           </ul>
//         </nav>
//       </div>

//       <div className="flex items-center space-x-4">
//         {/* Profile Picture */}
//         <div className="relative">
//           <img 
//             src="/profile-picture.jpg" 
//             alt="Profile" 
//             className="h-8 w-8 rounded-full cursor-pointer"
//             onClick={handleProfileClick}  // Toggle profile dropdown on click
//           />
//           {isProfileOpen && (
//             <div className="absolute right-0 bg-white text-black shadow-lg rounded-lg p-12 mt-2 w-[500px] h-[400px] transition-all duration-300 ease-in-out">
//               <div className="flex items-center space-x-8">
//                 <img 
//                   src="/profile-picture.jpg" 
//                   alt="Profile" 
//                   className="h-48 w-48 rounded-full"  // Larger profile picture
//                 />
//                 <div>
//                   <p className="font-semibold text-3xl">John Doe</p> {/* Larger username */}
//                   <p className="text-xl text-gray-600">User ID: 12345</p> {/* Larger user ID */}
//                   <p className="text-xl text-gray-600">Email: johndoe@example.com</p> {/* Larger email */}
//                 </div>
//               </div>
//               <button 
//                 className="mt-8 bg-blue-500 text-white px-12 py-6 rounded w-full"
//                 onClick={handleSignOut}  // Handle sign out action
//               >
//                 Sign Out
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
