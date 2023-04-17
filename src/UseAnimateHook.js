import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const useAnimateInView = () => {
    const { ref, inView } = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
            });
        } else {
            controls.start({ opacity: 0, y: 50 });
        }
    }, [controls, inView]);

    return { ref, controls };
};

export default useAnimateInView;