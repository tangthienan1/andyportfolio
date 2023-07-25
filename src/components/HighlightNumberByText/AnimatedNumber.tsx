import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { FC, RefObject, useEffect, useRef } from 'react';

type AnimatedNumberType = {
    value: number;
};

const AnimatedNumber: FC<AnimatedNumberType> = ({ value }) => {
    const ref: RefObject<HTMLSpanElement> = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on('change', (latestValue) => {
            if (ref.current && latestValue.toFixed(0) <= value) {
                ref.current.textContent = latestValue.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref} />;
};

export default AnimatedNumber;
