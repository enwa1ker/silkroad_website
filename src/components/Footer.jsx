import React from 'react';
import '../css/Footer.css';
import sk from '../assets/silkroad.png'
import ig from '../assets/instagram.png'
import tg from '../assets/telegram.png'
import wh from '../assets/whatsapp.png'

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#252525', color: '#fff' }}>
      <div className="footer-content">
        <div className="footer-left">
          <h2>Silk Road <img src={sk} alt="" /></h2>
          <p>Покупки стало делать ещё проще. <br />
            Быстрая и удобная доставка
          </p>
        </div>
        <div className="footer-right">
          <h3>Свяжитесь с нами</h3>
          <ul>
            <li>Email: silkroad@example.com</li>
            <li>Телефон: +996 123 456 789</li>
            <li>Адрес: ул. Примерная, г. Бишкек</li>
            
                <a href=""><img src={ig} alt="" />
                <img src={tg} alt="" />
                <img src={wh} alt="" />
       </a>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Silk Road. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
