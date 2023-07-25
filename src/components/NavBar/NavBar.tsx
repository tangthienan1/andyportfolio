import { ThemeEnum } from '@/constants';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import Logo from '../Logo';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const NavBar = () => {
    const { mode, setMode } = useThemeSwitcher();

    const onDarkModeClick = () =>
        setMode((prevMode) => (prevMode === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT));

    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between
        dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
        >

            <DesktopNavbar onDarkModeClick={onDarkModeClick} mode={mode} />
            <MobileNavbar onDarkModeClick={onDarkModeClick} mode={mode} />
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo onClick={() => console.log(false)} />
            </div>
        </header>
    );
};

export default NavBar;
