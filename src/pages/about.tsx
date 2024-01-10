/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import AnimatedText from '@/components/AnimatedText';
import CustomHead from '@/components/CustomHead';
import HighlightNumberByText from '@/components/HighlightNumberByText';
import Layout from '@/components/Layout';
import PersonalBackground from '@/components/PersonalBackground';
import Skills from '@/components/Skills';

import {
    aboutTitle,
    biographyContentsData,
    educations,
    experiences,
    highlightContentsData,
} from '@/data/aboutPageData';

import profilePic from '../../public/images/profile/developer-pic-2.png';

const About = () => {
    return (
        <>
            <CustomHead title="About Page" content="any" />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout>
                    <AnimatedText
                        text={aboutTitle}
                        className="text-center mb-32 lg:mb-16 md:mb-12 sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biography
                            </h2>
                            {biographyContentsData.map((content, index) => (
                                <p className="font-medium" key={index}>
                                    {content}
                                </p>
                            ))}
                        </div>

                        <div
                            className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
                        dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
                        >
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={profilePic}
                                alt="Andy"
                                className="w-ful h-auto rounded-2xl m-auto"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            />
                        </div>

                        <div
                            className="col-span-2 flex flex-col items-end justify-between
                        xl:col-span-8 xl:flex-row xl:items-center md:order-3"
                        >
                            {highlightContentsData.map((highlightContent, index) => (
                                <HighlightNumberByText {...highlightContent} key={index} />
                            ))}
                        </div>
                    </div>
                    <Skills />
                    <PersonalBackground title="Experience" details={experiences} />
                    <PersonalBackground title="Education" details={educations} />
                </Layout>
            </main>
        </>
    );
};

export default About;
