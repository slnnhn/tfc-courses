'use client';

import { useState } from "react";
import { AppBar, Tabs, Tab, Grid, Typography, Card, CardContent, Button, Box, Avatar, Paper, List, ListItem, ListItemText, Collapse, IconButton, LinearProgress, TextField, MenuItem, Select, InputAdornment, Container } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import GoogleMapComponent from './components/googlemaps';
import MembersSection from './components/MembersSection';
import CourseDisplay from './components/CourseDisplay';
import CourseUpload from './components/CourseUpload';
// Styled components
const WhiteAppBar = styled(AppBar)({
  backgroundColor: 'white',
  boxShadow: 'none',
  borderBottom: '1px solid #e0e0e0',
  marginTop: '30px', // Add this line to create space above the AppBar
});

const StyledTab = styled(Tab)({
  color: '#000',
  '&.Mui-selected': {
    color: '#1976d2',
  },
  alignItems: 'flex-start', // This aligns the content of the tab to the left
  justifyContent: 'flex-start', // This ensures the text starts from the left
  padding: '12px 16px', // Adjust these values as needed
});

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%', // Make all cards the same height
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1, // Allow content to grow and push button to bottom
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

// Add a new styled component for course cards
const CourseCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(2),
}));

const CourseContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const CourseInfo = styled(Box)(({ theme }) => ({
  flexGrow: 1,
}));

const CourseActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: theme.spacing(2),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  width: '150px', // Set a fixed width for both buttons
  marginLeft: theme.spacing(1),
}));

const SyllabusContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(2),
  paddingTop: 0,
}));

const SyllabusList = styled(List)(({ theme }) => ({
  width: '50%',
}));

const SyllabusListItem = styled(ListItem)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// Mock data for new courses
const newCourses = [
  { id: 1, title: "Effective Classroom Management", category: "Teaching" },
  { id: 2, title: "Leadership in Education", category: "Professional Development" },
  { id: 3, title: "Inclusive Teaching Strategies", category: "Teaching" },
  { id: 4, title: "Data-Driven Decision Making in Education", category: "Professional Development" },
];

// Mock data for recently viewed courses
const recentCourses = [
  { id: 1, title: "Differentiated Instruction Techniques", category: "Teaching" },
  { id: 2, title: "Educational Technology Integration", category: "Professional Development" },
  { id: 3, title: "Formative Assessment Strategies", category: "Teaching" },
  { id: 4, title: "Building Professional Learning Communities", category: "Professional Development" },
];

// Mock data for in-progress courses
const inProgressCourses = [
  { id: 1, title: "Advanced Teaching Methods", progress: 60, syllabus: ["Module 1: Introduction", "Module 2: Techniques", "Module 3: Practice"] },
  { id: 2, title: "Educational Psychology", progress: 30, syllabus: ["Module 1: Introduction", "Module 2: Theories", "Module 3: Applications"] },
  { id: 3, title: "Curriculum Development", progress: 80, syllabus: ["Module 1: Planning", "Module 2: Implementation", "Module 3: Evaluation"] },
];

// Mock data for completed courses
const completedCourses = [
  { id: 1, title: "Introduction to Pedagogy", completionDate: "2023-05-15" },
  { id: 2, title: "Classroom Management Basics", completionDate: "2023-04-20" },
  { id: 3, title: "Educational Technology Fundamentals", completionDate: "2023-03-10" },
];

// Mock user data
const userData = {
  name: "Khiv Sokun",
  avatar: "https://via.placeholder.com/150",
  inProgressCount: 3,
  completedCount: 5
};

// Mock data for discussion topics
const discussionTopics = [
  { id: 1, title: "Teaching Strategies" },
  { id: 2, title: "Classroom Management" },
  { id: 3, title: "Educational Technology" },
  { id: 4, title: "Student Engagement" },
  { id: 5, title: "Professional Development" },
];

// Create a theme instance
const theme = createTheme();

export default function Home() {
  const [tabValue, setTabValue] = useState(0);
  const [learningTabValue, setLearningTabValue] = useState(0);
  const [expandedId, setExpandedId] = useState(-1);
  const [discussionTabValue, setDiscussionTabValue] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLearningTabChange = (event, newValue) => {
    setLearningTabValue(newValue);
  };

  const handleViewMore = (section) => {
    // Add your logic here for what should happen when "View More" is clicked
    console.log(`View More clicked for ${section}`);
  };

  const handleExpandClick = (courseId) => {
    setExpandedId(expandedId === courseId ? -1 : courseId);
  };

  const handleModuleClick = (courseId, moduleIndex) => {
    // Add your logic here for what should happen when a module is clicked
    console.log(`Clicked module ${moduleIndex + 1} for course ${courseId}`);
  };

  const handleDiscussionTabChange = (event, newValue) => {
    setDiscussionTabValue(newValue);
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const ProfileCard = () => (
    <Paper elevation={3} sx={{ p: 3, mb: 4, display: 'flex', alignItems: 'center' }}>
      <Avatar
        src={userData.avatar}
        alt={userData.name}
        sx={{ width: 100, height: 100, mr: 3 }}
      />
      <Box>
        <Typography variant="h5" gutterBottom>{userData.name}</Typography>
        <Typography variant="body1">
          In Progress Courses: <strong>{userData.inProgressCount}</strong>
        </Typography>
        <Typography variant="body1">
          Completed Courses: <strong>{userData.completedCount}</strong>
        </Typography>
      </Box>
    </Paper>
  );

  const CourseSection = ({ title, courses }) => (
    <>
      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
        {title}
      </Typography>
      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={3}>
            <StyledCard>
              <StyledCardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {course.title}
                </Typography>
                <Button size="small" color="primary">
                  View Course
                </Button>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
        <Button variant="outlined" color="primary" onClick={() => handleViewMore(title)}>
          View More
        </Button>
      </Box>
    </>
  );

  const CourseList = ({ courses, isProgress = false }) => (
    <Box>
      {courses.map((course) => (
        <CourseCard key={course.id}>
          <CourseContent>
            <CourseInfo>
              <Typography gutterBottom variant="h6" component="div">
                {course.title}
              </Typography>
              {isProgress ? (
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={course.progress} sx={{ mt: 1, mb: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    Progress: {course.progress}%
                  </Typography>
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Completed on: {course.completionDate}
                </Typography>
              )}
            </CourseInfo>
            <CourseActions>
              <ActionButton variant="contained" color="primary" component={Link} href="/coursecontent">
                {isProgress ? "Continue" : "Review"}
              </ActionButton>
              {isProgress && (
                <ActionButton
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleExpandClick(course.id)}
                >
                  {expandedId === course.id ? "Hide Syllabus" : "View Syllabus"}
                </ActionButton>
              )}
            </CourseActions>
          </CourseContent>
          {isProgress && (
            <Collapse in={expandedId === course.id} timeout="auto" unmountOnExit>
              <SyllabusContent>
                <SyllabusList>
                  {course.syllabus.map((module, index) => (
                    <SyllabusListItem 
                      key={index} 
                      onClick={() => handleModuleClick(course.id, index)}
                    >
                      <ListItemText 
                        primary={`${index + 1}. ${module}`} 
                        primaryTypographyProps={{ 
                          style: { fontWeight: 'medium' } 
                        }}
                      />
                    </SyllabusListItem>
                  ))}
                </SyllabusList>
              </SyllabusContent>
            </Collapse>
          )}
        </CourseCard>
      ))}
    </Box>
  );

  const DiscussionForum = () => (
    <Box>
      <Typography variant="h4" gutterBottom>Discussion Forum</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Select
          value={selectedTopic}
          onChange={handleTopicChange}
          displayEmpty
          sx={{ minWidth: 200, mr: 2 }}
        >
          <MenuItem value="" disabled>Select a topic</MenuItem>
          {discussionTopics.map((topic) => (
            <MenuItem key={topic.id} value={topic.id}>{topic.title}</MenuItem>
          ))}
        </Select>
        <TextField
          placeholder="Search discussions"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Tabs 
        value={discussionTabValue} 
        onChange={handleDiscussionTabChange}
        aria-label="discussion tabs"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab label="All Discussions" />
        <Tab label="My Discussions" />
        <Tab label="Saved" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {discussionTabValue === 0 && <Typography>All Discussions Content</Typography>}
        {discussionTabValue === 1 && <Typography>My Discussions Content</Typography>}
        {discussionTabValue === 2 && <Typography>Saved Discussions Content</Typography>}
      </Box>
    </Box>
  );

  const renderTabContent = () => {
    switch(tabValue) {
      case 0: // Home tab
        return (
          <>
            <CourseSection title="New Courses" courses={newCourses} />
            <CourseSection title="Recently Viewed Courses" courses={recentCourses} />
          </>
        );
      case 1: // My Learning tab
        return (
          <>
            <Typography variant="h4" gutterBottom>My Learning</Typography>
            <ProfileCard />
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
              <Tabs value={learningTabValue} onChange={handleLearningTabChange} aria-label="learning tabs">
                <Tab label="In Progress" />
                <Tab label="Completed" />
              </Tabs>
            </Box>
            {learningTabValue === 0 ? (
              <CourseList courses={inProgressCourses} isProgress={true} />
            ) : (
              <CourseList courses={completedCourses} />
            )}
          </>
        );
      case 2: // Discussion tab
        return <DiscussionForum />;
      case 3: // Community tab
        return (
          <>
            <Typography variant="h4" gutterBottom>My Community</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <MembersSection />
              <GoogleMapComponent />
              <CourseDisplay />
              <CourseUpload />
            </Box>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingTop: '100px' }}>
        <WhiteAppBar position="static">
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            indicatorColor="primary"
            textColor="primary"
            variant="standard"
            sx={{ 
              '& .MuiTabs-flexContainer': { justifyContent: 'flex-start' },
              paddingLeft: '50px',
              paddingRight: '50px'
            }}
          >
            <StyledTab label="Home" />
            <StyledTab label="My Learning" />
            <StyledTab label="Discussion" />
            <StyledTab label="Community" />
          </Tabs>
        </WhiteAppBar>
      </Box>
      
      <main style={{ padding: '20px 50px' }}>
        {renderTabContent()}
      </main>
    </ThemeProvider>
  );
}