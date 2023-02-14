import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <ul className='flex gap-6 mx-2'>
        <li>
          <Link to='/ingles'>Inglés</Link>
        </li>
        <li>
          <Link to='/italiano'> Italiano </Link>
        </li>
        <li>
          <Link to='/portugues'>Portugués </Link>
        </li>
        <li>
          <Link to='/espanol'>Español </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
