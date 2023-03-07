import { NavLink } from 'react-router-dom';

import ukFlag from '../assets/united-kingdom.png';
import itFlag from '../assets/italy.png';
import brFlag from '../assets/brazil.png';
import arFlag from '../assets/argentina.png';
import { Container } from '../components/utils/utils';

function NavBar() {
  return (
    <div className='bg-verdeSpin py-4 md:py-8 md:mb-12'>
      <Container>
        <ul className='flex items-center justify-between md:justify-center md:gap-20'>
          <li>
            <NavLink to='/ingles' className='flex flex-col items-center justify-center'>
              {({ isActive }) => (
                <>
                  <img
                    src={ukFlag}
                    className={`${
                      isActive && 'brightness-125'
                    }  w-16 h-16 md:w-32 md:h-32 object-cover rounded-full transition hover:brightness-110`}
                  />
                  <p
                    className={`text-sm md:text-base mt-2 px-2 rounded font-bold text-white ${
                      isActive ? 'bg-rojoSpin' : 'bg-transparent'
                    }`}>
                    Inglés
                  </p>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to='/italiano' className='flex flex-col items-center justify-center'>
              {({ isActive }) => (
                <>
                  <img
                    src={itFlag}
                    className={`${
                      isActive && 'brightness-125'
                    }  w-16 h-16 md:w-32 md:h-32 object-cover rounded-full transition hover:brightness-110`}
                  />
                  <p
                    className={`text-sm md:text-base mt-2 px-2 rounded font-bold text-white ${
                      isActive ? 'bg-rojoSpin' : 'bg-transparent'
                    }`}>
                    Italiano
                  </p>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to='/portugues' className='flex flex-col items-center justify-center'>
              {({ isActive }) => (
                <>
                  <img
                    src={brFlag}
                    className={`${
                      isActive && 'brightness-125'
                    }  w-16 h-16 md:w-32 md:h-32 object-cover rounded-full transition hover:brightness-110`}
                  />
                  <p
                    className={`text-sm md:text-base mt-2 px-2 rounded font-bold text-white ${
                      isActive ? 'bg-rojoSpin' : 'bg-transparent'
                    }`}>
                    Portugués
                  </p>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to='/espanol' className='flex flex-col items-center justify-center'>
              {({ isActive }) => (
                <>
                  <img
                    src={arFlag}
                    className={`${
                      isActive && 'brightness-125'
                    }  w-16 h-16 md:w-32 md:h-32 object-cover rounded-full transition hover:brightness-110`}
                  />
                  <p
                    className={`text-sm md:text-base mt-2 px-2 rounded font-bold text-white ${
                      isActive ? 'bg-rojoSpin' : 'bg-transparent'
                    }`}>
                    Español
                  </p>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default NavBar;
