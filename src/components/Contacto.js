import React, { useState, useRef } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { PiTerminalWindow } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";
import { TbTilde } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import '../App.css';

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [description, setDescription] = useState('');
  const [isDescriptionSubmitted, setIsDescriptionSubmitted] = useState(false);
  const [showEnterMessage, setShowEnterMessage] = useState(false);
  const cmdWindowRef = useRef(null);

  const handleEmailSubmit = (e) => {
    if (e.key === 'Enter') {
      setIsEmailSubmitted(true);
      setShowEnterMessage(false);
    }
  };

  const handleNameSubmit = (e) => {
    if (e.key === 'Enter') {
      setIsNameSubmitted(true);
      setShowEnterMessage(false);
    }
  };

  const handleDescriptionSubmit = (e) => {
    if (e.key === 'Enter') {
      setIsDescriptionSubmitted(true);
      setShowEnterMessage(false);
    }
  };

  const handleRestart = () => {
    setEmail('');
    setIsEmailSubmitted(false);
    setName('');
    setIsNameSubmitted(false);
    setDescription('');
    setIsDescriptionSubmitted(false);
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:elianamaiu@yahoo.com.ar?subject=Nombre: ${name} Correo: ${email}&body=${description}`;
    window.location.href = mailtoLink;
  };

  const handleMouseDown = (e) => {
    const elem = cmdWindowRef.current;
    let startX = e.clientX - elem.offsetLeft;
    let startY = e.clientY - elem.offsetTop;

    const handleMouseMove = (e) => {
      elem.style.left = `${e.clientX - startX}px`;
      elem.style.top = `${e.clientY - startY}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleInputChange = (e, setValue) => {
    setValue(e.target.value);
    setShowEnterMessage(e.target.value.length > 0);
  };

  return (
    <div className='contacto contenedor' id='contacto'>
      <div className="cmd-window bg-slate-200 dark:bg-slate-700" ref={cmdWindowRef} style={{ position: 'absolute' }}>
        <div className='header bg-slate-300 text-slate-700 dark:text-slate-50 dark:bg-slate-600' onMouseDown={handleMouseDown}>
          <div className='header-top'>
            <div className='tab bg-slate-200 dark:bg-slate-700'>
              <span><PiTerminalWindow /></span>
              <h3>contact@elydevelopsit</h3>
              <span className='icon-close'><IoIosClose /></span>
            </div>
            <div className='icons-left'>
              <span className='icon-add'><IoIosAdd /></span>
              <span className='icon-divider text-slate-400 dark:text-slate-500'><RxDividerVertical /></span>
              <span className='icon-down'><FaChevronDown /></span>
            </div>
          </div>
          <div className='icons-right'>
            <span className='icon-minimize'><FaWindowMinimize /></span>
            <span className='icon-maxime'><FaRegWindowMaximize /></span>
            <span className='icon-close'><IoIosClose /></span>
          </div>
        </div>

        <div className='content'>
          <div className='content-descripcion text-slate-700 dark:text-slate-50'>
            Hey! Estoy emocionada por saber de tus ideas, ¿Conversamos? ...<br />
            {isDescriptionSubmitted ? (
              <div>
                Perfecto, terminamos, antes de enviar el email asegurate de que tus <span className='text-indigo-700 dark:text-indigo-400'>datos sean los correctos:</span> <br /><br />
                <div className='datos-confirmados'><span className='text-indigo-700 dark:text-indigo-400'>Email:</span> {email} <FaCheck className='check-icon text-green-500' /></div>
                <div className='datos-confirmados'><span className='text-indigo-700 dark:text-indigo-400'>Nombre:</span> {name} <FaCheck className='check-icon text-green-500' /></div>
                <div className='datos-confirmados'><span className='text-indigo-700 dark:text-indigo-400'>Descripción:</span> {description} <FaCheck className='check-icon text-green-500' /></div><br />
                <button className='btn-restart bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-slate-300' onClick={handleRestart}><IoIosArrowForward />Corregir</button>
                <button type="button" className='btn-enviar bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-slate-300' onClick={handleSubmit}><IoIosArrowForward />Enviar</button>
              </div>
            ) : isNameSubmitted ? (
              <div>
                Lindo nombre! Y dime {name}, <span className='text-indigo-700 dark:text-indigo-400'>¿Cómo puedo ayudarte?</span><br /><br />
                <div className='content-input'>
                  <span className='input-prompt text-slate-400'><FiArrowRight className='input-arrow text-indigo-700 dark:text-indigo-400'/><TbTilde className='input-tilde text-slate-700 dark:text-slate-50' />Tu mensaje:</span>
                  <input
                    type='text'
                    className='input-field bg-slate-200 dark:bg-slate-700 text-indigo-700 dark:text-indigo-400'
                    value={description}
                    onChange={(e) => handleInputChange(e, setDescription)}
                    onKeyDown={handleDescriptionSubmit}
                    placeholder='tu mensaje'
                  />
                  {showEnterMessage && description.length > 0 && <span className='enter-message text-indigo-700 dark:text-indigo-400'>Presionar enter para continuar</span>}
                </div>
              </div>
            ) : isEmailSubmitted ? (
              <div>
                Perfecto! Y cómo es <span className='text-indigo-700 dark:text-indigo-400'>tu nombre?</span><br /><br />
                <div className='content-input'>
                  <span className='input-prompt text-slate-400'><FiArrowRight className='input-arrow text-indigo-700 dark:text-indigo-400'/><TbTilde className='input-tilde text-slate-700 dark:text-slate-50' />Ingresar nombre:</span>
                  <input
                    type='text'
                    className='input-field bg-slate-200 dark:bg-slate-700 text-indigo-700 dark:text-indigo-400'
                    value={name}
                    onChange={(e) => handleInputChange(e, setName)}
                    onKeyDown={handleNameSubmit}
                    placeholder='tu nombre'
                  />
                  {showEnterMessage && name.length > 0 && <span className='enter-message text-indigo-700 dark:text-indigo-400'>Presionar enter para continuar</span>}
                </div>
              </div>
            ) : (
              <div>
                Antes de empezar, ¿Podrías darme <span className='text-indigo-700 dark:text-indigo-400'>tu email?</span><br /><br />
                <div className='content-input text-indigo-700 dark:text-indigo-400'>
                  <span className='input-prompt text-slate-400'><FiArrowRight className='input-arrow text-indigo-700 dark:text-indigo-400'/><TbTilde className='input-tilde text-slate-700 dark:text-slate-50' />Ingresar email:</span>
                  <input
                    type='text'
                    className='input-field bg-slate-200 dark:bg-slate-700 text-indigo-700 dark:text-indigo-400'
                    value={email}
                    onChange={(e) => handleInputChange(e, setEmail)}
                    onKeyDown={handleEmailSubmit}
                    placeholder='tu email'
                  />
                  {showEnterMessage && email.length > 0 && <span className='enter-message text-indigo-700 dark:text-indigo-400'>Presionar enter para continuar</span>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
