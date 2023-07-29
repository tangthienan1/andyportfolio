import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import profile from '../../public/images/profile/developer-pic-1.png';
import lightBuld from '../../public/images/svgs/miscellaneous_icons_1.svg';

import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe';
import { LinkArrowIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import { landingPageDescription, landingPageTitle } from '@/data/landingPageData';

const Home: FC = () => {
    return (
        <main className="flex items-center text-dark w-full min-h-screen">
            <Layout className="pt-0">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2">
                        <Image src={profile} alt={'Me'} className="w-full h-auto" />
                    </div>
                    <div className="w-1/2 flex flex-col items-center self-center">
                        <AnimatedText text={landingPageTitle} className="!text-6xl !text-left" />
                        <p className="my-4 text-base font-medium">{landingPageDescription}</p>
                        <div className="flex items-center self-start mt-2">
                            <Link
                                href={'/Resume-Tang-Thien-An.pdf'}
                                className="flex items-center bg-dark text-light p-2.5 px-6
                                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                                border-2 border-solid border-transparent hover:border-dark"
                                download={true}
                            >
                                Resume <LinkArrowIcon className="w-6 ml-1" />
                            </Link>
                            <Link
                                href="mailto:tangthienan9@gmail.com"
                                className="ml-4 text-lg font-medium capitalize text-dark underline"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
            <HireMe />
            <div className="absolute right-8 inline-block w-24">
                <Image src={lightBuld} alt="light" className="w-full h-auto" />
            </div>
        </main>
    );
};

export default Home;
