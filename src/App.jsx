import { useState } from "react";
import {
  Box, Text, Link, Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { motion, } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars } from 'react-icons/fa';


import myPhoto from '/me.jpg'

import useAnimateInView from "./UseAnimateHook";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      as="header"
      className="flex justify-between items-center p-4 shadow-sm backdrop-filter backdrop-blur-lg  w-full z-20 fixed text-white"
    >
      <div className="flex items-center">
        <Text as="h2" className="text-4xl font-extrabold">
          { "</>" }
        </Text>
        <h1 className="mx-5 text-2xl font-bold">RESP4
          <span className='text-green-500'>
            IT
          </span>
        </h1>
      </div>

      <nav className="hidden md:flex">
        <ul className="flex list-none">
          <li className="mx-4 font-bold">
            <a href="#about_me">Про мене</a>
          </li>
          <li className="mx-4 font-bold">
            <a href="#ejc">Чому ІЯК?</a>
          </li>
          <li className="mx-4 font-bold">
            <a href="#why_me">Чому я?</a>
          </li>
          <li className="mx-4 font-bold">
            <a href="#time">Чааас</a>
          </li>
        </ul>
      </nav>

      <div className={ `md:hidden ${isOpen ? 'mr-[16px]' : ''}` }>
        <Button onClick={ toggleMenu } variant="ghost">
          <FaBars size={ 24 } />
        </Button>
      </div>

      <Drawer isOpen={ isOpen } onClose={ toggleMenu } >
        <DrawerOverlay />
        <DrawerContent className="mt-[72px] pt-6 bg-green-500">
          {/* <DrawerCloseButton /> */ }

          <DrawerBody >
            <ul className="flex flex-col items-center list-none">
              <li className="my-4 font-bold">
                <a href="#about_me" onClick={ toggleMenu }>Про мене</a>
              </li>
              <li className="my-4 font-bold">
                <a href="#ejc" onClick={ toggleMenu }>Чому ІЯК?</a>
              </li>
              <li className="my-4 font-bold">
                <a href="#why_me" onClick={ toggleMenu }>Чому я?</a>
              </li>
              <li className="my-4 font-bold">
                <a href="#time" onClick={ toggleMenu }>Чааас</a>
              </li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Box >
  );
};

const FullScreenImage = () => {
  const { ref, controls } = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });

  return (
    <Box
      className="flex items-center justify-center h-screen bg-no-repeat bg-center bg-cover"
      bgImage="url(./src/img/bg.png)"
    >
      <motion.div
        ref={ ref }
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

const Start = () => {
  const title1Animation = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const response1Animation = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const title2Animation = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const response2Animation = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const title3Animation = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const response3Animation = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const title4Animation = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const response4Animation = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });

  return (
    <Box className="px-10 min-h-screen flex flex-col my-11 justify-center gap-12 backdrop-blur-md" id="ejc">
      <motion.h2
        ref={ title1Animation.ref }
        animate={ title1Animation.controls }
        className="text-4xl font-bold mb-4 text-indigo-500"
      >
        Початок, певно
      </motion.h2>
      <motion.p
        ref={ response1Animation.ref }
        animate={ response1Animation.controls }
        className="text-lg mb-4"
      >
        Я довго думав як мочати МЛ, бо перше враження це важливо. І придумав я мотивацію, бо все на світі можна навчитися робити і зробити. Було би бажання. Отже, МОТИВАЦІЯ ЗАРІШАЄ.
      </motion.p>
      <motion.h2
        ref={ title2Animation.ref }
        animate={ title2Animation.controls }
        className="text-4xl font-bold mb-4 text-blue-500"
      >
        Чому ІЯК?
      </motion.h2>
      <motion.p
        ref={ response2Animation.ref }
        animate={ response2Animation.controls }
        className="text-lg mb-4"
      >
        Хах, ото прикол. Як кажуть мудрі люди, і база знань, ІЯК - найбільший проект, який принесе фінансування у левову ччаску інших проектів. Отже, до цього і я можу прикласти руку. І я постараюся виконати свої обов’язки якнайкраще, внести певні ідеї в організації проекту в цілому, й поза ІТ. Бо кортім - це сім’я, конекшн який зв’язувати людей, що трудилися разом ще довго. Крім того, участь в кортімі дасть більше інтегрує мене в організацію, дасть хороший авторитет серед Besties and Bestiemen♠️.
      </motion.p>
      <motion.h2
        ref={ title4Animation.ref }
        animate={ title4Animation.controls }
        className="text-4xl font-bold mb-4 text-red-500"
      >
        Нащо мені БЕСТ?
      </motion.h2>
      <motion.p
        ref={ response4Animation.ref }
        animate={ response4Animation.controls }
        className="text-lg mb-4"
      >
        Ще з самого початку сумніву не було, що BEST це те, частиною чого я хочу бути. Бо це про друзів, про розвиток себе і навколишніх, відпочинок і перспективу на майбутнє. Як я часто люблю казати, баланс для слабаків. Work hard, party harder! Більш конкретно, то тут я зможу реалізуватися в усіх бажаних сферах і ОДРАЗУ. Я про програмування, роботу в команді, волонтерство, лідерство і спілкування.
      </motion.p >
      <motion.h2
        ref={ title3Animation.ref }
        animate={ title3Animation.controls }
        className="text-4xl font-bold mb-4 text-orange-500"
      >
        Чому саме цю посаду?
      </motion.h2>
      <motion.div
        ref={ response3Animation.ref }
        animate={ response3Animation.controls }
        className="text-lg mb-4 flex flex-col gap-4"
      >
        <p>
          ІТ? Я респонсібл, відповідаю…
        </p>
        <p>
          Бо ще з 1 січня якогось там року від дня народження Бандери я цікавився чимось точним, конкретним.

        </p>
        <p>
          Існує лише 0 і 1. Все інше - відтінки.
        </p>
        <p>
          Пишу код відколи я - це той самий Віктор, яким я себе усвідомлено знаю, з 14 років. Відтоді я займаюся фронтом🪖(отже, шишок і руку трохи вже набив). Це значить, що на цій посаді я зможу займатися тим, що вмію, і що дуже люблю. Також кльовим є те, що тут робота нешаблонна, тож за все відповідальний лише я. Основне, аби працювало, як має бути, і МО, команда і кінцеві користувачі були задоволені. Я про вибір технологій, функціонал, графік роботи і про підхід в цілому.
        </p>
      </motion.div >
    </Box >
  )
}

const Motivation = () => {
  const { ref: ref1, controls: controls1 } = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const { ref: ref2, controls: controls2 } = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const { ref: ref3, controls: controls3 } = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const { ref: ref4, controls: controls4 } = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });

  return (
    <Box className="px-10 my-12 min-h-screen flex flex-col justify-center gap-12 backdrop-blur-md" id="why_me">
      <motion.h2
        ref={ ref1 }
        animate={ controls1 }
        className="text-4xl font-bold mb-4 text-green-500"
      >
        Чому я?
      </motion.h2>
      <motion.div
        ref={ ref2 }
        animate={ controls2 }
        transition={ { delay: 0.3 } }
        className="text-lg mb-4 flex flex-col gap-4"
      >
        <p>
          Бо як я вже казав, усьому віддаю свого себе. Але й мультизадачність ніхто не відміняв. Це означає, що робота буде виконана настільки добре, як я тільки зможу.
        </p>
        <p>
          Можу впевнено про це говорити, бо в мене є вже певний досвід у роботі. З командою розробки пет-проектів виробилася звичка ділитися досвідом на коротких зідзвонах, працювати за scrum методикою, трекати задачі в trello або ж notion, пушити код на git, ну і ефективно проводити ретроспективу зробленого й планувати роботу на наступний спринт (в тому числі й комунікація з дизайнером і фронтенд командою).
        </p>

        <p>
          Серед хард скілів - розробка клієтської частини  web-застосунків (React, TS, Chakra UI👌, Tailwind, RTK), ще трохи пекельної кухні (Express, MongoDB, Next), ну і робота з API Телеграму (пробував писати своїх ботів, взяємодіяти з цим API з web-клієнту), поки на node js.
        </p>
      </motion.div>
      <motion.h2
        ref={ ref3 }
        animate={ controls3 }
        transition={ { delay: 0.6 } }
        className="text-4xl font-bold mb-4 text-yellow-500"
      >
        І чим то я буду займатися?
      </motion.h2>
      <motion.div
        ref={ ref4 }
        animate={ controls4 }
        transition={ { delay: 0.9 } }
        className="text-lg mb-4 flex flex-col gap-4"
      >
        <p>
          Перш за все, (за дедлайном) - розробка брошури. Вже знаю що це, активно займався таким на coding night 1.
        </p>
        <p>
          Далі - розробка сайту проекту. Тут все просто і зрозуміло, як нуль і один. Швидше за все, з інтерактивною картою проекту і, звичайно, pixel-perfect, з АНІМЕйшином.
        </p>
        <p>
          Щодо ботів в ТГ, певний досвід і розуміння є. Тому перший етап роботи команди (поки контент і дизайн не готові) теж буде плідним для мене. Планую навчитися робити все те ж, але на python (c-подібні мови.. вони ж такі різні). Дякую Ярославу)))
        </p>
        <p>
          Паралельно (привіт, мультизадачність) - тг інфраструктура. Це взаємодія компаній і учасників
        </p>
        <p>
          Крім того, спробую організувати ARG (щось типу cicada 3301) в онлайні і аналог #WienerGame в офлайні. З блекджеком, qr-кодами, тасками і винагородами. Це непогано так підніме актив і допоможе в PR-і.
        </p>
      </motion.div>
    </Box>
  );
};

const Time = () => {
  const { ref: ref1, controls: controls1 } = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const { ref: ref2, controls: controls2 } = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });

  return (
    <Box
      className="flex items-center justify-center py-12 min-h-screen bg-no-repeat bg-center bg-cover"
      bgImage="url(./src/img/time-bg.png)"
      id="time"
    >
      <motion.div
        initial={ { opacity: 0, y: 50 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { duration: 1, ease: "easeOut" } }
        className="flex flex-col items-center justify-center text-center"
      >
        <Text as="h2" className="text-4xl font-bold mb-6 text-lime-400">
          Де час Лєбовски? 🕝
        </Text>
        <motion.div
          ref={ ref1 }
          animate={ controls1 }
          initial={ { opacity: 0, y: 50 } }
          transition={ { duration: 1, ease: "easeOut", delay: 0.3 } }
        >
          <Text className="text-lg mb-4 text-white p-11 m-6 rounded-lg bg-gray-500 backdrop-filter backdrop-blur-md bg-opacity-70">
            Я дуже багато чим люблю займатися. Але все займає час, який треба вміти мудро розприділяти. ПРІОРИТЕТИ. Рішення одне, але, на мою думку правильне. Не злиюся в потрібний момент ні з проекту, ні з бесту. Чому? Бо тут є все, чого мені треба, і чого я хочу, тому я можу із спокійною душею ставити завдання IT responsible на перше місце. Коду мені тут не бракуватиме, елементу волонтерства достатньо (лиш подумаю скільки ж то учасників користуватиметься довгий час до, під час, і після самого проекту інфрастуктурою, яка буде зроблена), можна забагати ще досвід роботи в команді, комунікації з VP4IT, наповнити ще CV і портфоліо і знову ж, це певний челендж. Треба реалізувати себе, перелізти певну стіну (привіт, Антон) і рухати сюжет далі.
          </Text>
        </motion.div>
        <motion.div
          ref={ ref2 }
          animate={ controls2 }
          initial={ { opacity: 0, y: 50 } }
          transition={ { duration: 1, ease: "easeOut", delay: 0.6 } }
        >
          <Text className="text-lg mb-4 text-white p-11 m-6 rounded-lg bg-gray-500 backdrop-filter backdrop-blur-md bg-opacity-70">
            Щодо того, як часто я у Львові, то це 90% часу. Раз на 2-3 тижні їду до писанкової Коломиї аби батьки не забували як я виглядаю, і зустрітися з старими друзями (мафію покинути не вдалося ще нікому🎩).
          </Text>
        </motion.div>
      </motion.div>
    </Box>
  );
};

const AboutMe = () => {
  const emailAnimation = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const githubAnimation = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const linkedinAnimation = useAnimateInView({
    initial: { opacity: 0, y: 50 },
    desired: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const photoAnimation = useAnimateInView({
    initial: { opacity: 0, x: -50 },
    desired: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });
  const titleAnimation = useAnimateInView({
    initial: { opacity: 0, x: 50 },
    desired: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
  });

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 p-8 h-screen justify-center align-middle gap-20 overflow-hidden" id="about_me">
      <motion.img
        src={ myPhoto }
        alt="My photo"
        className="h-64 w-64 rounded-full object-containe md:mr-8 self-center"
        ref={ photoAnimation.ref }
        animate={ photoAnimation.controls }
      />
      <div className="flex flex-col justify-center text-white">
        <motion.h2
          className="text-4xl font-bold mb-4"
          ref={ titleAnimation.ref }
          animate={ titleAnimation.controls }
        >
          Viktor Gavryliuk, (c)АСУ, 1 курс
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          ref={ titleAnimation.ref }
          animate={ titleAnimation.controls }        >
          Віктор Сокіабле, Степан Лютий, Нестор Кодописець… інколи дон мафії,
          тру дебатер, кодер (як би ви там з фронтендерів не рофлили), але
          найголовніше - BESTIE і МОНГОООЛ.
        </motion.p>
        <motion.div
          className="flex flex-row items-center mb-4"
          ref={ emailAnimation.ref }
          animate={ emailAnimation.controls }
        >
          <FaEnvelope className="text-gray-300 mr-2" />
          <a
            href="mailto:vktrgavryliuk@gmail.com"
            className="text-gray-400 hover:text-gray-300"
          >
            vktrgavryliuk@gmail.com
          </a>
        </motion.div>

        <motion.div
          className="flex flex-row items-center mb-4"
          ref={ githubAnimation.ref }
          animate={ githubAnimation.controls }
        >
          <FaGithub className="text-gray-300 mr-2" />
          <a
            href="https://github.com/VGcod3"
            className="text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/VGcod3
          </a>
        </motion.div>
        <motion.div
          className="flex flex-row items-center mb-4"
          ref={ linkedinAnimation.ref }
          animate={ linkedinAnimation.controls }
        >
          <FaLinkedin className="text-gray-300 hover:text-gray-300 mr-2" />
          <div>
            <a
              href="https://www.linkedin.com/in/viktor-gavryliuk-48678b205/"
              className="text-gray-400 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/viktor-gavryliuk-48678b205
            </a>
          </div>
        </motion.div>
      </div>
    </div >
  )
}

const Footer = () => {
  return (
    <footer className="flex flex-col p-12 bg-green-500 text-white">
      <div className=" w-100 flex justify-evenly">
        <div className="text-sm flex flex-col gap-4">
          <p className="flex flex-wrap gap-3">
            Особлива подяка{ ' ' }
            <span>
              <a href="https://t.me/marrrkiv">@marrrkiv</a>
            </span>{ ' ' }
            <span>
              <a href="https://t.me/popavs17">@popavs17</a>
            </span>{ ' ' }
            <span>
              <a href="https://t.me/Yaroslav_Horodyskyi"> @Yaroslav_Horodyskyi </a>
            </span>
          </p>
          <p>
            Придумано, зроблено і задизанено Віктором не без допомоги нейронки
          </p>

        </div>
        <div className="text-sm">
          <p>Накоджено:</p>
          <p>Chakra UI, Tailwind, React, Framer</p>
        </div>
      </div>
      <div className="text-center mt-7">
        &copy; 2023 Мої права точно захищено
      </div>
    </footer>
  );
};

const MotivationLetter = () => {
  return (
    <Box className="motivation-letter">
      <Header />
      <FullScreenImage />
      <AboutMe />
      <Start />
      <Motivation />
      <Time />
      <Footer />

    </Box>
  );
};

export default MotivationLetter;
