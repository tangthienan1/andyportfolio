import { motion, useScroll } from 'framer-motion';
import { FC, useRef } from 'react';
import Detail, { DetailType } from './Detail';

type PersonalBackgroundType = {
    title: string;
    details: DetailType[];
};
const PersonalBackground: FC<PersonalBackgroundType> = ({ title, details }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">{title}</h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    "
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
                    {details.map((detail, index) => (
                        <Detail {...{ ...detail }} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PersonalBackground;
