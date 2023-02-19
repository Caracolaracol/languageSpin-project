import { NavLink } from 'react-router-dom';


function NavBar() {
  

  return (
    <div className='ml-auto my-8 flex justify-center'>
      <ul className='flex gap-4 sm:gap-6 mx-2'>
        <li>
          <NavLink
            to='/ingles'
            className={({ isActive }) =>
              isActive ? 'active' : 'notactive'
            }
          >Inglés</NavLink>
        </li>
        <li>
          <NavLink to='/italiano'
            className={({ isActive }) =>
              isActive ? 'active' : 'notactive'
            }>Italiano</NavLink>
        </li>
        <li>
          <NavLink to='/portugues'
            className={({ isActive }) =>
            isActive ? 'active' : 'notactive'
            }>Portugués</NavLink>
        </li>
        <li>
          <NavLink to='/espanol'
            className={({ isActive }) =>
            isActive ? 'active' : 'notactive'
            }>Español</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
