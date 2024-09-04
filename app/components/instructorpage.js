'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, Button, List, ListItem, ListItemText, Divider, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const DashboardItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

const StyledLink = styled(Link)({
  textDecoration: 'none',
});

// Mock data
const courses = [
  { id: 1, title: 'Introduction to React', students: 120, rating: 4.5, for: ['Staff', 'Fellow'] },
  { id: 2, title: 'Advanced JavaScript Concepts', students: 85, rating: 4.7, for: ['Staff'] },
  { id: 3, title: 'Web Design Fundamentals', students: 200, rating: 4.2, for: ['Fellow'] },
];

const recentActivities = [
  'New enrollment in "Introduction to React"',
  'Feedback received for "Advanced JavaScript Concepts"',
  'Course update for "Web Design Fundamentals" published',
];

export default function InstructorDashboard() {
  return (
    <PageContainer>
      <Typography variant="h4" gutterBottom>Instructor Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <DashboardItem elevation={3}>
            <Typography variant="h6" gutterBottom>Your Courses</Typography>
            <List>
              {courses.map((course) => (
                <React.Fragment key={course.id}>
                  <ListItem>
                    <ListItemText
                      primary={course.title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            Students: {course.students} | Rating: {course.rating}
                          </Typography>
                          <br />
                          <Typography component="span" variant="body2" color="text.secondary">
                            Course For: 
                          </Typography>
                          {course.for.map((role) => (
                            <Chip 
                              key={role} 
                              label={role} 
                              size="small" 
                              sx={{ ml: 0.5, mr: 0.5 }}
                            />
                          ))}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
            <Box sx={{ mt: 2 }}>
              <StyledLink href="/courseupload" passHref>
                <Button variant="contained" color="primary">
                  Create New Course
                </Button>
              </StyledLink>
            </Box>
          </DashboardItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardItem elevation={3}>
            <Typography variant="h6" gutterBottom>Recent Activity</Typography>
            <List>
              {recentActivities.map((activity, index) => (
                <ListItem key={index}>
                  <ListItemText primary={activity} />
                </ListItem>
              ))}
            </List>
          </DashboardItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardItem elevation={3}>
            <Typography variant="h6" gutterBottom>Quick Stats</Typography>
            <Typography variant="body1">Total Students: 405</Typography>
            <Typography variant="body1">Average Rating: 4.5</Typography>
            <Typography variant="body1">Courses Published: 3</Typography>
          </DashboardItem>
        </Grid>
        <Grid item xs={12} md={8}>
          <DashboardItem elevation={3}>
            <Typography variant="h6" gutterBottom>Upcoming Deadlines</Typography>
            <Typography variant="body1">No upcoming deadlines</Typography>
          </DashboardItem>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
