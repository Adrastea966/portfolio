import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { motion } from 'framer-motion';
import { LiaExchangeAltSolid } from "react-icons/lia";
import { IoPricetag } from "react-icons/io5";
import '../App.css';

const Servicios = () => {
  const [firstCardChanged, setFirstCardChanged] = useState(false);
  const [secondCardChanged, setSecondCardChanged] = useState(false);
  const [firstCardAnimationKey, setFirstCardAnimationKey] = useState(0);
  const [secondCardAnimationKey, setSecondCardAnimationKey] = useState(0);

  const handleFirstCardChange = () => {
    setFirstCardChanged(prevState => !prevState);
    setFirstCardAnimationKey(prevKey => prevKey + 1);
  };

  const handleSecondCardChange = () => {
    setSecondCardChanged(prevState => !prevState);
    setSecondCardAnimationKey(prevKey => prevKey + 1);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } }
  };

  return (
    <div className='servicios contenedor flex flex-wrap gap-2 p-3' id='servicios'>
      <motion.div
        className="mb-4 flex flex flex-wrap gap-4 justify-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className='product-card w-auto h-auto bg-transparent border border-slate-700 dark:border-slate-400 rounded-lg p-5 flex flex-col'>
          <div className='product-card-top flex flex-col items-center justify-center text-slate-700 dark:text-slate-300'>
            <button className='btn-cambiar-plan' onClick={handleFirstCardChange}>Otra opción<LiaExchangeAltSolid /></button>
            <motion.h2
              key={`firstCardPrice-${firstCardAnimationKey}`}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              {firstCardChanged ? "$60.000 ARS" : "$80.000 ARS"}
            </motion.h2>
            <h3>Ideal para pequeñas empresas</h3>
          </div>
          <div className='product-card-medium p-5 text-slate-700 dark:text-slate-400'>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />One Page
            </motion.span>
            <motion.span
              key={`firstCardSpan2-${firstCardAnimationKey}`}
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />{firstCardChanged ? "Diseño plantilla" : "Diseño personalizado"}
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Diseño adaptable
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />SEO básico
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Mantenimiento web mensual
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Integración de redes sociales
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Formulario de contacto
            </motion.span>
            <motion.span
              key={`firstCardSpan8-${firstCardAnimationKey}`}
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />{firstCardChanged ? "Alojamiento web" : "Alojamiento web (opcional)"}
            </motion.span>
            <motion.span
              key={`firstCardSpan9-${firstCardAnimationKey}`}
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />{firstCardChanged ? "Certificado SSL" : "Certificado SSL (opcional)"}
            </motion.span>
          </div>
          <div className='product-card-bottom'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="whitespace-nowrap rounded-lg bg-slate-600 px-10 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700 flex gap-2 items-center"
            >
              Contratar
            </motion.button>
          </div>
        </div>

        <div className='product-card w-auto h-auto bg-transparent border border-slate-700 dark:border-slate-400 rounded-lg p-5 flex flex-col'>
          <div className='product-card-top flex flex-col items-center justify-center text-slate-700 dark:text-slate-300'>
            <button className='btn-cambiar-plan' onClick={handleSecondCardChange}>Otra opción<LiaExchangeAltSolid /></button>
            <motion.h2
              key={`secondCardPrice-${secondCardAnimationKey}`}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              {secondCardChanged ? "$90.000 ARS" : "$110.000 ARS"}
            </motion.h2>
            <h3>Ideal para empresas y cooperativas</h3>
          </div>
          <div className='product-card-medium p-5 text-slate-700 dark:text-slate-400'>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Sitio web multisección
            </motion.span>
            <motion.span
              key={`secondCardSpan2-${secondCardAnimationKey}`}
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />{secondCardChanged ? "Diseño plantilla" : "Diseño personalizado"}
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Diseño adaptable
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />SEO avanzado
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Mantenimiento web mensual
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Integración de redes
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Formulario de contacto
            </motion.span>
            <motion.span
              key={`secondCardSpan7-${secondCardAnimationKey}`}
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />{secondCardChanged ? "Alojamiento web" : "Alojamiento web (opcional)"}
            </motion.span>
            <motion.span
              key={`secondCardSpan8-${secondCardAnimationKey}`}
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />{secondCardChanged ? "Certificado SSL" : "Certificado SSL (opcional)"}
            </motion.span>
          </div>
          <div className='product-card-bottom'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="whitespace-nowrap rounded-lg bg-slate-600 px-10 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700 flex gap-2 items-center"
            >
              Contratar
            </motion.button>
          </div>
        </div>

        <div className='product-card w-auto h-auto bg-transparent border border-slate-700 dark:border-slate-400 rounded-lg p-5 flex flex-col'>
          <div className='product-card-top flex flex-col items-center justify-center text-slate-700 dark:text-slate-300'>
            <motion.h3
              className='h3-descuento font-bold'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <IoPricetag />$60.000
            </motion.h3>
            <h2 className='h2-descuento'>$120.000 ARS</h2>
            <h3>Ideal para emprendedores</h3>
          </div>
          <div className='product-card-medium p-5 text-slate-700 dark:text-slate-400'>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Ecommerce
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Diseño plantilla
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Diseño adaptable
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />SEO avanzado
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Mantenimiento web mensual
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Integración de redes
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Formulario de contacto
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Alojamiento web
            </motion.span>
            <motion.span
              className='flex items-center gap-1 p-1'
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <TiTick />Certificado SSL
            </motion.span>
          </div>
          <div className='product-card-bottom'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="whitespace-nowrap rounded-lg bg-slate-600 px-10 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700 flex gap-2 items-center"
            >
              Contratar
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Servicios;
