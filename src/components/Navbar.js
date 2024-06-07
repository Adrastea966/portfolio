// Navbar.js
import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import '../App.css';

const TOGGLE_CLASSES = "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const SliderToggle = ({ selected, setSelected }) => {
    return (
        <div className="relative flex w-fit items-center rounded-full">
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
    return (
        <div className='navbar' id='navbar'>
            <ShiftingDropDown />
            <SliderToggle selected={theme} setSelected={setTheme} />
        </div>
    );
}

export const ShiftingDropDown = () => {
    return (
        <div className="flex h-13 w-full justify-start p-3 md:justify-center items-center">
            <Tabs />
        </div>
    );
};

const Tabs = () => {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const handleSetSelected = (val) => {
        setSelected(val);
    };

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div onMouseLeave={() => handleSetSelected(null)} className="relative flex h-fit gap-2">
            {TABS.map((t) => {
                return (
                    <Tab
                        key={t.id}
                        selected={selected}
                        handleSetSelected={handleSetSelected}
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

const Tab = ({ children, tab, handleSetSelected, handleNavigate, selected, path }) => {
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleNavigate(path)}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-m transition-colors ${selected === tab ? "bg-slate-400 dark:bg-slate-700 text-slate-50" : "text-slate-600 dark:text-slate-400"
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