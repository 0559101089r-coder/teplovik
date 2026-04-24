import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/footerLogo.svg';
import inst from '../page/contactPage/contactPics/socials.svg';

export default function Footer() {
  return (
    <footer className="w-full bg-[#121212] text-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-[200px] md:w-[248px] h-auto mb-4 md:-mt-5"
            />
          </Link>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white uppercase tracking-wider">МЕНЮ</h3>
          <ul className="space-y-2 text-sm text-[#B3B3B3]">
            <li><Link to="/novinki" className="hover:text-white transition">Новости</Link></li>
            <li><Link to="/price" className="hover:text-white transition">Прайс</Link></li>
            <li><Link to="/brand" className="hover:text-white transition">Бренд</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white uppercase tracking-wider">ИНФОРМАЦИЯ</h3>
          <ul className="space-y-2 text-sm text-[#B3B3B3]">
            <li><Link to="/policy" className="hover:text-white transition">Конфиденциальность</Link></li>
            <li><Link to="/contacts" className="hover:text-white transition">Контакты</Link></li>
            <li><Link to="/about" className="hover:text-white transition">О нас</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white uppercase tracking-wider">СОЦСЕТИ</h3>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center group"
            >
              <img
                src={inst}
                className="w-10 h-10 md:w-12 md:h-12 opacity-80 group-hover:opacity-100 transition duration-300"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-8 border-t border-white/10 text-center md:text-left">
        <p className="text-[#B3B3B3] text-xs">
          © 2024 Тепловик. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
