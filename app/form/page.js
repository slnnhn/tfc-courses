'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, IconButton, Paper, Divider, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const CourseUpload = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [provider, setProvider] = useState('');
  const [progress, setProgress] = useState({
    videosLeft: 0,
    readingsLeft: 0,
    assessmentsLeft: 0
  });
  const [modules, setModules] = useState([{
    title: '',
    description: '',
    content: [{
      title: '',
      items: [{
        type: 'video',
        title: '',
        duration: ''
      }]
    }]
  }]);

  const handleProgressChange = (field, value) => {
    setProgress(prev => ({ ...prev, [field]: value }));
  };

  const handleAddModule = () => {
    setModules([...modules, {
      title: '',
      description: '',
      content: [{
        title: '',
        items: [{
          type: 'video',
          title: '',
          duration: ''
        }]
      }]
    }]);
  };

  const handleRemoveModule = (moduleIndex) => {
    setModules(modules.filter((_, index) => index !== moduleIndex));
  };

  const handleModuleChange = (moduleIndex, field, value) => {
    const newModules = [...modules];
    newModules[moduleIndex][field] = value;
    setModules(newModules);
  };

  const handleAddContent = (moduleIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].content.push({
      title: '',
      items: [{
        type: 'video',
        title: '',
        duration: ''
      }]
    });
    setModules(newModules);
  };

  const handleRemoveContent = (moduleIndex, contentIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].content = newModules[moduleIndex].content.filter((_, index) => index !== contentIndex);
    setModules(newModules);
  };

  const handleContentChange = (moduleIndex, contentIndex, field, value) => {
    const newModules = [...modules];
    newModules[moduleIndex].content[contentIndex][field] = value;
    setModules(newModules);
  };

  const handleAddItem = (moduleIndex, contentIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].content[contentIndex].items.push({
      type: 'video',
      title: '',
      duration: ''
    });
    setModules(newModules);
  };

  const handleRemoveItem = (moduleIndex, contentIndex, itemIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].content[contentIndex].items = newModules[moduleIndex].content[contentIndex].items.filter((_, index) => index !== itemIndex);
    setModules(newModules);
  };

  const handleItemChange = (moduleIndex, contentIndex, itemIndex, field, value) => {
    const newModules = [...modules];
    newModules[moduleIndex].content[contentIndex].items[itemIndex][field] = value;
    setModules(newModules);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ courseTitle, courseDescription, provider, progress, modules });
    // Here you would typically send the data to your backend
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>Upload New Course</Typography>
      <form onSubmit={handleSubmit}>
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="h6" gutterBottom>Course Details</Typography>
          <TextField
            fullWidth
            label="Course Title"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Course Description"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            margin="normal"
            multiline
            rows={4}
            required
          />
          <TextField
            fullWidth
            label="Provider"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            margin="normal"
            required
          />
        </Paper>

        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="h6" gutterBottom>Course Progress</Typography>
          <TextField
            label="Videos Left (minutes)"
            type="number"
            value={progress.videosLeft}
            onChange={(e) => handleProgressChange('videosLeft', e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Readings Left (minutes)"
            type="number"
            value={progress.readingsLeft}
            onChange={(e) => handleProgressChange('readingsLeft', e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Graded Assessments Left"
            type="number"
            value={progress.assessmentsLeft}
            onChange={(e) => handleProgressChange('assessmentsLeft', e.target.value)}
            margin="normal"
            required
          />
        </Paper>

        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="h6" gutterBottom>Modules</Typography>
          {modules.map((module, moduleIndex) => (
            <Box key={moduleIndex} sx={{ border: '1px solid #e0e0e0', borderRadius: 1, padding: 2, marginBottom: 2 }}>
              <TextField
                fullWidth
                label={`Module ${moduleIndex + 1} Title`}
                value={module.title}
                onChange={(e) => handleModuleChange(moduleIndex, 'title', e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Module Description"
                value={module.description}
                onChange={(e) => handleModuleChange(moduleIndex, 'description', e.target.value)}
                margin="normal"
                multiline
                rows={2}
                required
              />
              {module.content.map((content, contentIndex) => (
                <Box key={contentIndex} sx={{ marginLeft: 2, marginTop: 2 }}>
                  <TextField
                    fullWidth
                    label={`Content ${contentIndex + 1} Title`}
                    value={content.title}
                    onChange={(e) => handleContentChange(moduleIndex, contentIndex, 'title', e.target.value)}
                    margin="normal"
                    required
                  />
                  {content.items.map((item, itemIndex) => (
                    <Box key={itemIndex} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                      <FormControl sx={{ minWidth: 120, marginRight: 1 }}>
                        <InputLabel>Type</InputLabel>
                        <Select
                          value={item.type}
                          onChange={(e) => handleItemChange(moduleIndex, contentIndex, itemIndex, 'type', e.target.value)}
                          label="Type"
                        >
                          <MenuItem value="video">Video</MenuItem>
                          <MenuItem value="reading">Reading</MenuItem>
                          <MenuItem value="plugin">Plugin</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        label="Title"
                        value={item.title}
                        onChange={(e) => handleItemChange(moduleIndex, contentIndex, itemIndex, 'title', e.target.value)}
                        sx={{ flexGrow: 1, marginRight: 1 }}
                      />
                      <TextField
                        label="Duration"
                        value={item.duration}
                        onChange={(e) => handleItemChange(moduleIndex, contentIndex, itemIndex, 'duration', e.target.value)}
                        sx={{ width: 100, marginRight: 1 }}
                      />
                      <IconButton onClick={() => handleRemoveItem(moduleIndex, contentIndex, itemIndex)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  ))}
                  <Button startIcon={<AddIcon />} onClick={() => handleAddItem(moduleIndex, contentIndex)}>
                    Add Item
                  </Button>
                  <Button color="secondary" onClick={() => handleRemoveContent(moduleIndex, contentIndex)}>
                    Remove Content
                  </Button>
                </Box>
              ))}
              <Button startIcon={<AddIcon />} onClick={() => handleAddContent(moduleIndex)}>
                Add Content
              </Button>
              <Button color="secondary" onClick={() => handleRemoveModule(moduleIndex)}>
                Remove Module
              </Button>
            </Box>
          ))}
          <Button startIcon={<AddIcon />} onClick={handleAddModule}>
            Add Module
          </Button>
        </Paper>

        <Box sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary" size="large">
            Upload Course
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CourseUpload;
