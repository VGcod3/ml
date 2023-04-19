import {
    Box, Text
} from "@chakra-ui/react";
import { motion, } from "framer-motion";

import useAnimateInView from "../UseAnimateHook";

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
            bgImage="url(/time-bg.png)"
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

export default Time;