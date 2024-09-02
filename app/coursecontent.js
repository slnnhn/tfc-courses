'use client';

import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const PageContainer = styled(Box)({
  display: 'flex',
  height: '100vh',
});

const Sidebar = styled(Paper)({
  width: '250px',
  padding: '20px',
  overflowY: 'auto',
});

const ContentArea = styled(Box)({
  flexGrow: 1,
  padding: '20px',
  overflowY: 'auto',
});

// Export the modules data
export const courseModules = [
  { id: 1, title: 'Introduction to the Course' },
  { id: 2, title: 'Basic Concepts' },
  { id: 3, title: 'Advanced Topics' },
  { id: 4, title: 'Practical Applications' },
  { id: 5, title: 'Case Studies' },
];

// Export mock course data
export const mockCourses = [
  {
    id: 1,
    title: "Effective Classroom Management Strategies",
    students: 2500,
    rating: 4.8,
    level: "intermediate",
    topics: ["teaching", "classroom management"]
  },
  {
    id: 2,
    title: "Differentiated Instruction in the Classroom",
    students: 2200,
    rating: 4.7,
    level: "intermediate",
    topics: ["teaching", "instruction methods"]
  },
  {
    id: 3,
    title: "Technology Integration in Education",
    students: 1800,
    rating: 4.6,
    level: "beginner",
    topics: ["teaching", "educational technology"]
  },
  {
    id: 4,
    title: "Assessment and Evaluation Techniques",
    students: 2000,
    rating: 4.5,
    level: "intermediate",
    topics: ["teaching", "assessment"]
  },
  {
    id: 5,
    title: "Special Education: Inclusive Practices",
    students: 1500,
    rating: 4.9,
    level: "advanced",
    topics: ["teaching", "special education"]
  },
  {
    id: 6,
    title: "Curriculum Development and Design",
    students: 1700,
    rating: 4.7,
    level: "advanced",
    topics: ["teaching", "curriculum"]
  },
  {
    id: 7,
    title: "Classroom Communication and Presentation Skills",
    students: 2300,
    rating: 4.8,
    level: "beginner",
    topics: ["teaching", "communication"]
  },
  {
    id: 8,
    title: "Educational Leadership and Administration",
    students: 1200,
    rating: 4.6,
    level: "advanced",
    topics: ["education", "leadership"]
  },
  {
    id: 9,
    title: "Teaching English as a Second Language (TESL)",
    students: 1900,
    rating: 4.7,
    level: "intermediate",
    topics: ["teaching", "language"]
  },
  {
    id: 10,
    title: "Mindfulness and Stress Management for Educators",
    students: 1600,
    rating: 4.8,
    level: "beginner",
    topics: ["professional development", "well-being"]
  },
  {
    id: 11,
    title: "Project-Based Learning Implementation",
    students: 1400,
    rating: 4.5,
    level: "intermediate",
    topics: ["teaching", "project-based learning"]
  },
  {
    id: 12,
    title: "Digital Literacy for Educators",
    students: 2100,
    rating: 4.6,
    level: "beginner",
    topics: ["teaching", "digital skills"]
  },
  {
    id: 13,
    title: "Culturally Responsive Teaching Practices",
    students: 1800,
    rating: 4.9,
    level: "intermediate",
    topics: ["teaching", "cultural awareness"]
  },
  {
    id: 14,
    title: "Data-Driven Decision Making in Education",
    students: 1300,
    rating: 4.7,
    level: "advanced",
    topics: ["education", "data analysis"]
  },
  {
    id: 15,
    title: "Classroom Behavior Management Techniques",
    students: 2400,
    rating: 4.8,
    level: "intermediate",
    topics: ["teaching", "behavior management"]
  },
  {
    id: 16,
    title: "Effective Parent-Teacher Communication",
    students: 1700,
    rating: 4.6,
    level: "beginner",
    topics: ["teaching", "communication"]
  }
];

export default function CourseContent() {
  const [selectedModule, setSelectedModule] = useState(courseModules[0]);

  const handleModuleClick = (module) => {
    setSelectedModule(module);
  };

  return (
    <PageContainer>
      <Sidebar elevation={3}>
        <Typography variant="h6" gutterBottom>
          Course Modules
        </Typography>
        <List>
          {courseModules.map((module) => (
            <React.Fragment key={module.id}>
              <ListItem 
                button 
                selected={selectedModule.id === module.id}
                onClick={() => handleModuleClick(module)}
              >
                <ListItemText primary={module.title} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Sidebar>
      <ContentArea>
        <Typography variant="h4" gutterBottom>
          {selectedModule.title}
        </Typography>
        <Typography variant="body1">
          This is the content for {selectedModule.title}. Replace this with actual course content.
        </Typography>
      </ContentArea>
    </PageContainer>
  );
}

