import React, { FC, useState } from 'react'
import BurgerBtn from '../BurgerBtn'
import PopupNavbarModal from './PopupNavbarModal';
import { ThemeEnum } from '@/constants';

type MobileNavbarProps = {
    onDarkModeClick: () => void;
    mode: ThemeEnum;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ mode, onDarkModeClick }) => {
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
    return (
        <>
            <BurgerBtn
                className="flex-col justify-center items-center hidden lg:flex"
                onClick={() => setIsBurgerOpen((prev) => !prev)}
                isOpen={isBurgerOpen}
            />
            {isBurgerOpen && (
                <PopupNavbarModal
                    onDarkModeClick={onDarkModeClick}
                    mode={mode}
                    toggleMode={() => setIsBurgerOpen((prev) => !prev)}
                    className='hidden lg:flex'
                />
            )}
        </>
    )
}

export default MobileNavbar