
import React, {useState} from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tab,
  Tabs,
  Avatar,
} from "@mui/material";

const ClickOrganization = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const services = [
    { label: "Leave Tracker", icon: "📝" },
    { label: "Attendance", icon: "📅" },
    { label: "Travel", icon: "✈️" },
    { label: "Tasks", icon: "🛠️" },
    { label: "Time Tracker", icon: "⏰" },
    { label: "Files", icon: "📁" },
    { label: "Compensation", icon: "💰" },
    { label: "HR Letters", icon: "⭐" },
  ];

  const renderServiceCard = (service) => (
    <Card
      key={service.label}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 4,
        padding: 2,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        marginBottom: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 10,
            backgroundColor: "#f5f5f5",
            borderRadius: "50%",
            fontSize: 24,
          }}
        >
          {service.icon}
        </Box>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {service.label}
        </Typography>
      </Box>
    </Card>
  );

  return (
    <Box sx={{ minHeight: "100vh", position: "relative", backgroundColor: "#f9f9f9" }}>
      {/* Wrapper with background image */}
      <Box
        sx={{
          position: "relative",
          height: "200px",
          backgroundImage:
            "url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content section with white background */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          backgroundColor: "white",
          borderRadius: 4,
          top: "-50px",
          padding: 4,
          margin: "0 auto",
          maxWidth: "90%",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Profile Section */}
        <Card
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            marginBottom: 5,
            width: "350px",
            position: "relative",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Avatar
              src="https://via.placeholder.com/100"
              alt="Profile"
              sx={{
                width: 100,
                height: 100,
                margin: "0 auto",
                border: "5px solid white",
              }}
            />
            <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
              TMACHINE SOFTWARE SOLUTIONS
            </Typography>
            <Typography>Chennai, Tamil Nadu, India</Typography>
            <Typography color="text.secondary" sx={{ marginBottom: 2 }}>
              <a
                href="https://www.tmachinesoftware.com"
                target="_blank"
                rel="noreferrer"
              >
                www.tmachinesoftware.com
              </a>
            </Typography>
            <Card>
            <Typography variant="subtitle1" sx={{ marginTop: 3, fontWeight: "bold", boxShadow: "25px" }}>
              Quick Links
            </Typography>
            <Typography color="text.secondary">No quick links</Typography>
            </Card>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Box sx={{ flex: 1, marginLeft: 3 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              borderBottom: 2,
              borderColor: "divider",
              marginBottom: 3,
            }}
          >
            <Tab label="Services" />
            <Tab label="Location" />
          </Tabs>

          {/* Tab Content */}
          <Box>
            {tabValue === 0 && (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 2,
                }}
              >
                {services.map((service) => renderServiceCard(service))}
              </Box>
            )}
            {tabValue === 1 && (
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                Location Information Here
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ClickOrganization;
