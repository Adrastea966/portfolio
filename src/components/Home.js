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
        <h1 className="ml6">
          <span className="text-wrapper">
            <span className="letters">De ideas a experiencias digitales. Diseño y desarrollo de sitios web</span>
          </span>
        </h1>
        <h2 className="ml7">
          <span className="text-wrapper">
            <span className="letters">Trabajemos juntos!</span>
          </span>
        </h2>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-home flex gap-2 items-center whitespace-nowrap rounded-lg bg-slate-600 px-10 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
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
        <motion.div className="icon instagram bg-slate-300 hover:bg-slate-300 text-slate-700 dark:text-slate-50 dark:bg-slate-600 dark:hover:bg-slate-700" variants={item}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram />
          </a>
        </motion.div>
        <motion.div className="icon whatsapp bg-slate-300 hover:bg-slate-300 text-slate-700 dark:text-slate-50 dark:bg-slate-600 dark:hover:bg-slate-700" variants={item}>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineWhatsApp />
          </a>
        </motion.div>
        <motion.div className="icon github bg-slate-300 hover:bg-slate-300 text-slate-700 dark:text-slate-50 dark:bg-slate-600 dark:hover:bg-slate-700" variants={item}>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub />
          </a>
        </motion.div>
        <motion.div className="icon email bg-slate-300 hover:bg-slate-300 text-slate-700 dark:text-slate-50 dark:bg-slate-600 dark:hover:bg-slate-700" variants={item}>
          <a href="mailto:elianamaiu@yahoo.com.ar">
            <AiOutlineMail />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
