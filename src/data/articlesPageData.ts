import { StaticImageData } from 'next/image';

import articleImg1 from '../../public/images/articles/pagination component in reactjs.jpg';

export const articlesPageTitle = 'Words Can Change The World!';

export type ArticleType = {
    img: StaticImageData;
    title: string;
    time?: string;
    summary?: string;
    link: string;
    date: Date;
};

export const articles: ArticleType[] = [
    {
        title: 'Build A Custom Pagination Component In ReactJs From Scratch',
        summary:
            'Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.',
        time: '9 min read',
        link: 'www.google.com',
        date: new Date(),
        img: articleImg1,
    },
    {
        title: 'Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens',
        summary:
            'Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience.',
        time: '10 min read',
        link: 'www.google.com',
        date: new Date(),
        img: articleImg1,
    },

    {
        title: 'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling',
        link: 'www.google.com',
        date: new Date(),
        img: articleImg1,
    },
    {
        title: 'Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers',
        link: 'www.google.com',
        date: new Date(),
        img: articleImg1,
    },

    {
        title: 'Creating An Efficient Modal Component In React Using Hooks And Portals',
        link: 'www.google.com',
        date: new Date(),
        img: articleImg1,
    },

    {
        title: 'Build A Fabulous Todo List App With React, Redux And Framer-Motion',
        link: 'www.google.com',
        date: new Date(),
        img: articleImg1,
    },

    {
        title: "Redux Simplified: A Beginner's Guide For Web Developers",
        link: 'www.google.com',
        date: new Date(),
        img: articleImg1,
    },

    {
        title: 'What Is Higher Order Component (Hoc) In React?',
        link: 'www.google.com',
        date: new Date(),
        img: articleImg1,
    },
];
