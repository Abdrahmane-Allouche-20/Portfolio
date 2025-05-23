import React, { useState ,useRef} from 'react'
import { NavLink } from 'react-router-dom'
import { house, Menu, X } from '../assets/icons'
import { motion, AnimatePresence } from 'framer-motion'
import { IdCard,Laptop,Mail  } from 'lucide-react';
import { Download } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false)
const cv=useRef()
const handleDownloadCv = () => {
  const link = document.createElement("a");
  link.href = "/cv.pdf"; 
  link.download = "my-cv.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  const navLinks = (
    <>
      <NavLink
        onClick={()=>setIsOpen(false)}
        to="/About"
    
        className={({ isActive }) =>
          `${isActive ? "text-blue-600  translate-x-3 md:translate-x-0 md:-translate-y-2" : "text-black  md:hover:-translate-x-0 hover:translate-x-3 md:hover:-translate-y-1"} 
        transform duration-300  flex items-center gap-3 `
        }
      >
        <IdCard />
        About
      </NavLink>
      <NavLink 
      onClick={()=>setIsOpen(false)}
      to='/Contact' 
      className={({ isActive }) =>
          `${isActive ? "text-blue-600  translate-x-3 md:translate-x-0 md:-translate-y-2" : "text-black  md:hover:-translate-x-0 hover:translate-x-3 md:hover:-translate-y-1"}
      transform duration-300  flex items-center gap-3`
        }>
           <  Mail 
         />
        Contact
      </NavLink>
      <NavLink
       to='/Projects'
      onClick={()=>setIsOpen(false)}
      className={({ isActive }) =>
          `${isActive ? "text-blue-600  translate-x-3 md:translate-x-0 md:-translate-y-2" : "text-black  md:hover:-translate-x-0 hover:translate-x-3 md:hover:-translate-y-1"}
      transform duration-300  flex items-center gap-3`
        }>
           <Laptop 
           
            />
        Projects
      </NavLink>
      <button 
      ref={cv}
      onClick={handleDownloadCv}
      className='p-2 text-sm flex cursor-pointer items-center bg-gradient-to-br w-fit rounded-xl from-blue-500 to-sky-400 text-white  gap-3'>
       <Download className='  w-4'/>      Download
      </button>
    </>
  )

  
  return (
    <header className='absolute top-0 left-0 right-0 z-50 bg-transparent max-w-5xl mx-auto px-4 sm:px-16 py-4'>
      <div className='flex justify-between items-center'>
        <NavLink to='/'>
          <img
            src={house}
            alt='House SVG'
            className='w-7 md:w-8'
            width={32}
            height={32}
            loading='lazy'
          />        </NavLink>

        {/*Desktop nav */}
        <nav className='hidden md:flex text-lg gap-7 font-medium'>
          {navLinks}
        </nav>


        <div className='md:hidden mt-1'>
          <button onClick={() => setIsOpen(prev => !prev)}>
            {isOpen ? <img src={X} alt='close button' height={28} width={28} /> : <img src={Menu} alt='close button' height={28} width={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
          
            className='md:hidden mt-4 flex flex-col gap-4 text-lg font-medium glass p-4 rounded-lg shadow-lg'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
