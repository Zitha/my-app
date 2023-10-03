import React, { useState, useEffect, useRef, useContext } from 'react';
import { BsListCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/context'
import logo from '../../assets/logo.png';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const { isAuth, setIsAuth } = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center pt-2 w-screen mb-3 pr-4">
      <Link>
        <div className='flex flex-row justify-center items-center'>
          <img src={logo} alt="logo" width={50} height={30} className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
          <p className='font-Karla text-xl lg:text-4xl font-bold -mx-1 lg:-mx-0'>Studa</p>
        </div>
      </Link>
      <div className="h-[35px] lg:w+[400px] lg:h-[69px] font-Inter text-xs lg:text-2xl flex flex-row justify-center items-center gap-4 font-semibold">
        <Link to="/tasks">
          <div className="border-[3px] border-black rounded-full w-[80px] lg:w-[150px]">
            <p className="text-xs text-center lg:text-xl">
              Tasks
            </p>
          </div></Link>
        <Link to="/motivation">
          <div className="border-[3px] border-black rounded-full w-[80px] lg:w-[150px]">
            <p className="text-xs text-center lg:text-xl">
              Positive Vibes
            </p>
          </div>
        </Link>
        <Link to="/pomodoro">
          <div className="border-[3px] border-black rounded-full w-[80px] lg:w-[150px]">
            <p className="text-xs text-center lg:text-xl">
              Pomodoro
            </p>
          </div>
        </Link>
        <Link to="/flashcards">
          <div className="border-[3px] border-black rounded-full w-[80px] lg:w-[150px]">
            <p className="text-xs text-center lg:text-xl">
              Flash Cards
            </p>
          </div>
        </Link>
        <Link to="/notes">
          <div className="border-[3px] border-black rounded-full w-[80px] lg:w-[150px]">
            <p className="text-xs text-center lg:text-xl">
              Notes Taker
            </p>
          </div>
        </Link>
        <Link to="/hub">
          <div className="border-[3px] border-black rounded-full w-[80px] lg:w-[150px]">
            <p className="text-xs text-center lg:text-xl">
              Learning Hub
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
