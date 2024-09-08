"use client";

import React from "react";
//import withRoleAccess from '../components/withRoleAccess';
import AdminDashboard from "../components/AdminDashboard";
//import { Box, Typography } from '@mui/material';

const AdminPage = () => {
  const [editingRow, setEditingRow] = React.useState(null); // Track the row being edited

  const handleEdit = rowId => {
    setEditingRow(rowId); // Set the row to edit
  };

  return (
    <>
      <AdminDashboard onEdit={handleEdit} editingRow={editingRow} />
    </>
  );
};

// Wrap the AdminPage component with the withRoleAccess HOC
//export default withRoleAccess(AdminPage, ['Admin', 'Staff']);

export default AdminPage;
