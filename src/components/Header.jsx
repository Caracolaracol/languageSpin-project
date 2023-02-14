import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div className='flex flex-row flex-grow justify-between items-center mx-4 my-2 border-b-2 md:mx-10 md:my-6 pb-3 md:pb-4  '>
      <div>
        <Link to='/' >
          <img className='w-32 h-32 md:w-40 md:h-40 xl:w-52 xl:h-52 ' src={logo} />
        </Link>
        
      </div>
      <div className='flex'>
        <h1 className='self-center text-lg md:text-2xl'>Language Spin Idiomas</h1>
      </div>
    </div>
  );
}

export default Header;
