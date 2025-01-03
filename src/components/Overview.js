import React, { useState, useEffect } from 'react';
import { AiOutlineBell } from 'react-icons/ai'; // Import the alarm icon

const Overview = () => {
  const user = {
    profileImage: 'https://via.placeholder.com/150', // Replace with the actual profile image URL
    name: 'John Doe',
    role: 'Software Engineer',
    status: 'WFH', // Change to "Office" if needed
  };

  const [loginTime] = useState(new Date());
  const [workDuration, setWorkDuration] = useState('');
  const [isBreakActive, setIsBreakActive] = useState(false); 
  const [breakTimeRemaining, setBreakTimeRemaining] = useState(0);
  const [isLunchBreak, setIsLunchBreak] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - loginTime; 
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setWorkDuration(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval); 
  }, [loginTime]);

  useEffect(() => {
    if (breakTimeRemaining > 0 && isBreakActive) {
      const timerInterval = setInterval(() => {
        setBreakTimeRemaining((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timerInterval);
            setIsBreakActive(false); 
            return 0;
          }
          return prevTime - 1; 
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [breakTimeRemaining, isBreakActive]);

  const handleBreakClick = (duration) => {
    if (isBreakActive) {
      setIsBreakActive(false);
      setBreakTimeRemaining(0);
    } else {
      setBreakTimeRemaining(duration);
      setIsBreakActive(true);
      setIsLunchBreak(duration === 5400); 
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="p-4 space-y-4">
      <div className="bg-white p-4 rounded shadow overflow-y-auto max-h-[350px] w-[350px]"> {/* Reduced height and width */}
        <div className="flex items-center space-x-3">
          <img
            src={user.profileImage}
            alt="User Profile"
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h3 className="text-xl font-bold">{user.name}</h3>
            <p className="text-gray-600">{user.role}</p>
            <p className={`mt-1 ${user.status === 'WFH' ? 'text-blue-600' : 'text-green-600'}`}>
              {user.status}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm">
            <span className="font-semibold">Login Time:</span> {loginTime.toLocaleTimeString()}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Work Duration:</span> {workDuration}
          </p>
        </div>
        <div className="mt-3 mx-16 flex items-center space-x-4"> {/* Increased space between elements */}
          <button className="bg-red-500 text-white px-5 py-1.5 rounded hover:bg-red-600 text-sm">
            Check Out
          </button>
          <div className=" " />
          <AiOutlineBell
            className="text-xl text-yellow-500 cursor-pointer"
            onClick={() => setIsBreakActive(!isBreakActive)}
          />
        </div>

        {isBreakActive && (
          <div className="mt-3 space-y-2">
            <p className="text-sm">
              <span className="font-semibold">{isLunchBreak ? 'Lunch Break' : 'Break'} Timer:</span> {formatTime(breakTimeRemaining)}
            </p>
            <div className="space-x-3">
              <button
                className="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600 text-sm"
                onClick={() => handleBreakClick(30 * 60)} 
              >
                30 Min Break
              </button>
              <button
                className="bg-green-500 text-white px-4 py-1.5 rounded hover:bg-green-600 text-sm"
                onClick={() => handleBreakClick(1.5 * 60 * 60)} 
              >
                1.5 Hour Lunch
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
