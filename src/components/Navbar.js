import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <div className='navbar' id='navbar'>
            <ShiftingDropDown />
        </div>
    );
}

export const ShiftingDropDown = () => {
    return (
        <div className="flex h-15 w-full justify-start bg-neutral-80 p-6 text-neutral-200 md:justify-center">
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
        <div
            onMouseLeave={() => handleSetSelected(null)}
            className="relative flex h-fit gap-2"
        >
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
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${selected === tab
                    ? " bg-neutral-200 text-neutral-600"
                    : "text-neutral-400"
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
