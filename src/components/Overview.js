import React, { useState, useEffect } from 'react';
import { AiOutlineBell } from 'react-icons/ai';

const Overview = () => {
  const [user, setUser] = useState(null);
  const [checkedIn, setCheckedIn] = useState(() => localStorage.getItem('checkedIn') === 'true');
  const [loginTime, setLoginTime] = useState(() => {
    const savedLoginTime = localStorage.getItem('loginTime');
    return savedLoginTime ? new Date(savedLoginTime) : null;
  });
  const [checkoutTime, setCheckoutTime] = useState(null);
  const [workDuration, setWorkDuration] = useState(() => {
    const savedDuration = localStorage.getItem('workDuration');
    return savedDuration ? JSON.parse(savedDuration) : 0;
  });
  const [isBreakActive, setIsBreakActive] = useState(false);
  const [breakTimeRemaining, setBreakTimeRemaining] = useState(0);
  const [isLunchBreak, setIsLunchBreak] = useState(false);
  const [isAlarmVisible, setIsAlarmVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        profileImage: 'https://via.placeholder.com/150',
        name: 'John Doe',
        role: 'Software Engineer',
        status: 'WFH',
      });
    }, 500);
  }, []);

  // Restore elapsed time on page reload
  useEffect(() => {
    if (checkedIn && loginTime) {
      const elapsedTime = Math.floor((new Date() - new Date(loginTime)) / 1000);
      setWorkDuration((prevDuration) => prevDuration + elapsedTime);
    }
  }, [checkedIn, loginTime]);

  useEffect(() => {
    let workTimerInterval;
    if (checkedIn && !isBreakActive) {
      workTimerInterval = setInterval(() => {
        if (loginTime && !checkoutTime) {
          setWorkDuration((prevDuration) => {
            const newDuration = prevDuration + 1;
            localStorage.setItem('workDuration', JSON.stringify(newDuration));
            return newDuration;
          });
        }
      }, 1000);
    } else {
      clearInterval(workTimerInterval);
    }
    return () => clearInterval(workTimerInterval);
  }, [checkedIn, loginTime, checkoutTime, isBreakActive]);

  useEffect(() => {
    let breakTimerInterval;
    if (isBreakActive && breakTimeRemaining > 0) {
      breakTimerInterval = setInterval(() => {
        setBreakTimeRemaining((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(breakTimerInterval);
            setIsBreakActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(breakTimerInterval);
    }

    return () => clearInterval(breakTimerInterval);
  }, [isBreakActive, breakTimeRemaining]);

  const handleBreakClick = (duration) => {
    if (isBreakActive) {
      setIsBreakActive(false);
      setBreakTimeRemaining(0);
    } else {
      setBreakTimeRemaining(duration);
      setIsBreakActive(true);
      setIsLunchBreak(duration === 5400); // 1.5 hours for lunch
    }
  };

  const handleCheckInOutClick = () => {
    if (checkedIn) {
      setCheckoutTime(new Date());
      localStorage.removeItem('loginTime');
      localStorage.removeItem('checkedIn');
    } else {
      const now = new Date();
      setLoginTime(now);
      setCheckoutTime(null);
      localStorage.setItem('loginTime', now.toISOString());
      localStorage.setItem('checkedIn', true);
    }
    setCheckedIn(!checkedIn);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return { hours, minutes, secs };
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const time = formatTime(workDuration);

  return (
    <div className="p-4 space-y-4 w-[365px]">
      <div className="bg-white p-4 rounded shadow overflow-y-auto max-h-[350px]">
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
            <span className="font-semibold">Login Time:</span> {loginTime ? loginTime.toLocaleTimeString() : 'N/A'}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Checkout Time:</span> {checkoutTime ? checkoutTime.toLocaleTimeString() : 'N/A'}
          </p>
        </div>
        <div className="mt-3">
          {/* Timer with box style */}
          <div className="flex justify-center items-center space-x-2 text-3xl font-bold">
            <div className="flex justify-center bg-gray-200 w-10 h-10 rounded-lg">
              <span className="text-gray-800">{String(time.hours).padStart(2, '0')}</span>
            </div><p>:</p>
            <div className="flex justify-center bg-gray-200 w-10 h-10 rounded-lg">
              <span className="text-gray-800">{String(time.minutes).padStart(2, '0')}</span>
            </div><p>:</p>
            <div className="flex justify-center bg-gray-200 w-10 h-10 rounded-lg">
              <span className="text-gray-800">{String(time.secs).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
        <div className="mt-3 mx-16 flex items-center space-x-4">
          <button
            className={`${
              checkedIn ? 'bg-green-500' : 'bg-red-500'
            } text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 text-sm`}
            onClick={handleCheckInOutClick}
          >
            {checkedIn ? 'Check Out' : 'Check In'}
          </button>
          <AiOutlineBell
            className="text-xl text-yellow-500 cursor-pointer"
            onClick={() => setIsAlarmVisible(!isAlarmVisible)}
          />
        </div>

        {isAlarmVisible && (
          <div className="mt-3 space-y-2">
            <p className="text-sm">
              <span className="font-semibold">{isLunchBreak ? 'Lunch Break' : 'Break'} Timer:</span> {formatTime(breakTimeRemaining).hours}:{formatTime(breakTimeRemaining).minutes}:{formatTime(breakTimeRemaining).secs}
            </p>
            <div className="space-x-3">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 text-sm"
                onClick={() => handleBreakClick(30 * 60)} // 30 minutes break
              >
                30 Min Break
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 text-sm"
                onClick={() => handleBreakClick(1.5 * 60 * 60)} // 1.5 hours lunch
              >
                1.5 Hour Lunch
              </button>
            </div>
          </div>
        )}

        {isBreakActive && (
          <p className="text-center mt-3 text-red-500 font-bold">You are currently on a break!</p>
        )}
      </div>
    </div>
  );
};

export default Overview;