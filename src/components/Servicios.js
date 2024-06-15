import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { motion } from 'framer-motion';
import { LiaExchangeAltSolid } from "react-icons/lia";
import { IoIosInformationCircleOutline } from "react-icons/io";
import '../App.css';

const Servicios = () => {
  const [firstCardChanged, setFirstCardChanged] = useState(false);
  const [secondCardChanged, setSecondCardChanged] = useState(false);
  const [thirdCardChanged, setThirdCardChanged] = useState(false);
  const [firstCardAnimationKey, setFirstCardAnimationKey] = useState(0);
  const [secondCardAnimationKey, setSecondCardAnimationKey] = useState(0);
  const [thirdCardAnimationKey, setThirdCardAnimationKey] = useState(0);

  const handleFirstCardChange = () => {
    setFirstCardChanged(prevState => !prevState);
    setFirstCardAnimationKey(prevKey => prevKey + 1);
  };

  const handleSecondCardChange = () => {
    setSecondCardChanged(prevState => !prevState);
    setSecondCardAnimationKey(prevKey => prevKey + 1);
  };

  const handleThirdCardChange = () => {
    setThirdCardChanged(prevState => !prevState);
    setThirdCardAnimationKey(prevKey => prevKey + 1);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } }
  };

  const firstCardItems = [
    { id: 1, text: 'One Page' },
    { id: 2, text: 'Diseño web plantilla' },
    { id: 3, text: 'Diseño adaptable' },
    { id: 5, text: 'Alojamiento web' },
    { id: 6, text: 'Email gratis' },
    { id: 7, text: 'Dominio gratis (1er año)' },
    { id: 8, text: 'Protección de privacidad del dominio' },
    { id: 9, text: 'Acceso SSH' },
    { id: 10, text: 'Certificado SSL' },
    { id: 11, text: 'Mantenimiento web mensual' },
    { id: 12, text: 'Soporte' }
  ];

  const additionalItemsOption2 = [
    { id: 12, text: 'Mapa de calor' },
    { id: 13, text: 'Herramienta IA' },
    { id: 14, text: 'CDN (sitio web más rápido)' }
  ];

  const secondCardItems = [
    { id: 1, text: 'Sitio web multisección' },
    { id: 2, text: 'Diseño web plantilla' },
    { id: 3, text: 'Diseño adaptable' },
    { id: 4, text: 'Alojamiento web' },
    { id: 5, text: 'Email gratis' },
    { id: 6, text: 'Dominio gratis (1er año)' },
    { id: 7, text: 'Protección de privacidad del dominio' },
    { id: 8, text: 'Acceso SSH' },
    { id: 9, text: 'Certificado SSL' },
    { id: 10, text: 'Mantenimiento web mensual' },
    { id: 11, text: 'Soporte' }
  ];

  const thirdCardItems = [
    { id: 1, text: 'Ecommerce' },
    { id: 2, text: 'Diseño web plantilla' },
    { id: 3, text: 'Diseño adaptable' },
    { id: 4, text: 'Alojamiento web' },
    { id: 5, text: 'Email gratis' },
    { id: 6, text: 'Dominio gratis (1er año)' },
    { id: 7, text: 'Protección de privacidad del dominio' },
    { id: 8, text: 'Acceso SSH' },
    { id: 9, text: 'Certificado SSL' },
    { id: 10, text: 'Mantenimiento web mensual' },
    { id: 11, text: 'Soporte' }
  ];

  const generateWhatsAppLink = (card, option) => {
    let message = "";
    switch(card) {
      case 1:
        message = `Hola! quiero una One Page con el plan ${option === 1 ? "Premium" : "Business"}`;
        break;
      case 2:
        message = `Hola! quiero una página multiseccion con el plan ${option === 1 ? "Premium" : "Business"}`;
        break;
      case 3:
        message = `Hola! quiero un ecommerce con el plan ${option === 1 ? "Premium" : "Business"}`;
        break;
      default:
        message = "Hola!";
    }
    return `https://wa.me/5491135005100?text=${encodeURIComponent(message)}`;
  };

  const handleContractClick = (card, option) => {
    const link = generateWhatsAppLink(card, option);
    window.open(link, "_blank");
  };

  return (
    <div className='servicios contenedor' id='servicios'>
      <motion.div
        className="mb-4 flex flex-wrap gap-4 justify-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >

        <div className='contenedor-info-y-productos'>

          <div className='contenedor-info-productos'>
            <div className='info-producto hover-plan'>
              <div className='valor'>
                <h3>Valor del plan <IoIosInformationCircleOutline /> </h3>
                <span className="tooltip2">Todos estos planes tienen un valor especificado para un período de 1 año. Si 
                  desea contratar por 2 o 4 años, por favor indíquelo, ya que se aplicará un nuevo valor.</span>
              </div>
            </div>

            <div className='info-producto hover-web'>
              <div className='valor'>
                <h3>Diseño web<IoIosInformationCircleOutline /> </h3>
                <span className="tooltip2">Todos los planes incluyen diseño web adaptable a todos los dispositivos y diseños web plantilla. 
                  Si se requiere de un diseño personalizado, por favor, indíquelo, ya que se aplicará un nuevo valor.</span>
              </div>
            </div>

            <div className='info-producto hover-mantenimiento'>
              <div className='valor'>
                <h3>Mantenimiento<IoIosInformationCircleOutline /> </h3>
                <span className="tooltip2">El mantenimiento web tiene el valor de $5000 mensuales. Todos los planes incluyen ese valor 
                  por 1 año. Pasado ese año, el mantenimiento se cobrará mensualmente</span>
              </div>
            </div>
          </div>

          <div className='contenedor-tarjetas-producto'>

            <div className='product-card w-80 h-auto bg-transparent border border-slate-700 dark:border-slate-400 rounded-lg p-5 flex flex-col'>
              <div className='product-card-top flex flex-col items-center justify-center text-slate-700 dark:text-slate-300'>
                <button className='btn-cambiar-plan text-indigo-500 dark:text-indigo-300' onClick={handleFirstCardChange}>Click para otra opción<LiaExchangeAltSolid /></button>
                <motion.div
                  key={`firstCardPrice-${firstCardAnimationKey}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className='h2'>
                    <span>{firstCardChanged ? "Opción 2" : "Opción 1"}</span>
                    <span>{firstCardChanged ? "$165.000 ARS" : "$140.000 ARS"}</span>
                  </div>
                </motion.div>
                <h3>Ideal para pequeñas empresas</h3>
              </div>
              <div className='product-card-medium p-5 text-slate-700 dark:text-slate-400'>
                {firstCardItems.map(item => (
                  <motion.span
                    key={item.id}
                    className='flex items-center gap-1 p-1'
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <TiTick className="text-indigo-500 dark:text-indigo-300 text-lg" />{item.text}
                  </motion.span>
                ))}
                <motion.span
                  key={`firstCardSEO-${firstCardAnimationKey}`}
                  className='flex items-center gap-1 p-1'
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <TiTick className="text-indigo-500 dark:text-indigo-300 text-lg" />{firstCardChanged ? 'SEO avanzado' : 'SEO básico'}
                </motion.span>
                {firstCardChanged && additionalItemsOption2.map(item => (
                  <motion.span
                    key={item.id}
                    className='flex items-center gap-1 p-1'
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <TiTick className="text-indigo-500 dark:text-indigo-300 text-lg" />{item.text}
                  </motion.span>
                ))}
              </div>
              <div className='product-card-bottom'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="whitespace-nowrap rounded-lg bg-indigo-500 px-10 py-2 font-medium text-white shadow-xl transition-colors hover:bg-indigo-600 flex gap-2 items-center"
                  onClick={() => handleContractClick(1, firstCardChanged ? 2 : 1)}
                >
                  Contratar
                </motion.button>
              </div>
            </div>

            <div className='product-card w-80 h-auto bg-transparent border border-slate-700 dark:border-slate-400 rounded-lg p-5 flex flex-col'>
              <div className='product-card-top flex flex-col items-center justify-center text-slate-700 dark:text-slate-300'>
                <button className='btn-cambiar-plan text-indigo-500 dark:text-indigo-300' onClick={handleThirdCardChange}>Click para otra opción<LiaExchangeAltSolid /></button>
                <motion.div
                  key={`thirdCardPrice-${thirdCardAnimationKey}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className='h2'>
                    <span>{thirdCardChanged ? "Opción 2" : "Opción 1"}</span>
                    <span>{thirdCardChanged ? "$170.000 ARS" : "$145.000 ARS"}</span>
                  </div>
                </motion.div>
                <h3>Ideal para emprendedores</h3>
              </div>
              <div className='product-card-medium p-5 text-slate-700 dark:text-slate-400'>
                {thirdCardItems.map(item => (
                  <motion.span
                    key={item.id}
                    className='flex items-center gap-1 p-1'
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <TiTick className="text-indigo-500 dark:text-indigo-300 text-lg" />{item.text}
                  </motion.span>
                ))}
                <motion.span
                  key={`secondCardSEO-${thirdCardAnimationKey}`}
                  className='flex items-center gap-1 p-1'
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <TiTick className="text-indigo-500 dark:text-indigo-300 text-lg" />{thirdCardChanged ? 'SEO avanzado' : 'SEO básico'}
                </motion.span>
                {thirdCardChanged && additionalItemsOption2.map(item => (
                  <motion.span
                    key={item.id}
                    className='flex items-center gap-1 p-1'
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <TiTick className="text-indigo-500 dark:text-indigo-300 text-lg" />{item.text}
                  </motion.span>
                ))}
              </div>
              <div className='product-card-bottom'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="whitespace-nowrap rounded-lg bg-indigo-500 px-10 py-2 font-medium text-white shadow-xl transition-colors hover:bg-indigo-600 flex gap-2 items-center"
                  onClick={() => handleContractClick(3, thirdCardChanged ? 2 : 1)}
                >
                  Contratar
                </motion.button>
              </div>
            </div>

            <div className='product-card w-80 h-auto bg-transparent border border-slate-700 dark:border-slate-400 rounded-lg p-5 flex flex-col'>
              <div className='product-card-top flex flex-col items-center justify-center text-slate-700 dark:text-slate-300'>
                <button className='btn-cambiar-plan text-indigo-500 dark:text-indigo-300' onClick={handleSecondCardChange}>Click para otra opción<LiaExchangeAltSolid /></button>
                <motion.div
                  key={`secondCardPrice-${secondCardAnimationKey}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className='h2'>
                    <span>{secondCardChanged ? "Opción 2" : "Opción 1"}</span>
                    <span>{secondCardChanged ? "$174.000 ARS" : "$150.000 ARS"}</span>
                  </div>
                </motion.div>
                <h3>Ideal para empresas y cooperativas</h3>
              </div>
              <div className='product-card-medium p-5 text-slate-700 dark:text-slate-400'>
                {secondCardItems.map(item => (
                  <motion.span
                    key={item.id}
                    className='flex items-center gap-1 p-1'
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <TiTick className="text-indigo-500 dark:text-indigo-300 text-lg" />{item.text}
                  </motion.span>
                ))}
                <motion.span
                  key={`secondCardSEO-${secondCardAnimationKey}`}
                  className='flex items-center gap-1 p-1'
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <TiTick className="text-indigo-500 dark:text-indigo-300 text-lg" />{secondCardChanged ? 'SEO avanzado' : 'SEO básico'}
                </motion.span>
                {secondCardChanged && additionalItemsOption2.map(item => (
                  <motion.span
                    key={item.id}
                    className='flex items-center gap-1 p-1'
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <TiTick className="text-indigo-500 dark:text-indigo-300 text-lg" />{item.text}
                  </motion.span>
                ))}
              </div>
              <div className='product-card-bottom'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="whitespace-nowrap rounded-lg bg-indigo-500 px-10 py-2 font-medium text-white shadow-xl transition-colors hover:bg-indigo-600 flex gap-2 items-center"
                  onClick={() => handleContractClick(2, secondCardChanged ? 2 : 1)}
                >
                  Contratar
                </motion.button>
              </div>
            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
};

export default Servicios;

