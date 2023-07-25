import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { ArticleType } from '@/data/articlesPageData';

import MovingImgLink from '../MovingImgLink';

const SimpleArticleCard: FC<ArticleType> = ({ img, title, date, link }) => {
    return (
        <motion.article
            initial={{ y: 300 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            viewport={{ once: true }}
            className="relative w-full p-4 py-6 my-4 rounded-xl flex
        items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:text-light dark:bg-dark
        sm:flex-col 
        "
        >
            <MovingImgLink {...{ img, title, link }} />
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date.toDateString()}</span>
        </motion.article>
    );
};

export default SimpleArticleCard;
