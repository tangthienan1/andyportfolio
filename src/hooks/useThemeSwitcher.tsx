import { LocalStorageKeyEnum, ThemeEnum } from '@/constants';
import { useEffect, useState } from 'react';

type ModeType = ThemeEnum;

const useThemeSwitcher = () => {
    const preferDarkQuery = '(prefer-color-schema: dark)';
    const [mode, setMode] = useState<ModeType>(ThemeEnum.LIGHT);

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem(LocalStorageKeyEnum.THEME);

        const handleChange = () => {
            if (userPref) {
                let check = userPref === ThemeEnum.DARK ? ThemeEnum.DARK : ThemeEnum.LIGHT;
                setMode(check);

                if (check === ThemeEnum.DARK) {
                    document.documentElement.classList.add(ThemeEnum.DARK);
                } else {
                    document.documentElement.classList.remove(ThemeEnum.DARK);
                }
            } else {
                let check = mediaQuery.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT;
                setMode(check);

                if (check === ThemeEnum.DARK) {
                    document.documentElement.classList.add(ThemeEnum.DARK);
                } else {
                    document.documentElement.classList.remove(ThemeEnum.DARK);
                }
            }
        };

        handleChange();

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (mode === ThemeEnum.DARK) {
            window.localStorage.setItem(LocalStorageKeyEnum.THEME, ThemeEnum.DARK);
            document.documentElement.classList.add(ThemeEnum.DARK);
        }
        if (mode === ThemeEnum.LIGHT) {
            window.localStorage.setItem(LocalStorageKeyEnum.THEME, ThemeEnum.LIGHT);
            document.documentElement.classList.remove(ThemeEnum.DARK);
        }
    }, [mode]);

    return { mode, setMode };
};

export default useThemeSwitcher;
