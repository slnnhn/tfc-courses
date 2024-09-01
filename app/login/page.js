import React from "react";

import { Box, Typography } from "@mui/material";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "../utils/supabase";

export default function LoginPage() {
  const signIn = async () => {
    "use server";
    const supabase = createClient();
    const origin = headers().get("origin");

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
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
      <form action={signIn}>
        <h1>Sign in with Google</h1>
        <p>Sign in with your Google account</p>
        <p>By signing in you agree to our terms and conditions</p>
        <p>and privacy policy</p>
        <button type={"submit"}>Sign in with Google</button>
      </form>
    </Box>
  );
}
