// app/course-enroll/page.js
import React from 'react';
import { Container, Typography, Button, Paper, Grid, List, ListItem, ListItemText } from '@mui/material';

const CourseEnrollPage = () => {
    return (
        <Container maxWidth="lg" sx={{ marginTop: 4, paddingY: 4 }}>
            <Paper elevation={3} sx={{ padding: 10, marginBottom:3 }}>
                <Typography variant="h4" align="left" gutterBottom>
                    Pedagogy Teaching Course
                </Typography>
                <Typography variant="subtitle1" align="left" gutterBottom>
                    Instructors: Sim Sambath +2 more
                </Typography>
                <Button variant="contained"  color="primary" sx={{ width: 'auto', margin: '0 auto', display: 'block', marginLeft:0 }}>
                    Enroll Here
                </Button>
                <Typography variant="body2" align="left" sx={{ marginTop: 1 }}>
                    345 already enrolled
                </Typography>
                
                
            </Paper>

            <Grid container spacing={3} sx={{ marginY: 3 }}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={1} sx={{ padding: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            What you'll learn
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Develop effective teaching strategies for diverse learners" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Implement assessment techniques to measure student learning" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Create engaging lesson plans that foster critical thinking" />
                            </ListItem>
                        </List>

                        <Typography variant="h5" gutterBottom sx={{ marginTop: 3 }}>
                            Skills you'll gain
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Classroom Management" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Curriculum Development" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Instructional Design" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Educational Technology" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Assessment and Evaluation" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                
            </Grid>
        </Container>
    );
};

export default CourseEnrollPage;