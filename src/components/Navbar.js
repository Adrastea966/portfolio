import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, MotionConfig } from "framer-motion";
import '../App.css';

const TOGGLE_CLASSES = "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const SliderToggle = ({ selected, setSelected }) => {
    return (
        <div className="relative flex w-fit items-center rounded-full ">
            <button
                className={`${TOGGLE_CLASSES} ${selected === "light" ? "text-slate-50" : "text-slate-400"}`}
                onClick={() => { setSelected("light"); }}
            >
                <FiSun className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10">Light</span>
            </button>
            <button
                className={`${TOGGLE_CLASSES} ${selected === "dark" ? "text-slate-50" : "text-slate-400"}`}
                onClick={() => { setSelected("dark"); }}
            >
                <FiMoon className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10">Dark</span>
            </button>
            <div className={`absolute inset-0 z-0 flex ${selected === "dark" ? "justify-end" : "justify-start"}`}>
                <motion.span
                    layout
                    transition={{ type: "spring", damping: 15, stiffness: 250 }}
                    className="h-full w-1/2 rounded-full bg-slate-400 dark:bg-slate-700"
                />
            </div>
        </div>
    );
};

const Navbar = ({ setTheme, theme }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {menuOpen && <div className="overlay"></div>}
            <div className={`navbar ${menuOpen ? "bg-slate-300 dark:bg-slate-800" : ""}`} id='navbar'>
                <div className={`relative flex gap-3 justify-between items-center w-screen p-3 bg-slate-50 dark:bg-slate-800 ${menuOpen ? "flex-col items-center" : ""}`}>
                    {!menuOpen && (
                        <div className="lg:hidden absolute top-3 right-3 z-20">
                            <AnimatedHamburgerButton active={menuOpen} toggleMenu={toggleMenu} />
                        </div>
                    )}
                    {menuOpen && (
                        <button className="absolute top-3 right-3 z-20" onClick={toggleMenu}>
                            <AnimatedHamburgerButton active={menuOpen} toggleMenu={toggleMenu} />
                        </button>
                    )}
                    <ShiftingDropDown menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <SliderToggle selected={theme} setSelected={setTheme} />
                </div>
            </div>
        </>
    );
};

const AnimatedHamburgerButton = ({ active, toggleMenu }) => {
    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.button
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={toggleMenu}
                className="relative h-10 w-10 rounded-full transition-colors"
            >
                <motion.span
                    variants={VARIANTS.top}
                    className="absolute h-1 w-8 bg-slate-400 dark:bg-slate-50"
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-1 w-8 bg-slate-400 dark:bg-slate-50"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-1 w-8 bg-slate-400 dark:bg-slate-50"
                    style={{
                        x: "-50%",
                        y: "50%",
                        bottom: "35%",
                        left: "50%",
                    }}
                />
            </motion.button>
        </MotionConfig>
    );
};

const VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "50%",
        },
    },
};

const ShiftingDropDown = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`w-full pl-56 ${menuOpen ? "flex flex-col drop-down items-center" : "hidden lg:flex lg:flex-row lg:justify-center lg:items-center"}`}>
            <Tabs menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    );
};

const Tabs = ({ menuOpen, setMenuOpen }) => {
    const [hovered, setHovered] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSetHovered = (val) => {
        setHovered(val);
    };

    const handleNavigate = (path) => {
        navigate(path);
        setMenuOpen(false);  // Cerrar el menú al navegar
    };

    return (
        <div onMouseLeave={() => handleSetHovered(null)} className={`relative ${menuOpen ? "flex flex-col items-center" : "flex h-fit gap-2"}`}>
            {TABS.map((t) => {
                const isSelected = location.pathname === t.path && t.title !== "Inicio";
                return (
                    <Tab
                        key={t.id}
                        isSelected={isSelected}
                        hovered={hovered}
                        handleSetHovered={handleSetHovered}
                        handleNavigate={handleNavigate}
                        tab={t.id}
                        path={t.path}
                    >
                        {t.title}
                    </Tab>
                );
            })}
        </div>
    );
};

const Tab = ({ children, tab, handleSetHovered, handleNavigate, hovered, isSelected, path }) => {
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetHovered(tab)}
            onClick={() => handleNavigate(path)}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-m transition-colors ${
                isSelected || hovered === tab ? "bg-slate-400 dark:bg-slate-700 text-slate-50" : "text-slate-600 dark:text-slate-400"
            }`}
        >
            <span>{children}</span>
        </button>
    );
};

const TABS = [
    {
        title: "Inicio",
        path: "/",
        Component: () => <div></div>,
    },
    {
        title: "Sobre Mí",
        path: "/sobre-mi",
        Component: () => <div></div>,
    },
    {
        title: "Proyectos",
        path: "/proyectos",
        Component: () => <div></div>,
    },
    {
        title: "Servicios",
        path: "/servicios",
        Component: () => <div></div>,
    },
    {
        title: "Contacto",
        path: "/contacto",
        Component: () => <div></div>,
    },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default Navbar;
