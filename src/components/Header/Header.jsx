import React from 'react';
import Button from '../Button/Button';
import './Header.css';

function Header(props) {
   const tg = window.Telegram.WebApp;
  
   function onClose() {
      tg.close();
   }

   return (
      <div className='Header'>
         <Button onClick={onClose}>Закрыть</Button>
         <span className="username">{tg.initDataUnsafe?.user?.username}</span>
      </div>
   );
}

export default Header;