"use client";

import { Box, Container, Grid, Typography, Link } from "@mui/material";

export default function MainFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme => (theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800]),
        p: 2,
        marginTop: "auto",
        width: "100%",
        bottom: 0,
        left: 0,
        position: "absolute",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Teach For Cambodia is dedicated to providing quality education and opportunities for all.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Education Street, Phnom Penh, Cambodia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@teachforcambodia.org
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +855 23 456 789
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              Facebook
            </Link>
            <br />
            <Link href="https://www.instagram.com/" color="inherit">
              Instagram
            </Link>
            <br />
            <Link href="https://www.twitter.com/" color="inherit">
              Twitter
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://teachforcambodia.org/">
              Teach For Cambodia
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
