import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const useAnimateInView = ({ initial, desired, transition }) => {
    const { ref, inView } = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({
                ...desired,
                transition: transition,
            });
        } else {
            controls.start(initial);
        }
    }, [controls, inView, initial, desired, transition]);

    return { ref, controls };
};

export default useAnimateInView;