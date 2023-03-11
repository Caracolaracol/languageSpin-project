import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaYoutube,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='grid grid-cols-3 grid-rows-2 sm:grid-cols-3 sm:grid-rows-1 grid-flow-dense bg-verdeSpin text-zinc-200 p-3 sm:p-4 sm:px-7 md:px-12 lg:px-[10vw] xl:px-[14vw] 2xl:px-[17vw] lg:p-8'>
      <ul className='row-span-2 flex flex-col justify-evenly w-[12rem] sm:w-[10rem] space-y-2 font-semibold text-xs sm:col-span-1-span-1 sm:place-self-center sm:row-span-1 md:w-auto sm:justify-self-start'>
        <li>
          <h1>CONTACTO</h1>
        </li>
        <li className='flex items-center gap-2'>
          <FaPhoneAlt className='w-4 h-4' />
          <p>383-4069803</p>
        </li>
        <li className='flex items-center gap-2'>
          <FaMapMarkerAlt className='w-4 h-4' />
          <p>Pje. Zambonini 1103, San Fernando del Valle de Catamarca</p>
        </li>
      </ul>
      
      <ul className='flex col-span-2 place-self-end justify-center gap-2 sm:gap-1 w-[12rem] mb-5 sm:w-auto sm:col-span-1 sm:place-self-center flex-wrap'>
        <h1 className=' relative font-semibold text-xs  left-2 sm:left-3 md:left-8 lg:left-8 -top-[2px]  w-[100%] flex-[0_0_100%]'>SOCIAL</h1>
        <li className='sm:pl-2'>
          <Link
            to='https://api.whatsapp.com/send?phone=543834069803&text=%C2%A1Gracias%20por%20comunicarte!%20Te%20vamos%20a%20responder%20lo%20m%C3%A1s%20pronto%20posible'
            target='_blank'>
            <FaWhatsapp className='h-9 w-9 hover:text-white hover:bg-opacity-30 transition bg-black bg-opacity-10 p-2 rounded-md ' />
          </Link>
        </li>
        <li className='sm:pl-2'>
          <Link to='https://www.instagram.com/languagespinidiomas/' target='_blank'>
            <FaInstagram className='h-9 w-9 hover:text-white hover:bg-opacity-30 transition bg-black bg-opacity-10 p-2 rounded-md' />
          </Link>
        </li>
        <li className='sm:pl-2'>
          <Link to='https://www.facebook.com/LanguageSpinArg/' target='_blank'>
            <FaFacebookF className='h-9 w-9 hover:text-white hover:bg-opacity-30 transition bg-black bg-opacity-10 p-2 rounded-md' />
          </Link>
        </li>
        <li className='sm:pl-2'>
          <Link to='https://www.youtube.com/@languagespin8138' target='_blank'>
            <FaYoutube className='h-9 w-9 hover:text-white hover:bg-opacity-30 transition bg-black bg-opacity-10 p-2 rounded-md' />
          </Link>
        </li>
      </ul>

      <ul className='row-span-2 col-span-2 place-self-end self-center sm:col-span-1 sm:place-self-center sm:justify-self-end'>
        <li>
          <Link
            to='/nosotros'
            className='shadow-lg border border-zinc-200 border-opacity-30 text-xs uppercase  text-zinc-100 font-semibold  transition  bg-black bg-opacity-10 sm:p-[22px] p-[12px] rounded-md hover:text-white hover:bg-opacity-30'>
            Nosotros
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
