import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logosintexto1 from '../assets/logosintexto1.png'
import logosintexto2 from '../assets/logosintexto2.png'
function Header() {
  return (
    <div className='flex justify-between flex-row items-center mx-4 my-2 border-b-2 h-[6rem] md:h-[10rem] xl:h-[14.5rem] md:mx-10 md:my-6 pb-3 md:pb-4  '>
      <div className='my-auto'>
        <Link to='/'>
          <img className='hidden md:block w-24 h-24 md:w-36 md:h-36 xl:w-52 xl:h-52 ' src={logo} />
          <img className='md:hidden w-24 h-24 md:w-40 md:h-40 xl:w-52 xl:h-52 ' src={logosintexto1} />
        </Link>
      </div>
      <div className='h-[4rem] md:h-[8rem] flex flex-col justify-center'>
          <h1 className='text-lg font-bold align-text-bottom md:text-5xl md:leading-[4rem] opacity-90 drop-shadow-xl '>Language Spin Idiomas</h1>
      </div>
    </div>
  );
}

export default Header;
