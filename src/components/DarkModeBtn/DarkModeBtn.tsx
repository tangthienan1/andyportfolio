import { ThemeEnum } from '@/constants';
import React, { FC } from 'react';
import { MoonIcon, SunIcon } from '../Icons';

type DarkModeBtnType = {
    onClick: () => void;
    mode: ThemeEnum
};

const DarkModeBtn: FC<DarkModeBtnType> = ({ onClick, mode }) => {
    return (
        <button
            onClick={onClick}
            className={`ml-3 flex items-center justify-center rounded-full p-1 
                    ${mode === ThemeEnum.LIGHT ? 'bg-dark' : 'bg-light'} 
                    `}
        >
            {mode === ThemeEnum.DARK ? (
                <MoonIcon className="fill-white w-6 h-auto" />
            ) : (
                <SunIcon className="fill-white w-6 h-auto" />
            )}
        </button>
    );
};

export default DarkModeBtn;
