"use client";

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import Link from 'next/link';
import { checkUserRole } from '../utils/auth';

const Navigation = () => {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Replace this with actual user role fetching logic
    setUserRole('Student');
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        {checkUserRole(userRole, ['Student', 'Instructor', 'Fellow', 'Staff', 'Admin']) && (
          <Button color="inherit" component={Link} href="/courses">
            Courses
          </Button>
        )}
        {checkUserRole(userRole, ['Instructor', 'Staff', 'Admin']) && (
          <Button color="inherit" component={Link} href="/create-course">
            Create Course
          </Button>
        )}
        {checkUserRole(userRole, ['Staff', 'Admin']) && (
          <Button color="inherit" component={Link} href="/admin">
            Admin Dashboard
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
