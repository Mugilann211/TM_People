import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LeaveTracker = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/leave-summary");
  }, [navigate]);

  return <>LEave Tracker</>; // You can return a loader or splash screen if needed
};

export default LeaveTracker;
