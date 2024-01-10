import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import profile from '../../public/images/profile/developer-pic-1.png';
import lightBuld from '../../public/images/svgs/miscellaneous_icons_1.svg';

import AnimatedText from '@/components/AnimatedText';
import ButtonAsLink from '@/components/ButtonAsLink';
import CustomHead from '@/components/CustomHead';
import HireMe from '@/components/HireMe';
import { LinkArrowIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import { landingPageDescription, landingPageTitle } from '@/data/landingPageData';

const Home: FC = () => {
    return (
        <>
            <CustomHead title={'Andy Tang'} content={'Andy Tang Portfolio'} />
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
                <Layout className="pt-0 md:pt-16 sm:pt-8">
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className="w-1/2 md:w-full">
                            <Image
                                src={profile}
                                alt={'Me'}
                                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col self-center lg:w-full lg:text-center">
                            <AnimatedText
                                text={landingPageTitle}
                                className="!text-6xl text-left xl:!text-5xl sm:text-center sm:py-3"
                            />
                            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                {landingPageDescription}
                            </p>
                            <div className="flex items-center self-start mt-2 lg:self-center">
                                <ButtonAsLink
                                    href={'/Resume-Tang-Thien-An.pdf'}
                                    isDownLoadable={true}
                                    icon={<LinkArrowIcon className="!w-6 ml-1" />}
                                    content="Resume"
                                />
                                <Link
                                    href="mailto:tangthienan9@gmail.com"
                                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-basel lg:text-center"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                <HireMe />
                <div className="absolute right-8 bottom-0 inline-block w-24 md:hidden">
                    <Image src={lightBuld} alt="light" className="w-full h-auto" />
                </div>
            </main>
        </>
    );
};

export default Home;
