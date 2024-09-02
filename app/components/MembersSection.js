import React, { useState } from 'react';
import { Typography, Button, Avatar, Box } from '@mui/material';

const categories = ['English', 'Math', 'Social Studies', 'Khmer Literature', 'Science'];

const MembersSection = () => {
  const [activeCategory, setActiveCategory] = useState('Explore');

  const EnglishDepartment = [
    { id: 1, name: 'J', avatar: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Member 2', avatar: '/path/to/avatar2.jpg' },
    // Add more members as needed
  ];

  const SocialStudiesDepartment = [
    { id: 1, name: 'Banking Member 1', avatar: '/path/to/banking1.jpg' },
    { id: 2, name: 'Banking Member 2', avatar: '/path/to/banking2.jpg' },
    // Add more banking members as needed
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Members</Typography>
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'contained' : 'outlined'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </Box>
      
      <Typography variant="h6" gutterBottom>
        English Department | {EnglishDepartment.length}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
        {EnglishDepartment.map((member) => (
          <Avatar key={member.id} alt={member.name} src={member.avatar} sx={{ width: 56, height: 56 }} />
        ))}
      </Box>
      
      <Typography variant="h6" gutterBottom>
        Social Studies Department | {SocialStudiesDepartment.length}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {SocialStudiesDepartment.map((member) => (
          <Avatar key={member.id} alt={member.name} src={member.avatar} sx={{ width: 56, height: 56 }} />
        ))}
      </Box>
    </Box>
  );
};

export default MembersSection;
