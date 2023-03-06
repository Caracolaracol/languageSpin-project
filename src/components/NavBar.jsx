import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='my-4'>
      <ul className='flex items-center justify-between'>
        <NavLink to='/ingles' className={({ isActive }) => (isActive ? 'active' : 'notactive')}>
          <li className='flex flex-col items-center justify-center'>
            <img
              src='./src/assets/uk-flag.png'
              className='border border-zinc-300 w-16 h-16 object-cover rounded-full'
            />
            <p className='text-sm'>Inglés</p>
          </li>
        </NavLink>
        <NavLink to='/italiano' className={({ isActive }) => (isActive ? 'active' : 'notactive')}>
          <li className='flex flex-col items-center justify-center'>
            <img
              src='./src/assets/it-flag.png'
              className='border border-zinc-300 w-16 h-16 object-cover rounded-full'
            />
            <p className='text-sm'>Italiano</p>
          </li>
        </NavLink>
        <NavLink to='/portugues' className={({ isActive }) => (isActive ? 'active' : 'notactive')}>
          <li className='flex flex-col items-center justify-center'>
            <img
              src='./src/assets/pt-flag.png'
              className='border border-zinc-300 w-16 h-16 object-cover rounded-full'
            />

            <p className='text-sm'>Portugués</p>
          </li>
        </NavLink>
        <NavLink to='/espanol' className={({ isActive }) => (isActive ? 'active' : 'notactive')}>
          <li className='flex flex-col items-center justify-center'>
            <img
              src='./src/assets/es-flag.png'
              className='border border-zinc-300 w-16 h-16 object-cover rounded-full'
            />
            <p className='text-sm'>Español</p>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
