import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ImageSlider = () => {
  const slides = [
    {
      image: "/img1.jpg",
      title: "Teach For Cambodia",
      description:
        "One day, all children in Cambodia will attain an excellent education.",
    },
    {
      image: "/img2.jpg",
      title: "Our mission",
      description: "Enlist and develop the nation's most promising future leaders to expand educational opportunities for children all across Cambodia.",
    },
    {
      image: "/img3.jpg",
      title: "Who we are",
      description: "We are homegrown, independent non-profit organiztion partnered with the Ministry of Education, Youth and Sport of Cambodia to increase educational opportunities in the country.",
    },
    {
      image: "/img4.jpg",
      title: "Get Involved",
      description: "Help us transform the lives and opportunities in Cambodia"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.7)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <Typography variant="h3" gutterBottom>
          {slides[currentSlide].title}
        </Typography>
        <Typography variant="h6">{slides[currentSlide].description}</Typography>
        {/* <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginRight: "10px" }}
          >
            Learn More
          </Button>
          <Button variant="outlined" color="secondary" size="large">
            Apply Now
          </Button>
        </Box> */}
      </Box>

      <Button
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          minWidth: "50px",
        }}
      >
        <ArrowBackIos />
      </Button>

      <Button
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          minWidth: "50px",
        }}
      >
        <ArrowForwardIos />
      </Button>
    </Box>
  );
};

export default ImageSlider;
