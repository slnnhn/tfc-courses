"use client";

import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterLink = styled(Link)(({ theme }) => ({
  display: "block",
  marginBottom: theme.spacing(1),
}));

const FooterSection = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

export default function MainFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme => (theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800]),
        p: 2,
        mt: 'auto', // Changed from marginTop to mt
        width: "100%",
        bottom: 0,
        left: 0,
        position: "static",

      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} justifyContent="space-between">
          <FooterSection item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Teach For Cambodia is dedicated to providing quality education and opportunities for all.
            </Typography>
          </FooterSection>
          <FooterSection item xs={12} sm={4}>
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
          </FooterSection>
          <FooterSection item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <FooterLink href="https://www.facebook.com/" color="inherit">
              Facebook
            </FooterLink>
            <FooterLink href="https://www.instagram.com/" color="inherit">
              Instagram
            </FooterLink>
            <FooterLink href="https://www.twitter.com/" color="inherit">
              Twitter
            </FooterLink>
          </FooterSection>
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
