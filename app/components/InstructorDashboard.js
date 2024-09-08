"use client";

import React, { useState } from 'react';
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
} from '@mui/material';

// Mock data for courses
const initialCourses = [
  { id: 1, title: 'Introduction to React', students: 150, status: 'Active' },
  { id: 2, title: 'Advanced JavaScript', students: 120, status: 'Active' },
  { id: 3, title: 'Python for Beginners', students: 200, status: 'Inactive' },
];

const InstructorDashboard = () => {
  const [courses, setCourses] = useState(initialCourses);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Instructor Dashboard
      </Typography>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Students</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.id}</TableCell>
                  <TableCell>{course.title}</TableCell>
                  <TableCell>{course.students}</TableCell>
                  <TableCell>{course.status}</TableCell>
                  <TableCell>
                    <Button size="small">View</Button>
                    <Button size="small">Grade</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default InstructorDashboard;