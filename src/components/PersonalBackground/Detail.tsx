import { FC, useRef } from 'react';
import LiIcon from './LiIcon';
import { motion } from 'framer-motion';

import { BackgroundDetailType } from '@/data/aboutPageData';

export type DetailType = BackgroundDetailType;

const Detail: FC<DetailType> = ({ title, subTitle, subtitleLink, time, address, description }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
        >
            {/* Cannot pass ref with same prop name with parent */}
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className="capitalize font-bold text-2xl">
                    {title}
                    {subtitleLink && subTitle && (
                        <a href={subtitleLink} target="_blank" className="text-primary capitalize">
                            {' '}
                            @{subTitle}
                        </a>
                    )}
                </h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {address}
                </span>
                <p className="font-medium w-full">{description}</p>
            </motion.div>
        </li>
    );
};

export default Detail;