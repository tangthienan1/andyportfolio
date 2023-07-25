import Link from 'next/link';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

type LogoType = {
    onClick: () => void;
};
const Logo: FC<LogoType> = ({ onClick }) => {
    return (
        <motion.div className="relative flex items-center justify-center mt-2">
            <MotionLink
                href="/"
                className="z-20 w-16 h-16 bg-black text-light flex items-center justify-center rounded-full text-2xl
                font-bold border border-solid border-transparent "
                whileHover={{
                    scale: 1.25,
                    backgroundColor: [
                        '#1b1b1b',
                        '#de8c9d',
                        '#fe2858',
                        '#2af0ea',
                        '#397684',
                        '#2af0ea',
                        '#fe2858',
                        '#de8c9d',
                        '#1b1b1b',
                    ],
                    borderColor: 'white',
                    transition: { duration: 1 },
                }}
                onClick={onClick}
            >
                ND
            </MotionLink>
            <div className="z-10 absolute w-16 h-16 bg-red-700 rounded-full left-1 top-1" />
            <div className="z-10 absolute w-16 h-16 bg-emerald-400 rounded-full bottom-1 right-1" />
        </motion.div>
    );
};

export default Logo;
