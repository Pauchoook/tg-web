import React, { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

function Form(props) {
   const [country, setCountry] = useState('');
   const [city, setCity] = useState('');
   const [subject, setSubject] = useState('');
   const {tg} = useTelegram();

   const onSendData = useCallback(() => {
      const data = {
         country,
         city,
         subject
      }

      // отправка данных боту
      tg.sendData(JSON.stringify(data));
   }, [country, city, subject]);

   useEffect(() => {
      // вешаем слушатеть на главную кнопку
      tg.onEvent('mainButtonClicked', onSendData);
      return () => {
         // отписка от слушателя, когда компонент демонтируется
         tg.offEvent('mainButtonClicked', onSendData);
      }
   }, []);

   useEffect(() => {
      // главная кнопка
      tg.MainButton.setParams({
         test: 'Отправить данные'
      });
   }, []);

   useEffect(() => {
      // небольшая валидация
      if (!country || !city) {
         tg.MainButton.hide();
      } else {
         tg.MainButton.show();
      }
   }, [country, city]);

   const onChangeContry = (e) => {
      setCountry(e.target.value);
   }

   const onChangeCity = (e) => {
      setCity(e.target.value);
   }

   const onChangeSubject = (e) => {
      setSubject(e.target.value);
   }

   return (
      <div className='form'>
         <h3>Введите ваши данные</h3>
         <input 
            type="text" 
            className="input" 
            placeholder='Страна'
            value={country}
            onChange={onChangeContry}
         />
         <input 
            type="text" 
            className="input" 
            placeholder='Город'
            value={city}
            onChange={onChangeCity}
         />
         <select 
         value={subject}
         onChange={onChangeSubject}
         className="select">
            <option value="physical">Физ. лицо</option>
            <option value="legal">Юр. лицо</option>
         </select>
      </div>
   );
}

export default Form;