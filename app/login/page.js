import React from "react";

import { Box, Typography, Button } from "@mui/material";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "../utils/supabase";

export default function LoginPage() {
  const signIn = async e => {
    "use server";
    const supabase = createClient();
    const origin = headers().get("origin");

    console.log("origin", origin);
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.log("error is", error);
    } else {
      return redirect(data.url);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      minHeight="100vh"
      p={3}
      bgcolor="#f5f5f5"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth={400}
        p={4}
        bgcolor="#ffffff"
        borderRadius={2}
        boxShadow={3}
      >
        <form action={signIn}>
          <Typography variant="h4" component="h1" gutterBottom>
            Sign in with Google
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" paragraph>
            Sign in with your Google account
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" paragraph>
            By signing in you agree to our terms and conditions and privacy policy
          </Typography>

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Sign in with Google
          </Button>
        </form>
      </Box>
    </Box>
  );
}
