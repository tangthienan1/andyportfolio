import { ReactElement } from 'react';
import {
    FacebookIcon,
    GithubIcon,
    LinkedInIcon
} from '../Icons';

type PageItemType = {
    href: string;
    title: string;
};

type ReferenceItemType = {
    href: string;
    Icon: () => ReactElement;
};

type NavbarItemsType = {
    pages: PageItemType[];
    references: ReferenceItemType[];
};

const navbarItems: NavbarItemsType = {
    pages: [
        {
            href: '/',
            title: 'Home',
        },
        {
            href: '/about',
            title: 'About',
        },
        // {
        //     href: '/projects',
        //     title: 'Project',
        // },
        // {
        //     href: '/articles',
        //     title: 'Articles',
        // },
    ],
    references: [
        {
            href: 'https://www.facebook.com/thienan.tang.99',
            Icon: () => <FacebookIcon />,
        },
        {
            href: 'https://github.com/tangthienan1',
            Icon: () => <GithubIcon />,
        },
        {
            href: 'https://www.linkedin.com/in/tang-thien-an-0691a4195/',
            Icon: () => <LinkedInIcon />,
        },
        // {
        //     href: '/',
        //     Icon: () => <PinterestIcon />,
        // },
        // {
        //     href: '/',
        //     Icon: () => <DribbbleIcon />,
        // },
        // {
        //     href: '/',
        //     Icon: () => <TwitterIcon />,
        // },
    ],
};
export default navbarItems;
