import { ThemeEnum } from '@/constants';
import { motion } from 'framer-motion';
import { FC } from 'react';
import DarkModeBtn from '../DarkModeBtn';
import { MobilePageNavigatorLink } from './PageNavigatorLink';
import SocialMediaLink from './SocialMediaLink';
import navbarItems from './navbarItems';

type MobileNavbarType = {
    toggleMode: () => void;
    onDarkModeClick: () => void;
    mode: ThemeEnum;
    className?: string;
};

const PopupNavbarModal: FC<MobileNavbarType> = ({ toggleMode, onDarkModeClick, mode, className }) => {
    return (
        <motion.div
            initial={{ y: '50%', x: '-50%' }}
            animate={{ y: '-50%' }}
            exit={{ y: ['-50%', '50%'] }}
            className={`min-w-[70vw] sm:min-w-[90vw] flex justify-between items-center flex-col
            fixed top-1/2 left-1/2 py-32 bg-dark/90 dark:bg-light/75
            rounded-lg z-50 backdrop-blur-md ${className}`}
        >
            <nav className="flex items-center flex-col justify-center">
                {navbarItems.pages.map((page, index) => (
                    <MobilePageNavigatorLink
                        {...page}
                        className="mx-4"
                        onClick={toggleMode}
                        key={index}
                    />
                ))}
            </nav>
            <nav className="flex items-center justify-center flex-wrap gap-10 mt-2">
                {navbarItems.references.map(({ href, Icon }, index) => (
                    <SocialMediaLink href={href} key={index}>
                        <Icon />
                    </SocialMediaLink>
                ))}

                <DarkModeBtn onClick={onDarkModeClick} mode={mode} />
            </nav>
        </motion.div >
    );
};

export default PopupNavbarModal;
