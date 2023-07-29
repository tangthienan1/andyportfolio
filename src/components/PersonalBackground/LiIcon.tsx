import React, { FC, RefObject } from 'react';
import { motion, useScroll } from 'framer-motion';

type LilIconType = {
    reference: RefObject<HTMLElement>;
};

const LiIcon: FC<LilIconType> = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        layoutEffect: false,
        target: reference,
        offset: ['center end', 'center center'],
    });
    return (
        <figure className="absolute left-0 stroke-dark dark:stroke-light">
            <svg className='-rotate-90' width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark" />
                <motion.circle
                    style={{ pathLength: scrollYProgress }}
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-[5px] fill-light dark:fill-dark"
                />
                <circle cx="75" cy="50" r="10" className="stroke-1 fill-primary dark:fill-primaryDark" />
            </svg>
        </figure>
    );
};

export default LiIcon;
