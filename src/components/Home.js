// Home.js
import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import WaterDropGrid from './WaterDropGrid';
import { AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from 'framer-motion';  
import '../App.css';

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
            <span className="letters">Hola, soy Ely! Diseñadora y desarrolladora web</span>
          </span>
        </h1>
        <h2 className="ml7">
          <span className="text-wrapper">
            <span className="letters">Trabajemos juntos!</span>
          </span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-600 px-10 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700 flex gap-2 items-center"
        >
          Conversemos <AiOutlineWhatsApp/>
        </motion.button>
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
    </div>
  );
}

export default Home;