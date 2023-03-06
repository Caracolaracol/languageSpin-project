import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logosintexto1 from '../assets/logosintexto1.png';

function Header() {
  return (
    <div className='flex justify-between items-center pl-2 pr-4 pt-1 border-b border-zinc-300 shadow-sm'>
      <div>
        <Link to='/'>
          <img className='hidden sm:block w-32 h-32 md:w-40 md:h-40 xl:w-52 xl:h-52 ' src={logo} />
          <img
            className='sm:hidden w-[90px] h-[90px] md:w-40 md:h-40 xl:w-52 xl:h-52'
            src={logosintexto1}
          />
        </Link>
      </div>
      <div className='flex flex-col justify-center'>
        <p className='text-2xl font-extrabold md:text-5xl md:leading-[4rem]'>Language Spin</p>
        <p className='text-[10px] md:text-base text-zinc-600 font-bold uppercase text-right'>
          Academia de Idiomas
        </p>
      </div>
    </div>
  );
}

export default Header;
