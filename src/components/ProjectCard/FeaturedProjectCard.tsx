import { ProjectType } from '@/data/projectPageData';
import Link from 'next/link';
import React, { FC } from 'react';
import { GithubIcon } from '../Icons';
import Image from 'next/image';

const FeaturedProjectCard: FC<ProjectType> = ({ type, title, summary, img, link, githubLink }) => {
    return (
        <article className="relative rounded-br-2xl w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light p-12 shadow-2xl">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
            >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                <span className="text-primary font-medium text-xl">{type}</span>

                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
                </Link>

                <p className="my-2 font-medium text-dark">{summary}</p>

                <div className="mt-2 flex items-center">
                    <Link href={githubLink} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>

                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default FeaturedProjectCard;