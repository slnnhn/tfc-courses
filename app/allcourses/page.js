'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Checkbox, FormGroup, FormControlLabel, Paper } from '@mui/material';
import { mockCourses } from '../coursecontent';

export default function AllCourses() {
  const [levelFilters, setLevelFilters] = useState({
    beginner: false,
    intermediate: false,
    advanced: false,
  });

  const [topicFilters, setTopicFilters] = useState({
    programming: false,
    design: false,
    business: false,
    marketing: false,
  });

  const handleLevelFilterChange = (event) => {
    setLevelFilters({ ...levelFilters, [event.target.name]: event.target.checked });
  };

  const handleTopicFilterChange = (event) => {
    setTopicFilters({ ...topicFilters, [event.target.name]: event.target.checked });
  };

  const filteredCourses = mockCourses.filter(course => {
    const levelMatch = 
      (!levelFilters.beginner && !levelFilters.intermediate && !levelFilters.advanced) ||
      (levelFilters.beginner && course.level === 'beginner') ||
      (levelFilters.intermediate && course.level === 'intermediate') ||
      (levelFilters.advanced && course.level === 'advanced');

    const topicMatch = 
      (!topicFilters.programming && !topicFilters.design && !topicFilters.business && !topicFilters.marketing) ||
      (topicFilters.programming && course.topics?.includes('programming')) ||
      (topicFilters.design && course.topics?.includes('design')) ||
      (topicFilters.business && course.topics?.includes('business')) ||
      (topicFilters.marketing && course.topics?.includes('marketing'));

    return levelMatch && topicMatch;
  });

  return (
    <Box sx={{ flexGrow: 1, p: 3, mt: '40px' }}> 
      <Typography variant="h4" gutterBottom>
        All Courses
      </Typography>
      
      <Grid container spacing={3}>
        {/* Filter sidebar */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Filters
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Level
              </Typography>
              <FormGroup>
                {Object.keys(levelFilters).map((level) => (
                  <FormControlLabel
                    key={level}
                    control={
                      <Checkbox
                        checked={levelFilters[level]}
                        onChange={handleLevelFilterChange}
                        name={level}
                      />
                    }
                    label={level.charAt(0).toUpperCase() + level.slice(1)}
                  />
                ))}
              </FormGroup>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Topics
              </Typography>
              <FormGroup>
                {Object.keys(topicFilters).map((topic) => (
                  <FormControlLabel
                    key={topic}
                    control={
                      <Checkbox
                        checked={topicFilters[topic]}
                        onChange={handleTopicFilterChange}
                        name={topic}
                      />
                    }
                    label={topic.charAt(0).toUpperCase() + topic.slice(1)}
                  />
                ))}
              </FormGroup>
            </Box>
          </Paper>
        </Grid>

        {/* Course grid */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {filteredCourses.map((course) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://source.unsplash.com/random?${course.title}`}
                    alt={course.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" noWrap>
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Students: {course.students}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Rating: {course.rating}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
