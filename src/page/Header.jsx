import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.svg'
import searchIcon from '../images/search.svg'
import fav from '../images/fav.svg'
import burger from '../page/catalogPage/catalogPics/burger.svg'
import { useState, useContext } from 'react'
import { CartContext } from '../CardContext'

export default function Header() { 
  const [state, setState] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const openSearch = () => {
    setState(!state);
  }

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setState(false);
      setSearchQuery("");
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (state) setState(false); // Close search if opening menu
  }

  const goToCart = () => {
    navigate('/cart');
    setIsMenuOpen(false);
  }

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  }
  
  return (
    <header className="relative w-full h-[88px] px-4 md:px-6 bg-[#FAFAFA] flex items-center justify-between z-50">
      <Link to="/" className="w-[180px] md:w-[228px] h-[50px] md:h-[60px] flex justify-start items-center">
        <img src={logo} alt="Логотип" className="h-full w-auto cursor-pointer hover:opacity-80 transition" />
      </Link>

      <nav className="hidden md:flex gap-[35px] h-[16px] text-[#121212] font-roboto font-medium text-sm mx-auto">
        <Link to="/novinki" className="hover:text-red-600 transition-colors uppercase">НОВИНКИ</Link>
        <Link to="/price" className="hover:text-red-600 transition-colors uppercase">ПРАЙС</Link>
        <Link to="/contacts" className="hover:text-red-600 transition-colors uppercase">КОНТАКТЫ</Link>
        <Link to="/brand" className="hover:text-red-600 transition-colors uppercase">БРЕНД</Link>
        <Link to="/about" className="hover:text-red-600 transition-colors uppercase">О НАС</Link>
      </nav>

      <div className="flex items-center space-x-6 md:space-x-15">
        <div className="flex items-center">
          <button
            aria-label="Поиск" 
            onClick={openSearch} 
            className="flex-shrink-0 w-8 h-8 hover:scale-110 transition-transform"
          >
            <img src={searchIcon} alt="Search" className="w-full h-full" />
          </button>
          
          {state && (
            <input
              type="text"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="absolute top-[88px] left-0 right-0 md:relative md:top-auto md:left-auto md:right-auto md:ml-4 border border-gray-300 rounded-md px-4 py-2 bg-white md:w-48 focus:border-red-500 shadow-lg md:shadow-none outline-none z-50"
              autoFocus
            />
          )}
        </div>

        <button 
          className="relative w-8 h-8 flex-shrink-0 hover:scale-110 transition-transform"
          aria-label="Корзина"
          onClick={goToCart}
        >
          <img src={fav} alt="cart" className="w-full h-full" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#FF0505] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] flex items-center justify-center">
              {cartItems.reduce((acc, item) => acc + item.qty, 0)}
            </span>
          )}
        </button>

        <button 
          className='md:hidden block w-8 h-8 flex-shrink-0'
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <img 
            src={burger} 
            alt="burger" 
            className={`w-full h-full transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-12">
            <Link to="/" onClick={handleNavLinkClick} className="w-[150px] h-[40px]">
              <img src={logo} alt="Логотип" className="h-full w-auto" />
            </Link>
            <button 
              onClick={toggleMenu}
              className="w-10 h-10 flex items-center justify-center text-3xl font-light hover:text-red-600 transition"
              aria-label="Закрыть"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col space-y-8 text-xl font-roboto font-semibold text-[#121212]">
            <Link to="/novinki" onClick={handleNavLinkClick} className="hover:text-red-600 transition-colors uppercase border-b pb-2 border-gray-100">НОВИНКИ</Link>
            <Link to="/price" onClick={handleNavLinkClick} className="hover:text-red-600 transition-colors uppercase border-b pb-2 border-gray-100">ПРАЙС</Link>
            <Link to="/contacts" onClick={handleNavLinkClick} className="hover:text-red-600 transition-colors uppercase border-b pb-2 border-gray-100">КОНТАКТЫ</Link>
            <Link to="/brand" onClick={handleNavLinkClick} className="hover:text-red-600 transition-colors uppercase border-b pb-2 border-gray-100">БРЕНД</Link>
            <Link to="/about" onClick={handleNavLinkClick} className="hover:text-red-600 transition-colors uppercase border-b pb-2 border-gray-100">О НАС</Link>
          </nav>

          <div className="mt-auto py-8 text-center text-gray-500 text-sm">
            © 2024 Тепловик. Все права защищены.
          </div>
        </div>
      </div>

    </header>
  )
}
