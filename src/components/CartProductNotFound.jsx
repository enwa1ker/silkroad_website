import React from 'react';
import '../css/CartProductNotFound.css'; 
import emptyImage from '../assets/CartEmpty.png';
function CartProductNotFound() {
    return (
        <div className="cart-not-found-container">
             <img src={emptyImage} alt="Empty" className="cart-empty-image" />
            <h2>Упс!</h2>
            <p>Ваша корзина пуста(</p>
            <p>Почему бы не исправить это?</p>
        </div>
    );
}

export default CartProductNotFound;