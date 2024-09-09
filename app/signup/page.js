"use client";
import React, { useState } from "react";

import { Box, Typography, Button, Divider, InputLabel, TextField } from "@mui/material";

import { createClient } from "../utils/supabase/client";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const route = useRouter();
  const loginWithGoogle = async () => {
    try {
      const response = await fetch("/api/login", { method: "POST" });
      const data = await response.json();

      if (response.ok) {
        window.location.href = data.url; // Redirect to Google OAuth URL
      } else {
        console.error("Login error:", data.error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const signUpWithEmail = async (email, password, firstName, lastName) => {
    const supabase = createClient();
    const { data: newUser, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstName,
          lastName,
        },
      },
    });
    // if (error) {
    //   console.error("Error signing up:", error.message);
    //   // if (error.message === "A user with this email already exists.") {
    //   //   alert("A user with this email already exists. try logging in");
    //   //   route.push("/login");
    //   // }
    // }
    if (newUser) {
      const { data, error } = await supabase.from("users").insert([
        {
          id: newUser.user.id,
          firstName,
          lastName,
          created_at: new Date(),
          email: newUser.user.email,
          role: "Guest",
        },
      ]);

      if (error) {
        console.error("Error creating user:", error.message);
      }

      route.push("/dashboard");
    }
  };

  function GithubIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
  }
  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password, firstName, lastName } = formData;
    await signUpWithEmail(email, password, firstName, lastName);
  };

  const handleInputChange = e => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
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
        <Box textAlign="center" maxWidth="md" spacing={6}>
          <Box mb={2}>
            <Typography variant="h3" component="h3" fontWeight="bold">
              Welcome!
            </Typography>
            <Typography color="textSecondary">Sign up to your account to continue</Typography>
          </Box>

          <Box spacing={4}>
            <form action={loginWithGoogle}>
              <Button variant="outlined" fullWidth startIcon={<GithubIcon />} type="submit">
                Sign up with Google
              </Button>
            </form>
            <Box position="relative" my={2}>
              <Divider />
              <Box
                display="flex"
                justifyContent="center"
                position="absolute"
                top="-12px"
                left="50%"
                bgcolor="white"
                px={1}
              >
                <Typography variant="caption" color="textSecondary">
                  Or continue with
                </Typography>
              </Box>
            </Box>

            <form onSubmit={handleSubmit}>
              <Box mb={2}>
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <TextField
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  required
                  fullWidth
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <TextField
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  required
                  fullWidth
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <TextField
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  fullWidth
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <TextField
                  id="password"
                  type="password"
                  required
                  fullWidth
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Box>
              <Button type="submit" variant="contained" fullWidth>
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// return (
//   <Box
//     display="flex"
//     flexDirection="column"
//     alignItems="center"
//     justifyContent="start"
//     minHeight="100vh"
//     p={3}
//     bgcolor="#f5f5f5"
//   >
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       maxWidth={400}
//       p={4}
//       bgcolor="#ffffff"
//       borderRadius={2}
//       boxShadow={3}
//     >
//       <Box textAlign="center" maxWidth="md" spacing={6}>
//         <Box mb={2}>
//           <Typography variant="h3" component="h3" fontWeight="bold">
//             Welcome back
//           </Typography>
//           <Typography color="textSecondary">Sign in to your account to continue</Typography>
//         </Box>

//         <Box spacing={4}>
//           <form action={loginWithGoogle}>
//             {/* <Button variant="outlined" fullWidth startIcon={<GithubIcon />}> */}
//             Sign in with Google
//             {/* </Button> */}
//           </form>
//           <Box position="relative" my={2}>
//             <Divider />
//             <Box
//               display="flex"
//               justifyContent="center"
//               position="absolute"
//               top="-12px"
//               left="50%"
//               bgcolor="white"
//               px={1}
//             >
//               <Typography variant="caption" color="textSecondary">
//                 Or continue with
//               </Typography>
//             </Box>
//           </Box>

//           <form action={loginWithEmail}>
//             <Box mb={2}>
//               <InputLabel htmlFor="email">Email</InputLabel>
//               <TextField id="email" type="email" placeholder="m@example.com" required fullWidth />
//             </Box>
//             <Box mb={2}>
//               <InputLabel htmlFor="password">Password</InputLabel>
//               <TextField id="password" type="password" required fullWidth />
//             </Box>
//             <Button type="submit" variant="contained" fullWidth>
//               Sign in
//             </Button>
//           </form>
//         </Box>
//       </Box>
//     </Box>
//   </Box>
// );
// }
