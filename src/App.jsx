import {
  Box
} from "@chakra-ui/react";

import Header from './components/Header';
import FullScreenImage from './components/Screen';
import AboutMe from './components/About';
import Motivation from './components/Motivation';
import Time from './components/Time';
import Footer from './components/Footer';


const MotivationLetter = () => {
  return (
    <Box className="motivation-letter">
      <Header />
      <FullScreenImage />
      <AboutMe />
      <Motivation />
      <Time />
      <Footer />
    </Box>
  );
};

export default MotivationLetter;
