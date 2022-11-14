import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';
import './Header.css';

function Header(props) {
   const {onClose, user} = useTelegram();

   return (
      <div className='Header'>
         <Button onClick={onClose}>Закрыть</Button>
         <span className="username">{user?.username}</span>
      </div>
   );
}

export default Header;