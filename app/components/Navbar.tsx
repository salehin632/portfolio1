"use client";
import Link from "next/link";
import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const navLinks = [
        {path: "#home", title: "Home"},
        {path: "#portfolio", title: "Portfolio"},
        {path: "#contact", title: "Contact"},
    ];

    const handleClick = (path: string) => {
        setNav(false);
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full text-white font-bold pt-4">
            {/* Desktop Navigation */}
            <div className="hidden border border-white/20 md:flex items-center justify-center max-w-[400px] mx-auto rounded-3xl bg-black/20 px-6 py-4 backdrop-blur-3xl gap-8">
                {navLinks.map((link, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleClick(link.path)}
                        className="hover:text-gray-500 font-bold text-md transition-colors duration-300"
                    >
                        {link.title}
                    </button>
                ))}
            </div>

            {/* Mobile Navigation Icon */}
            <div onClick={() => setNav(!nav)} className="md:hidden fixed right-5 top-4 z-[99] cursor-pointer">
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>

            {/* Mobile Navigation Menu */}
            <div className={nav 
                ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-lg ease-in duration-300 z-40" 
                : "md:hidden fixed top-0 left-[-100%] w-full h-screen bg-black/70 backdrop-blur-lg ease-in duration-300 z-40"
            }>
                <div className="flex flex-col items-center justify-center h-full">
                    {navLinks.map((link, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleClick(link.path)}
                            className="py-4 text-4xl hover:text-gray-500 transition-colors duration-300"
                        >
                            {link.title}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};
