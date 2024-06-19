import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import WaterDropGrid from './WaterDropGrid';
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { motion } from 'framer-motion';
import '../App.css';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Home = ({ theme }) => {
  const [emojiIndex, setEmojiIndex] = useState(0);
  const emojis = ['👩‍💻', '💻', '📱', '🤍', '💫'];

  useEffect(() => {
    const textWrapperH1 = document.querySelector('.ml6 .letters');
    const textWrapperH2 = document.querySelector('.ml7 .letters');

    if (textWrapperH1) {
      textWrapperH1.innerHTML = textWrapperH1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    if (textWrapperH2) {
      textWrapperH2.innerHTML = textWrapperH2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    anime.timeline({ loop: false })
      .add({
        targets: '.ml6 .letter, .ml7 .letter',
        translateY: ["1.5em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 20 * i
      })
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [emojis.length]);

  return (
    <div className={`home ${theme === 'dark' ? 'dark-mode' : ''}`} id='home'>
      <WaterDropGrid />
      <div className={`texto-inicio ${theme === 'dark' ? 'dark-mode' : ''}`}>
        <h1 className="ml6 text-slate-500 dark:text-slate-400">
          <span className="text-wrapper">
            <span className="letters">De ideas a experiencias digitales. Diseño y desarrollo de sitios web</span>
          </span>
        </h1>
        <h2 className="ml7 text-slate-500 dark:text-slate-400">
          <span className="text-wrapper">
            <span className="letters">Trabajemos juntos!</span>
          </span>
        </h2>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-home flex gap-2 items-center whitespace-nowrap rounded-lg  px-10 py-2 font-medium text-white shadow-xl transition-colors bg-indigo-500 hover:bg-indigo-600"
          href="https://wa.me/541135005100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conversemos <AiOutlineWhatsApp/>
        </motion.a>
      </div>
      <motion.div
        className={`animated-box ${theme === 'dark' ? 'dark-mode' : ''}`}
        key={emojiIndex} 
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        {emojis[emojiIndex]}
      </motion.div>

      <motion.div
        className="social-icons-container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="icon instagram bg-indigo-100 hover:bg-indigo-200 text-slate-700 hover:text-slate-50 dark:bg-transparent border border-indigo-200 dark:text-slate-50 dark:hover:bg-indigo-200 dark:hover:text-slate-700" variants={item}>
          <a href="#" rel="noopener noreferrer"  title="en construcción">
            <AiOutlineInstagram />
          </a>
        </motion.div>
        <motion.div className="icon whatsapp bg-indigo-100 hover:bg-indigo-200 text-slate-700 hover:text-slate-50 dark:bg-transparent border border-indigo-200 dark:text-slate-50 dark:hover:bg-indigo-200 dark:hover:text-slate-700" variants={item}>
          <a href="https://wa.me/541135005100" target="_blank" rel="noopener noreferrer">
            <AiOutlineWhatsApp />
          </a>
        </motion.div>
        <motion.div className="icon github bg-indigo-100 hover:bg-indigo-200 text-slate-700 hover:text-slate-50 dark:bg-transparent border border-indigo-200 dark:text-slate-50 dark:hover:bg-indigo-200 dark:hover:text-slate-700" variants={item}>
          <a href="https://github.com/Adrastea966" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub />
          </a>
        </motion.div>
        <motion.div className="icon email bg-indigo-100 hover:bg-indigo-200 text-slate-700 hover:text-slate-50 dark:bg-transparent border border-indigo-200 dark:text-slate-50 dark:hover:bg-indigo-200 dark:hover:text-slate-700" variants={item}>
          <a href="mailto:contacto@elydevelopsit.com">
            <AiOutlineMail />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
