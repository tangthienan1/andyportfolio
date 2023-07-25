import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

type PagerNavigatorLinkType = LinkProps & {
    title?: string;
    className?: string;
    target?: string;
};

export const PageNavigatorLink: FC<PagerNavigatorLinkType> = ({
    href,
    title,
    className,
    ...rest
}) => {
    const router = useRouter();

    return (
        <Link className={`${className} relative group`} {...{ href }} {...rest}>
            {title}
            <span
                className={`dark:bg-light h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    router.asPath === href ? 'w-full' : 'w-0'
                }`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

type MobilePageNavigatorLinkType = PagerNavigatorLinkType & {
    onClick: () => void;
};

export const MobilePageNavigatorLink: FC<MobilePageNavigatorLinkType> = ({
    className,
    href,
    onClick,
    title,
}) => {
    const router = useRouter();

    const _onClick = () => {
        onClick();
        router.push(href);
    };

    return (
        <button
            className={`${className} relative group text-light dark:text-dark my-2`}
            {...{ href }}
            onClick={_onClick}
        >
            {title}
            <span
                className={`dark:bg-dark h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    router.asPath === href ? 'w-full' : 'w-0'
                }`}
            >
                &nbsp;
            </span>
        </button>
    );
};
