import React, { useState, useRef } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemIcon, ListItemText, Collapse, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LockIcon from '@mui/icons-material/Lock';

const CourseDisplay = () => {
  const [expanded, setExpanded] = useState({});
  const moduleRefs = useRef([]);

  const toggleExpand = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const scrollToModule = (index) => {
    moduleRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const courseData = {
    title: "Effective Teaching Strategies in the Digital Age",
    provider: "TeacherPro Learning",
    progress: {
      videosLeft: 180,
      readingsLeft: 75,
      assessmentsLeft: 5
    },
    modules: [
      {
        title: "21st Century Pedagogy and Technology Integration",
        description: "This module explores modern pedagogical approaches and how to effectively integrate technology into your teaching practice. You'll learn about blended learning models, digital literacy, and strategies to engage students in online and hybrid environments.",
        content: [
          {
            title: "Introduction to 21st Century Teaching",
            items: [
              { type: "video", title: "The Evolving Role of Educators", duration: "15 min" },
              { type: "reading", title: "Key Competencies for Modern Teachers", duration: "10 min" },
              { type: "plugin", title: "Self-Assessment: Your Digital Teaching Skills", duration: "5 min" },
            ]
          },
          {
            title: "Blended Learning Models",
            items: [
              { type: "video", title: "Understanding Blended Learning", duration: "20 min" },
              { type: "reading", title: "Case Studies: Successful Blended Classrooms", duration: "15 min" },
              { type: "video", title: "Implementing the Flipped Classroom Model", duration: "25 min" },
            ]
          },
        ]
      },
      {
        title: "Digital Tools for Engaging Instruction",
        description: "Discover and learn to use various digital tools that can enhance student engagement and facilitate active learning. This module covers interactive presentation software, collaborative platforms, and assessment tools.",
        content: [
          {
            title: "Interactive Presentation Tools",
            items: [
              { type: "video", title: "Beyond PowerPoint: Modern Presentation Techniques", duration: "18 min" },
              { type: "reading", title: "Guide to Using Prezi and Canva in Education", duration: "12 min" },
              { type: "video", title: "Creating Engaging Slideshows with Google Slides", duration: "22 min" },
            ]
          },
          {
            title: "Collaborative Learning Platforms",
            items: [
              { type: "video", title: "Introduction to Google Classroom", duration: "25 min" },
              { type: "reading", title: "Maximizing Student Interaction with Padlet", duration: "10 min" },
              { type: "video", title: "Facilitating Group Work with Microsoft Teams", duration: "20 min" },
            ]
          },
        ]
      },
      {
        title: "Inclusive Education and Differentiated Instruction",
        description: "Learn strategies to create an inclusive classroom environment and tailor your instruction to meet diverse student needs. This module focuses on differentiated instruction techniques and assistive technologies for special education.",
        content: [
          {
            title: "Principles of Inclusive Education",
            items: [
              { type: "video", title: "Creating an Inclusive Classroom Culture", duration: "20 min" },
              { type: "reading", title: "Universal Design for Learning (UDL) Framework", duration: "15 min" },
              { type: "plugin", title: "Interactive Scenario: Addressing Diverse Learning Needs", duration: "10 min" },
            ]
          },
          {
            title: "Differentiated Instruction Strategies",
            items: [
              { type: "video", title: "Implementing Tiered Assignments", duration: "18 min" },
              { type: "reading", title: "Flexible Grouping Techniques", duration: "12 min" },
              { type: "video", title: "Using Technology for Personalized Learning", duration: "25 min" },
            ]
          },
        ]
      },
      {
        title: "Assessment and Feedback in the Digital Classroom",
        description: "Explore innovative assessment methods and effective feedback techniques for the digital age. This module covers formative and summative assessment strategies, digital assessment tools, and best practices for providing constructive feedback.",
        content: [
          {
            title: "Digital Assessment Strategies",
            items: [
              { type: "video", title: "Formative Assessment Using Digital Tools", duration: "22 min" },
              { type: "reading", title: "Designing Effective Online Quizzes and Tests", duration: "15 min" },
              { type: "video", title: "Portfolio Assessment in the Digital Age", duration: "20 min" },
            ]
          },
          {
            title: "Effective Feedback Techniques",
            items: [
              { type: "video", title: "Principles of Constructive Feedback", duration: "18 min" },
              { type: "reading", title: "Using Rubrics for Transparent Grading", duration: "10 min" },
              { type: "plugin", title: "Practice Exercise: Providing Audio and Video Feedback", duration: "15 min" },
            ]
          },
        ]
      },
    ]
  };

  return (
    <Box sx={{ display: 'flex', p: 2 }}>
      {/* Left sidebar */}
      <Box sx={{ width: '250px', mr: 4, p: 2, borderRight: '1px solid #e0e0e0' }}>
        <Typography variant="h6" gutterBottom>{courseData.title}</Typography>
        <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>{courseData.provider}</Typography>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Search in course"
          sx={{ mb: 2 }}
        />
        <Button variant="contained" fullWidth sx={{ mb: 3 }}>Search</Button>
        <List sx={{ '& .MuiListItem-root': { mb: 1 } }}>
          <ListItem button>
            <ListItemText primary="Course Material" />
          </ListItem>
          <Divider sx={{ my: 1 }} />
          {courseData.modules.map((module, index) => (
            <ListItem 
              button 
              key={index} 
              sx={{ pl: 4, borderRadius: '4px', '&:hover': { backgroundColor: '#f5f5f5' } }} 
              onClick={() => scrollToModule(index)}
            >
              <ListItemText primary={`Module ${index + 1}`} />
            </ListItem>
          ))}
          <Divider sx={{ my: 1 }} />
          <ListItem button>
            <ListItemText primary="Grades" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Notes" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Discussion Forums" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Course Info" />
          </ListItem>
        </List>
      </Box>

      {/* Main content */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>{courseData.title}</Typography>
        
        {/* Progress section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <OndemandVideoIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              {courseData.progress.videosLeft} min of videos left
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MenuBookIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              {courseData.progress.readingsLeft} min of readings left
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LockIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              {courseData.progress.assessmentsLeft} graded assessment left
            </Typography>
          </Box>
        </Box>

        {courseData.modules.map((module, moduleIndex) => (
          <Accordion key={moduleIndex} ref={el => moduleRefs.current[moduleIndex] = el}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`module${moduleIndex}-content`}
              id={`module${moduleIndex}-header`}
            >
              <Typography variant="h6">Module {moduleIndex + 1}: {module.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>{module.description}</Typography>
              {module.content.map((section, sectionIndex) => (
                <Box key={sectionIndex} sx={{ mb: 2 }}>
                  <Button
                    onClick={() => toggleExpand(section.title)}
                    endIcon={expanded[section.title] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    fullWidth
                    sx={{ justifyContent: 'space-between' }}
                  >
                    {section.title}
                  </Button>
                  <Collapse in={expanded[section.title]}>
                    <List>
                      {section.items.map((item, itemIndex) => (
                        <ListItem key={itemIndex}>
                          <ListItemIcon>
                            {item.type === 'video' ? <PlayCircleOutlineIcon /> : <ArticleIcon />}
                          </ListItemIcon>
                          <ListItemText 
                            primary={item.title}
                            secondary={`${item.type} • ${item.duration}`}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default CourseDisplay;