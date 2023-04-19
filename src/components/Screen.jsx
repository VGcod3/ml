import {
    Box,
    Button, Link
} from "@chakra-ui/react";
import { motion } from "framer-motion";


import useAnimateInView from "../UseAnimateHook";

const Screen = () => {
    const { ref, controls } = useAnimateInView({
        initial: { opacity: 0, y: 50 },
        desired: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
    });

    return (
        <Box
            className="flex items-center justify-center h-screen bg-no-repeat bg-center bg-cover"
            bgImage="url(/bg.png)"
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

export default Screen;