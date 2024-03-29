import { FC, useRef } from 'react';
import LiIcon from './LiIcon';
import { motion } from 'framer-motion';

import { BackgroundDetailType } from '@/data/aboutPageData';

export type DetailType = BackgroundDetailType;

const Detail: FC<DetailType> = ({
    title,
    subTitle,
    subtitleLink,
    time,
    address,
    description,
    teamSize,
    technologies,
    modal,
    scopes,
}) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
        >
            {/* Cannot pass ref with same prop name with parent */}
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="flex flex-col gap-1"
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg pb-4">
                    {title}
                    {subTitle && (
                        <a
                            href={subtitleLink}
                            target="_blank"
                            className="text-primary capitalize dark:text-primaryDark"
                        >
                            {' '}
                            @{subTitle}
                        </a>
                    )}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm pb-4">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm pb-4">{description}</p>
                {teamSize && <p className="font-medium w-full md:text-sm">Team size: {teamSize}</p>}
                {modal && <p className="font-medium w-full md:text-sm">Modal: {modal}</p>}
                {scopes && (
                    <div className="pb-4">
                        <p className="font-medium w-full md:text-sm pb-2">Scopes:</p>
                        <ul className="list-disc list-inside">
                            {scopes.map((scope, index) => (
                                <li key={index} className="pb-2">
                                    <p className="font-medium w-full md:text-sm inline">{scope}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {technologies && (
                    <span className="font-medium w-fit md:text-sm inline-block">
                        Technologies: {technologies}
                    </span>
                )}
            </motion.div>
        </li>
    );
};

export default Detail;
