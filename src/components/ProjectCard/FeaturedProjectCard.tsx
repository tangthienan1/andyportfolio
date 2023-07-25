import Link from 'next/link';
import { FC } from 'react';

import { ProjectType } from '@/data/projectPageData';

import AnimatedImage from '../AnimatedImage';
import { GithubIcon } from '../Icons';
import ButtonAsLink from '../ButtonAsLink';

const FeaturedProjectCard: FC<ProjectType> = ({ type, title, summary, img, link, githubLink }) => {
    return (
        <article
            className="relative rounded-br-2xl w-full flex items-center justify-between rounded-3xl border border-solid
        border-dark bg-light p-12 shadow-2xl dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
        >
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            " />

            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <AnimatedImage src={img} alt={title} />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                    {type}
                </span>

                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
                        {title}
                    </h2>
                </Link>

                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>

                <div className="mt-2 flex items-center gap-3">
                    <Link href={githubLink} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>

                    <ButtonAsLink href={link} content={'Visit Project'} className='sm:px-4 sm:text-base'/>
                </div>
            </div>
        </article>
    );
};

export default FeaturedProjectCard;
