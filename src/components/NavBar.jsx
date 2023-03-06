import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='my-4 md:my-8'>
      <ul className='flex items-center justify-between md:justify-center md:gap-20'>
        <li>
          <NavLink to='/ingles' className='flex flex-col items-center justify-center'>
            {({ isActive }) => (
              <>
                <img
                  src='./src/assets/united-kingdom.png'
                  className={`${
                    isActive ? '' : 'brightness-[0.85]'
                  }  w-16 h-16 md:w-32 md:h-32 object-cover rounded-full transition hover:brightness-100`}
                />
                <p
                  className={`text-sm md:text-base mt-1 font-bold text-zinc-600 ${
                    isActive && 'text-verdeSpin'
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
                  src='./src/assets/italy.png'
                  className={`${
                    isActive ? '' : 'brightness-[0.85]'
                  }  w-16 h-16 md:w-32 md:h-32 object-cover rounded-full transition hover:brightness-100`}
                />
                <p
                  className={`text-sm md:text-base mt-1 font-bold text-zinc-600 ${
                    isActive && 'text-verdeSpin'
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
                  src='./src/assets/brazil.png'
                  className={`${
                    isActive ? '' : 'brightness-[0.85]'
                  }  w-16 h-16 md:w-32 md:h-32 object-cover rounded-full transition hover:brightness-100`}
                />
                <p
                  className={`text-sm md:text-base mt-1 font-bold text-zinc-600 ${
                    isActive && 'text-verdeSpin'
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
                  src='./src/assets/argentina.png'
                  className={`${
                    isActive ? '' : 'brightness-[0.85]'
                  }  w-16 h-16 md:w-32 md:h-32 object-cover rounded-full transition hover:brightness-100`}
                />
                <p
                  className={`text-sm md:text-base mt-1 font-bold text-zinc-600 ${
                    isActive && 'text-verdeSpin'
                  }`}>
                  Español
                </p>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
