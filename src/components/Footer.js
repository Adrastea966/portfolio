import React from 'react'

const Footer = ({ theme }) => {
  return (
    <div  className={`footer ${theme === 'dark' ? 'dark-mode' : ''}`} id='footer'>
      <h3>Hecho con 🤍 por @Ely</h3>
    </div>
  )
}

export default Footer