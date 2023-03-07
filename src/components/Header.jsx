import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logosintexto1 from '../assets/logosintexto1.png';
import { Container } from './utils/utils';

function Header() {
  return (
    <div className='py-2 md:py-4 border-b border-zinc-300 shadow-sm'>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
            <Link to='/'>
              <img className='hidden sm:block w-40 h-40' src={logo} />
              <img className='sm:hidden w-20 h-20' src={logosintexto1} />
            </Link>
          </div>
          <div className='flex flex-col justify-center'>
            <p className='text-2xl text-zinc-800 font-extrabold md:text-5xl md:leading-[4rem]'>
              Language Spin
            </p>
            <p className='text-[10px] md:text-base font-bold uppercase text-right text-verdeSpin'>
              Academia de Idiomas
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
