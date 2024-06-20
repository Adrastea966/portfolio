import React, { useEffect } from 'react';
import { FiArrowRight, FiGithub } from "react-icons/fi";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { motion } from "framer-motion";
import anime from 'animejs';

const BouncyCardsFeatures = () => {
  useEffect(() => {
    const textWrapperH1 = document.querySelector('.ml11 .letters');

    if (textWrapperH1) {
      textWrapperH1.innerHTML = textWrapperH1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    anime.timeline({ loop: false })
      .add({
        targets: '.ml11 .letter',
        translateY: ["1.5em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 20 * i
      });
  }, []);

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.4
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-600 dark:text-slate-400 flex flex-col pb-5">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <h1 className="ml11 max-w-lg text-3xl font-bold md:text-2xl">
          <span className="text-wrapper">
            <span className="letters">Mis proyectos</span>
          </span>
        </h1>
        <button className="btn-arrow"> <a href='https://github.com/Adrastea966' target='_blank'>Ver todos <FiArrowRight /></a></button>
      </div>

      <motion.div
        className="mb-4 flex flex flex-wrap gap-10 justify-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <BounceCard className="card" variants={cardVariants}>
          <div className="card-top">
            <h2 className="font-semibold text-slate-700 dark:text-slate-50">Llueve con sol</h2>
            <div className="card-top-items">
              <a href="https://github.com/Adrastea966/llueve-con-sol" target='_blank'>
                <FiGithub />
                <span className="tooltip">Ver código</span>
              </a>
              <a href="https://llueve-con-sol.vercel.app/" target='_blank'> <BsArrowUpRightSquare />
                <span className="tooltip">Ver sitio</span>
              </a>
            </div>
          </div>
          <h3>Sitio web para empresa que brinda servicios de diseño.</h3>
          <a href="https://llueve-con-sol.vercel.app/" target="_blank">
            <div className="img-card-1 absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"></div>
          </a>
        </BounceCard>
        <BounceCard className="card" variants={cardVariants}>
          <div className="card-top">
            <h2 className="font-semibold text-slate-700 dark:text-slate-50">Domo</h2>
            <div className="card-top-items">
              <a href="https://github.com/Adrastea966/domo" target='_blank'>
                <FiGithub />
                <span className="tooltip">Ver código</span>
              </a>
              <a href="https://domo-proyect.vercel.app/" target='_blank'> <BsArrowUpRightSquare />
                <span className="tooltip">Ver Sitio</span>
              </a>
            </div>
          </div>
          <h3>Sitio web para empresa que brinda soluciones de software.</h3>
          <a href="https://domo-proyect.vercel.app/" target="_blank">
            <div className="img-card-2 absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"></div>
          </a>
        </BounceCard>
        <BounceCard className="card" variants={cardVariants}>
          <div className="card-top">
            <h2 className="font-semibold text-slate-700 dark:text-slate-50">El Galpon Verde</h2>
            <div className="card-top-items">
              <a href="#">
                <FiGithub />
                <span className="tooltip">No disponible</span>
              </a>
              <a href="https://elgalponverde.com.ar/" target='_blank'> <BsArrowUpRightSquare />
                <span className="tooltip">Ver Sitio</span>
              </a>
            </div>
          </div>
          <h3>Tienda online de productos alimenticios saludables.</h3>
          <a href="https://elgalponverde.com.ar/" target="_blank">
            <div className="img-card-3 absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"></div>
          </a>
        </BounceCard>
        <BounceCard className="card" variants={cardVariants}>
          <div className="card-top">
            <h2 className="font-semibold text-slate-700 dark:text-slate-50">FiberFiber</h2>
            <div className="card-top-items">
              <a href="https://github.com/Adrastea966/Fiber-Plus" target='_blank'>
                <FiGithub />
                <span className="tooltip">Ver código</span>
              </a>
              <a href="https://pagina-de-ejemplo-cooperativa.netlify.app/" target='_blank'> <BsArrowUpRightSquare />
                <span className="tooltip">Ver Sitio</span>
              </a>
            </div>
          </div>
          <h3>Sitio web plantilla para grandes cooperativas.</h3>
          <a href="https://pagina-de-ejemplo-cooperativa.netlify.app/" target="_blank">
            <div className="img-card-4 absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"></div>
          </a>
        </BounceCard>
      </motion.div>
    </section>
  );
};

const BounceCard = ({ className, children, variants }) => {
  return (
    <motion.div
      className={`group relative min-h-[300px] cursor-pointer  border border-indigo-200 rounded-2xl bg-indigo-50 dark:bg-transparent p-5 ${className}`}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default BouncyCardsFeatures;
