import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div className='flex justify-between flex-row items-center mx-4 my-2 border-b-2 h-[9rem] md:h-[12rem] xl:h-[14.5rem] md:mx-10 md:my-6 pb-3 md:pb-4  '>
      <div>
        <Link to='/'>
          <img className='w-32 h-32 md:w-40 md:h-40 xl:w-52 xl:h-52 ' src={logo} />
        </Link>
      </div>
      <div className='h-[4rem] md:h-[8rem] flex flex-col justify-center'>
          <h1 className='text-lg font-bold align-text-bottom md:text-4xl md:leading-[4rem]' >Language Spin Idiomas</h1>

          
      </div>
    </div>
  );
}

export default Header;
