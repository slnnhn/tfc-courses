'use client';

import React, { useState, useEffect } from 'react';
import { Typography, Container, Box, Avatar, Paper, Grid, Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SchoolIcon from '@mui/icons-material/School';
import Link from 'next/link';
//import { supabase } from '../../lib/supabaseClient';  // Changed this line

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Teacher',
    school: 'Springfield High School',
    avatar: 'https://source.unsplash.com/random/150x150',
    bio: 'Passionate educator with 10 years of experience in secondary education. Specializing in mathematics and physics.',
  });
  const [courses, setCourses] = useState([]);

  // Define members array
  const members = [
    { id: 1, name: 'Member 1', avatar: 'https://source.unsplash.com/random/150x150?1' },
    { id: 2, name: 'Member 2', avatar: 'https://source.unsplash.com/random/150x150?2' },
    { id: 3, name: 'Member 3', avatar: 'https://source.unsplash.com/random/150x150?3' },
    { id: 4, name: 'Member 4', avatar: 'https://source.unsplash.com/random/150x150?4' },
    { id: 5, name: 'Member 5', avatar: 'https://source.unsplash.com/random/150x150?5' },
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*');

      if (error) {
        console.error('Error fetching courses:', error);
      } else {
        setCourses(data);
      }
    };

    fetchCourses();
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Saving user data:', user);
    setIsEditing(false);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: '100px', mb: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={4} md={3}>
              <Avatar
                src={user.avatar}
                alt={user.name}
                sx={{ width: 150, height: 150, margin: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              {isEditing ? (
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  value={user.name}
                  onChange={handleChange}
                  margin="normal"
                />
              ) : (
                <Typography variant="h4" gutterBottom>
                  {user.name}
                </Typography>
              )}
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {user.email}
              </Typography>
              {isEditing ? (
                <TextField
                  fullWidth
                  name="role"
                  label="Role"
                  value={user.role}
                  onChange={handleChange}
                  margin="normal"
                />
              ) : (
                <Typography variant="subtitle1" gutterBottom>
                  {user.role}
                </Typography>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <SchoolIcon sx={{ mr: 1 }} />
                {isEditing ? (
                  <TextField
                    fullWidth
                    name="school"
                    label="School"
                    value={user.school}
                    onChange={handleChange}
                    margin="normal"
                  />
                ) : (
                  <Typography variant="subtitle1">
                    {user.school}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              About Me
            </Typography>
            {isEditing ? (
              <TextField
                fullWidth
                name="bio"
                label="Bio"
                value={user.bio}
                onChange={handleChange}
                multiline
                rows={4}
                margin="normal"
              />
            ) : (
              <Typography variant="body1" paragraph>
                {user.bio}
              </Typography>
            )}
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Courses Enrolled
            </Typography>
            {courses.length > 0 ? (
              <List>
                {courses.map((course) => (
                  <ListItem 
                    key={course.id}
                    component={Link}
                    href={`/coursecontent/${course.id}`}
                    sx={{ 
                      textDecoration: 'none', 
                      color: 'inherit',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    <ListItemText 
                      primary={course.title}
                      secondary={`Instructor: ${course.instructor}`}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body1">
                No courses available at the moment.
              </Typography>
            )}
          </Box>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            {isEditing ? (
              <Button variant="contained" onClick={handleSave}>
                Save Changes
              </Button>
            ) : (
              <Button variant="contained" startIcon={<EditIcon />} onClick={handleEdit}>
                Edit Profile
              </Button>
            )}
          </Box>
        </Paper>
      </Box>

      
    </Container>
  );
}