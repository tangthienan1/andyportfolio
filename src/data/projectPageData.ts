import { StaticImageData } from 'next/image';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
export const projectPageTitle = 'Imagination Trumps Knowledge!';

export type ProjectType = {
    type: string;
    title: string;
    summary?: string;
    img: StaticImageData;
    link: string;
    githubLink: string;
};

export const projects: ProjectType[] = [
    {
        title: 'Crypto Screener Application',
        summary:
            'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
        img: project1,
        link: '/',
        type: 'Featured Project',
        githubLink: '/',
    },
    {
        title: 'Crypto Screener Application',
        summary:
            'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
        img: project1,
        link: '/',
        type: 'Featured Project',
        githubLink: '/',
    },
    {
        title: 'Crypto Screener Application',
        summary:
            'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
        img: project1,
        link: '/',
        type: 'Featured Project',
        githubLink: '/',
    },
];
