import Link from 'next/link';
import { FC } from 'react';

import { ArticleType } from '@/data/articlesPageData';

import AnimatedImage from '../AnimatedImage';

const FeaturedArticleCard: FC<ArticleType> = ({ img, title, time, summary, link }) => {
    return (
        <article className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
            <Link
                href={link}
                target="_blank"
                className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
            >
                {img && <AnimatedImage src={img} alt={title} />}
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg">
                    {title}
                </h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
        </article>
    );
};

export default FeaturedArticleCard;
