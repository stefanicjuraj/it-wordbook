import React from 'react';
import icon from '../../public/assets/icons/wordbook-icon.svg';
import github from '../../public/assets/icons/github.svg';

const Header: React.FC = () => {
    return (
        <>
            <nav className="bg-black fixed w-full z-20 top-0 start-0 py-1">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={icon} alt="IT wordbook icon" className="w-9 h-9" />
                        <span className="self-center text-3xl text-white font-black whitespace-nowrap">
                            IT wordbook
                        </span>
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <img src={github} alt="GitHub icon" className="w-5 h-5" />
                    </div>
                </div>
            </nav>
            <div className="mt-32 text-center">
            </div>
        </>
    );
};

export default Header;
