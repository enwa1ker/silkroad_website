import React from 'react';
import '../css/FavNotFound.css'; 
import emptyImage from '../assets/FavBrokenHeart.png';
function FavNotFound() {
    return (
        <div className="not-found-container">
             <img src={emptyImage} alt="Empty" className="empty-image" />
            <h2>Упс!</h2>
            <p>ваш список любимых товаров пуст(</p>
            <p>Почему бы не добавить кое-что ?</p>
        </div>
    );
}

export default FavNotFound;
