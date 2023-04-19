import { motion, } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import myPhoto from '/me.jpg';

import useAnimateInView from "../UseAnimateHook";

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

export default AboutMe;