import { NavLink } from 'react-router-dom';
import argentinaLogo from '../assets/argentina.png'
import brazilLogo from '../assets/brazil.png'
import italyLogo from '../assets/italy.png'
import englishLogo from '../assets/united-kingdom.png'

function NavBar() {
  return (
    <div key='transicion' className='my-8 flex justify-center transicion '>
      <ul className='flex items-center gap-2 sm:gap-6 pb-7'>
        <li className='shrink-0'>
          <NavLink to='/ingles' className={({ isActive }) => (isActive ? 'active' : 'notactive')}>
              <img src={englishLogo} className='w-[13vw] h-[13vw] sm:w-[6rem] sm:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[10rem]  lg:h-[10rem]' />
              <p className='text-[10px] lg:text-[16px] font-semibold'>
                  Ingles
              </p>
          </NavLink>
        </li>
        <li className='shrink-0'>
          <NavLink to='/italiano' className={({ isActive }) => (isActive ? 'active' : 'notactive')}>

              <img src={italyLogo} className='w-[13vw] h-[13vw] sm:w-[6rem] sm:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[10rem]  lg:h-[10rem]' />
              <p className='text-[10px] lg:text-[16px] font-semibold'>
                Italiano
              </p>

          </NavLink> 
        </li>
        <li className='max-w-[74px] sm:max-w-fit shrink-0'>
          <NavLink
            to='/portugues'
            className={({ isActive }) => (isActive ? 'active' : 'notactive')}>
 
              <img src={brazilLogo} className='w-[13vw] h-[13vw] sm:w-[6rem] sm:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[10rem]  lg:h-[10rem]' />
              <p className='text-[10px] lg:text-[16px] font-semibold'>
                Portugués
              </p>

          </NavLink>
        </li>
        <li className='shrink-0'>
          <NavLink to='/espanol' className={({ isActive }) => (isActive ? 'active' : 'notactive')}>

              <img src={argentinaLogo} className='w-[13vw] h-[13vw] sm:w-[6rem] sm:h-[6rem] md:w-[9rem] md:h-[9rem] lg:w-[10rem]  lg:h-[10rem]' />
              <p className='text-[10px] lg:text-[16px] font-semibold'>
                Español
              </p>

          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
