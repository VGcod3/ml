import { useEffect } from "react";

import { Flex, Box, IconButton, Image, Text, Link, Button, Icon, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


import myPhoto from '../public/me.png'

import useAnimateInView from "./UseAnimateHook";

const useAnimateInViewNew = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
    } else {
      controls.start({ opacity: 0, x: 50 });
    }
  }, [controls, inView]);

  return { ref, controls };
};

const Header = () => {
  return (
    <Box
      as="header"
      className="flex justify-between items-center p-4 shadow-sm backdrop-filter backdrop-blur-lg  w-full z-20 fixed text-white"
    >
      <div className="flex items-center">
        {/* <img src="/public/sun.png" alt="Logo" className="h-16" /> */ }
        <Text as="h2" className="text-4xl font-extrabold">
          { "</>" }
        </Text>
        <h1 className="mx-5 text-2xl font-bold">RESP4
          <span className='text-green-500'>
            IT
          </span>
        </h1>
      </div>

      <nav className="flex">
        <ul className="flex list-none">
          <li className="mx-4 font-bold">
            <a href="#">Home</a>
          </li>
          <li className="mx-4 font-bold">
            <a href="#">About</a>
          </li>
          <li className="mx-4 font-bold">
            <a href="#">Services</a>
          </li>
          <li className="mx-4 font-bold">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </Box>
  );
};

const FullScreenImage = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  if (inView) {
    controls.start({
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });
  }

  return (
    <Box
      className="flex items-center justify-center h-screen bg-no-repeat bg-center bg-cover"
      bgImage="url(/public/me.png)"
    >
      <motion.div
        ref={ ref }
        initial={ { y: 50 } }
        animate={ controls }
        className="flex justify-between mt-4 gap-12"
      >
        <Link href="https://t.me/v_3_t_o">
          <Button
            className="bg-green-500 hover:shadow-[#598c32] px-9 py-3 rounded text-white font-bold text-3xl shadow-lg hover:shadow-xl active:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 active:translate-y-0"
          >
            Accept
          </Button>
        </Link>
        <Button
          colorScheme="blue"
          size="lg"
          className="backdrop-filter backdrop-blur-lg px-9 py-3 rounded text-white font-bold text-3xl not-allowed shadow-lg transition-shadow duration-300 not-allowed cursor-not-allowed"
          disabled={ true }
        >
          Reject
        </Button>
      </motion.div>
    </Box>
  );
};

const Motivation = () => {
  const { ref: ref1, controls: controls1 } = useAnimateInView();
  const { ref: ref2, controls: controls2 } = useAnimateInView();
  const { ref: ref3, controls: controls3 } = useAnimateInView();
  const { ref: ref4, controls: controls4 } = useAnimateInView();

  return (
    <Box className="px-10 h-screen flex flex-col justify-center gap-12 backdrop-blur-md">
      <motion.h2
        ref={ ref1 }
        animate={ controls1 }
        initial={ { opacity: 0, y: 50 } }
        transition={ { duration: 1, ease: "easeOut" } }
        className="text-4xl font-bold mb-4 text-green-500"
      >
        Чому я?
      </motion.h2>
      <motion.p
        ref={ ref2 }
        animate={ controls2 }
        initial={ { opacity: 0, y: 50 } }
        transition={ { duration: 1, ease: "easeOut", delay: 0.3 } }
        className="text-lg mb-4 font-mono"
      >
        Я завжди мріяв про кар'єру у сфері програмування. Ця галузь завжди цікавила мене, і я вірю, що маю навички та знання, щоб стати успішним програмістом.
      </motion.p>
      <motion.h2
        ref={ ref3 }
        animate={ controls3 }
        initial={ { opacity: 0, y: 50 } }
        transition={ { duration: 1, ease: "easeOut", delay: 0.6 } }
        className="text-4xl font-bold mb-4 text-green-500"
      >
        В чому моя мотивація?
      </motion.h2>
      <motion.p
        ref={ ref4 }
        animate={ controls4 }
        initial={ { opacity: 0, y: 50 } }
        transition={ { duration: 1, ease: "easeOut", delay: 0.9 } }
        className="text-lg mb-4 font-mono"
      >
        Моя мотивація полягає в тому, щоб використовувати свої знання та навички, щоб створювати нові та інноваційні рішення, які допоможуть поліпшити життя людей. Я хочу бути частиною команди, яка змінює світ на краще, і я вірю, що програмування - це те, що допоможе мені це зробити.
      </motion.p>
    </Box>
  );
};

const Time = () => {
  const { ref: ref1, controls: controls1 } = useAnimateInView();
  const { ref: ref2, controls: controls2 } = useAnimateInView();

  return (
    <Box
      className="flex items-center justify-center h-screen bg-no-repeat bg-center bg-cover"
      bgImage="url(/public/time-bg.png)"
    >
      <motion.div
        initial={ { opacity: 0, y: 50 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { duration: 1, ease: "easeOut" } }
        className="flex flex-col items-center justify-center text-center"
      >
        <Text as="h2" className="text-4xl font-bold mb-6 text-lime-400">
          Зайнятість
        </Text>
        <motion.div
          ref={ ref1 }
          animate={ controls1 }
          initial={ { opacity: 0, y: 50 } }
          transition={ { duration: 1, ease: "easeOut", delay: 0.3 } }
        >
          <Text className="text-lg mb-4 text-white p-11 m-6 rounded-lg bg-gray-500 backdrop-filter backdrop-blur-md bg-opacity-70">
            Я працюю повний робочий день з понеділка по п'ятницю, але вільний
            час я знаходжу на навчання в онлайн курсах та самоосвіті. Я знаю,
            що програмування - це невичерпний джерело знань, і я завжди стараюся
            покращувати свої навички та розширювати свої знання.
          </Text>
        </motion.div>
        <motion.div
          ref={ ref2 }
          animate={ controls2 }
          initial={ { opacity: 0, y: 50 } }
          transition={ { duration: 1, ease: "easeOut", delay: 0.6 } }
        >
          <Text className="text-lg mb-4 text-white p-11 m-6 rounded-lg bg-gray-500 backdrop-filter backdrop-blur-md bg-opacity-70">
            Я також маю певний час в тиждень на додаткові зустрічі та зв'язок з
            командою. Я готовий виділити час для проекту, адже я вірю, що він має
            великий потенціал і може позитивно вплинути на життя багатьох людей.
          </Text>
        </motion.div>
      </motion.div>
    </Box>
  );
};

const AboutMe = () => {
  const emailAnimation = useAnimateInViewNew();
  const githubAnimation = useAnimateInViewNew();
  const linkedinAnimation = useAnimateInViewNew();

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 p-8 h-screen justify-center align-middle gap-20">
      <img
        src={ myPhoto }
        alt="My photo"
        className="h-64 w-64 rounded-full object-cover md:mr-8 self-center"
        ref={ linkedinAnimation.ref }
        animate={ linkedinAnimation.controls }
        initial={ { opacity: 0, x: -50 } }
      />
      <div className="flex flex-col justify-center text-white">
        <h2 className="text-4xl font-bold mb-4" ref={ emailAnimation.ref } animate={ emailAnimation.controls } initial={ { opacity: 0, x: 50 } }>
          Viktor Gavryliuk
        </h2>
        <p className="text-xl mb-8" ref={ githubAnimation.ref } animate={ githubAnimation.controls } initial={ { opacity: 0, x: 50 } }>
          Hi, I'm a web developer based in Lviv. I specialize in building web
          applications using React and Node.js.
        </p>
        <div className="flex flex-row items-center mb-4">
          <FaEnvelope className="text-gray-300 mr-2" />
          <a
            href="mailto:your.email@example.com"
            className="text-gray-400 hover:text-gray-300"
          >
            your.email@example.com
          </a>
        </div>
        <div className="flex flex-row items-center mb-4">
          <FaGithub className="text-gray-300 mr-2" />
          <a
            href="https://github.com/yourusername"
            className="text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yourusername
          </a>
        </div>
        <div className="flex flex-row items-center mb-4">
          <FaLinkedin className="text-gray-300 hover:text-gray-300 mr-2" />
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-gray-400 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourusername
          </a>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <Box as="footer" className="flex items-center justify-center h-16 bg-green-500 text-white">
      <p className="text-sm">&copy; 2023 My Website</p>
    </Box>
  );
};

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
