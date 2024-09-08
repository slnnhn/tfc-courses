import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import { Box } from "@mui/material";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teach For Cambodia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <MainHeader />
          <Box component="main" sx={{ flexGrow: 1 }}>
            {children}
          </Box>
          <MainFooter />
        </Box>
      </body>
    </html>
  );
}
