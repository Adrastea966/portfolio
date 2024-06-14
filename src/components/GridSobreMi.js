import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import anime from 'animejs';
import { twMerge } from "tailwind-merge";
import { FiFramer } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { RiBootstrapLine } from "react-icons/ri";
import '../App.css';

const GridSobreMi = () => {

    useEffect(() => {
        const textWrapperH1 = document.querySelector('.ml8 .letters');
        const textWrapperH2 = document.querySelector('.ml9 .letters');
        const textWrapperOtherH2 = document.querySelector('.ml10 .letters');


        if (textWrapperH1) {
            textWrapperH1.innerHTML = textWrapperH1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        }

        if (textWrapperH2) {
            textWrapperH2.innerHTML = textWrapperH2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        }

        if (textWrapperOtherH2) {
            textWrapperOtherH2.innerHTML = textWrapperOtherH2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        }

        anime.timeline({ loop: false })
            .add({
                targets: '.ml8 .letter, .ml9 .letter, .ml10 .letter',
                translateY: ["1.5em", 0],
                translateZ: 0,
                duration: 750,
                delay: (el, i) => 20 * i
            })
    }, []);

    return (
        <div className="h-50 bg-slate-50 dark:bg-slate-800 px-4 py-12 text-slate-600 dark:text-slate-50">
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
            >
                <HeaderBlock />
                <SocialsBlock />
                <AboutBlock />
            </motion.div>
        </div>
    );
};

const Block = ({ className, ...rest }) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={twMerge(
                "col-span-4 rounded-lg border border-slate-400 bg-slate-300 dark:bg-slate-700 p-2",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6 p-4">
        <img
            src="https://api.dicebear.com/8.x/thumbs/svg?seed=E"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
        />

        <h1 className="ml8 mb-12 text-2xl font-medium leading-tight">
            <span className="text-wrapper">
                <span className="letters">Hola, soy Ely. {" "}</span>
                <span className="text-slate-400 dark:text-slate-400">
                    Diseño y desarrollo sitios web increibles como este.
                </span>
            </span>
        </h1>

        <button className="btn-cv"><a href="CV.pdf" download>Descargar cv</a><IoMdDownload /></button>
    </Block>
);

const SocialsBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6 p-4">

        <h2 className="ml9 mb-10 text-2xl font-medium leading-tight">
            <span className="text-wrapper">
                <span className="letters">Herramientas que utilizo</span>
            </span>

        </h2>

        <div className="grid grid-cols-3 gap-2 ">
            <Block
                whileHover={{ scale: 1.1 }}
                className="bg-slate-400 dark:bg-slate-600 col-span-1 h-8 p-1"
            >
                <a
                    href="#"
                    className="flex justify-center items-center text-sm etiquetas-herramientas text-slate-50 gap-2"
                >
                    HTML5 <AiOutlineHtml5 />
                </a>
            </Block>
            <Block
                whileHover={{ scale: 1.1 }}
                className="bg-slate-400 dark:bg-slate-600 col-span-1 h-8 p-1"
            >
                <a
                    href="#"
                    className="flex justify-center items-center text-sm etiquetas-herramientas text-slate-50 gap-2"
                >
                    CSS3 <TbBrandCss3 />
                </a>
            </Block>
            <Block
                whileHover={{ scale: 1.1 }}
                className="bg-slate-400 dark:bg-slate-600 col-span-1 h-8 p-1"
            >
                <a
                    href="#"
                    className="flex justify-center items-center text-sm etiquetas-herramientas text-slate-50 gap-2"
                >
                    JavaScript <IoLogoJavascript />
                </a>
            </Block>
            <Block
                whileHover={{ scale: 1.1 }}
                className="bg-slate-400 dark:bg-slate-600 col-span-1 h-8 p-1"
            >
                <a
                    href="#"
                    className="flex justify-center items-center text-sm etiquetas-herramientas text-slate-50 gap-2"
                >
                    ReactJS <GrReactjs />
                </a>
            </Block>
            <Block
                whileHover={{ scale: 1.1 }}
                className="bg-slate-400 dark:bg-slate-600 col-span-1 h-8 p-1"
            >
                <a
                    href="#"
                    className="flex justify-center items-center text-sm etiquetas-herramientas text-slate-50 gap-2"
                >
                    Framer<FiFramer />
                </a>
            </Block>
            <Block
                whileHover={{ scale: 1.1 }}
                className="bg-slate-400 dark:bg-slate-600 col-span-1 h-8 p-1"
            >
                <a
                    href="#"
                    className="flex justify-center items-center text-sm etiquetas-herramientas text-slate-50 gap-2"
                >
                    TailwindCSS <BiLogoTailwindCss />
                </a>
            </Block>
            <Block
                whileHover={{ scale: 1.1 }}
                className="bg-slate-400 dark:bg-slate-600 col-span-1 h-8 p-1"
            >
                <a
                    href="#"
                    className="flex justify-center items-center text-sm etiquetas-herramientas text-slate-50 gap-2"
                >
                    Figma <FaFigma />
                </a>
            </Block>
            <Block
                whileHover={{ scale: 1.1 }}
                className="bg-slate-400 dark:bg-slate-600 col-span-1 h-8 p-1"
            >
                <a
                    href="#"
                    className="flex justify-center items-center text-sm etiquetas-herramientas text-slate-50 gap-2"
                >
                    Boostrap <RiBootstrapLine />
                </a>
            </Block>
            <Block
                whileHover={{ scale: 1.1 }}
                className="bg-slate-400 dark:bg-slate-600 col-span-1 h-8 p-1"
            >
                <a
                    href="#"
                    className="flex justify-center items-center text-sm etiquetas-herramientas text-slate-50 gap-2"
                >
                    AnimeJS
                </a>
            </Block>
        </div>
    </Block>
);

const AboutBlock = () => (
    <Block className="col-span-12 text-2xl leading-snug p-5">
        <h2 className="ml10 text-2xl font-medium">
            <span className="text-wrapper">
                <span className="letters"> Mi pasión es crear sitios web interesantes.{" "}</span>
            </span>

            <span className="text-slate-400 span-about">
            Conectando emociones para hacer realidad tus objetivos. Te ayudo a personalizar tu sitio web y potenciar tu marca.
            </span>
        </h2>
    </Block>
);

export default GridSobreMi;
