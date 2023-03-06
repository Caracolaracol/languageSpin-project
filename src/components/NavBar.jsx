import { NavLink } from 'react-router-dom';
import argentinaLogo from '../assets/argentina.png'
import brazilLogo from '../assets/brazil.png'
import italyLogo from '../assets/italy.png'
import englishLogo from '../assets/united-kingdom.png'

function NavBar() {
  return (
    <div key='transicion' className='my-8 flex justify-center transicion'>
      <ul className='flex items-center gap-3 sm:gap-6'>
        <li>
          <NavLink to='/ingles' className={({ isActive }) => (isActive ? 'active' : 'notactive')}>
              <img src={englishLogo} className='w-[50px] h-[50px] sm:w-[6rem] sm:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[10rem]  lg:h-[10rem]' />
              <p className='text-[12px] font-semibold'>
                  Ingles
              </p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/italiano' className={({ isActive }) => (isActive ? 'active' : 'notactive')}>

              <img src={italyLogo} className='w-[50px] h-[50px] sm:w-[6rem] sm:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[10rem]  lg:h-[10rem]' />
              <p className='text-[12px] font-semibold'>
                Italiano
              </p>

          </NavLink> 
        </li>
        <li className='max-w-[74px] sm:max-w-fit'>
          <NavLink
            to='/portugues'
            className={({ isActive }) => (isActive ? 'active' : 'notactive')}>
 
              <img src={brazilLogo} className='w-[50px] h-[50px] sm:w-[6rem] sm:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[10rem]  lg:h-[10rem]' />
              <p className='text-[12px] font-semibold'>
                Portugués
              </p>

          </NavLink>
        </li>
        <li>
          <NavLink to='/espanol' className={({ isActive }) => (isActive ? 'active' : 'notactive')}>

              <img src={argentinaLogo} className='w-[50px] h-[50px] sm:w-[6rem] sm:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[10rem]  lg:h-[10rem]' />
              <p className='text-[12px] font-semibold'>
                Español
              </p>

          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
