"use client";

import React from 'react';
//import withRoleAccess from '../components/withRoleAccess';
import AdminDashboard from '../components/AdminDashboard';
//import { Box, Typography } from '@mui/material';

const AdminPage = () => {
  return (
    // <Box sx={{ padding: 3 }}>
    //   <Typography variant="h3" gutterBottom>
    //     Admin Area
    //   </Typography>
      <AdminDashboard />
    // </Box>
  );
};

// Wrap the AdminPage component with the withRoleAccess HOC
//export default withRoleAccess(AdminPage, ['Admin', 'Staff']);

export default AdminPage;
