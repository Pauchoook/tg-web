import React from 'react';
import Button from '../Button/Button';
import './ProductItem.css';

function ProductItem({product, className, onAdd}) {
   const onAddHandler = () => {
      onAdd(product);
   }

   return (
      <div className={`product + ${className}`}>
         <div className="img" />
         <h4 className='title'>{product.title}</h4>
         <p className="description">{product.description}</p>
         <div className="price">
            <span>Стоимость: <b>{product.price}</b></span>
         </div>
         <Button className='add-btn' onClick={onAddHandler}>
            Добавить в корзину
         </Button>
      </div>
   );
}

export default ProductItem;