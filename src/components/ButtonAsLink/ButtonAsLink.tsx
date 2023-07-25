import Link from 'next/link';
import { FC } from 'react';

type ButtonAsLinkType = {
    href: string;
    isDownLoadable?: boolean;
    icon?: any;
    content: string;
    isIconLeft?: boolean;
    target?: string;
    className?: string;
};

const ButtonAsLink: FC<ButtonAsLinkType> = ({
    content,
    href,
    isDownLoadable = false,
    icon,
    isIconLeft = false,
    target = '_blank',
    className,
}) => {
    return (
        <Link
            href={href}
            className={`flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
            hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
            md:p-2 md:px-4 md:text-base
            ${className}`}
            download={isDownLoadable}
            target={target}
        >
            {icon && isIconLeft && icon} {content} {icon && !isIconLeft && icon}
        </Link>
    );
};

export default ButtonAsLink;
