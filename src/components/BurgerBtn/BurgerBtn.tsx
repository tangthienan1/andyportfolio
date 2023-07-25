import React, { FC } from 'react';

type BurgerBtnType = {
    onClick: () => void;
    isOpen: boolean;
    className: string;
};

const BurgerBtn: FC<BurgerBtnType> = ({ onClick, isOpen, className }) => {
    return (
        <button className={className} onClick={onClick}>
            <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                    isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}
            ></span>
            <span
                className={`bg-dark dark:bg-light  block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                }`}
            ></span>
            <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm
                ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}
                `}
            ></span>
        </button>
    );
};

export default BurgerBtn;
