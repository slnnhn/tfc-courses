"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Select,
  MenuItem,
  FormControl,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import { createClient } from "../utils/supabase/client";

// Mock data for courses
// const initialCourses = [
//   { id: 1, title: "Introduction to React", students: 150, status: "Active", for: ["Staff", "Fellow"] },
//   { id: 2, title: "Advanced JavaScript", students: 120, status: "Active", for: ["Staff"] },
//   { id: 3, title: "Python for Beginners", students: 200, status: "Inactive", for: ["Fellow"] },
// ];

// Mock data for users
// const initialUsers = [
//   { id: 1, name: "John Doe", email: "john@example.com", access: "None" },
//   { id: 2, name: "Jane Smith", email: "jane@example.com", access: "Instructor" },
//   { id: 3, name: "Bob Johnson", email: "bob@example.com", access: "Staff" },
// ];

const courseForOptions = ["Staff", "Fellow"];
const accessLevels = ["Guest", "Fellow", "Staff", "Instructor"];

// Mock Google Analytics data
const mockAnalyticsData = {
  pageViews: 10000,
  uniqueVisitors: 5000,
  averageSessionDuration: "00:03:45",
  bounceRate: "45%",
};

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [analyticsData, setAnalyticsData] = useState(null);
  const supabase = createClient();
  useEffect(() => {
    // Simulating API call to Google Analytics
    const fetchAnalyticsData = async () => {
      // In a real application, you would make an API call to Google Analytics here
      // For this example, we'll use the mock data after a short delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnalyticsData(mockAnalyticsData);
    };
    fetchAnalyticsData();
  }, []);

  useEffect(() => {
    fetchCourses();
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await supabase.from("users").select("*").limit(10);
    if (response.error) {
      console.error("Error fetching users:", response.error.message);
    } else {
      console.log("response", response);
      setUsers(response.data);
    }
  };
  const fetchCourses = async () => {
    const response = await supabase.from("courses").select("*").limit(10);
    if (response.error) {
      console.error("Error fetching courses:", response.error.message);
    } else {
      console.log("respones", response);
      setCourses(response.data);
    }
  };
  const handleCourseForChange = (courseId, newValue) => {
    setCourses(courses.map(course => (course.id === courseId ? { ...course, for: newValue } : course)));
  };

  const handleAccessChange = (userId, newAccess) => {
    setUsers(users.map(user => (user.id === userId ? { ...user, access: newAccess } : user)));
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 2 }}>
        <Tab label="All Courses" />
        <Tab label="Users" />
        <Tab label="Analytics" />
      </Tabs>
      {tabValue === 0 && (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Students</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>For</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courses.map(course => (
                  <TableRow key={course.id}>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{course.students}</TableCell>
                    <TableCell>{course.status}</TableCell>
                    <TableCell>
                      <FormControl fullWidth>
                        {/* <Select
                          multiple
                          value={course.for}
                          onChange={e => handleCourseForChange(course.id, e.target.value)}
                          size="small"
                          renderValue={selected => selected.join(", ")}
                        > */}
                        {/* {courseForOptions.map(option => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))} */}
                        {/* </Select> */}
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <Button size="small">Edit</Button>
                      <Button size="small" color="error">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
      {tabValue === 1 && (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Access Control</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>
                      {user.firstName} {user.lastName}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <FormControl fullWidth>
                        <Select
                          value={user.access}
                          onChange={e => handleAccessChange(user.id, e.target.value)}
                          size="small"
                        >
                          {/* {accessLevels.map(level => (
                            <MenuItem key={level} value={level}>
                              {level}
                            </MenuItem>
                          ))} */}
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <Button size="small">Edit</Button>
                      <Button size="small" color="error">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
      {tabValue === 2 && (
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Analytics
          </Typography>
          {analyticsData ? (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 2, textAlign: "center" }}>
                  <Typography variant="h6">{analyticsData.pageViews}</Typography>
                  <Typography variant="body2">Page Views</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 2, textAlign: "center" }}>
                  <Typography variant="h6">{analyticsData.uniqueVisitors}</Typography>
                  <Typography variant="body2">Unique Visitors</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 2, textAlign: "center" }}>
                  <Typography variant="h6">{analyticsData.averageSessionDuration}</Typography>
                  <Typography variant="body2">Avg. Session Duration</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 2, textAlign: "center" }}>
                  <Typography variant="h6">{analyticsData.bounceRate}</Typography>
                  <Typography variant="body2">Bounce Rate</Typography>
                </Paper>
              </Grid>
            </Grid>
          ) : (
            <Typography>Loading analytics data...</Typography>
          )}
        </Paper>
      )}
    </Box>
  );
};

export default AdminDashboard;
