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
    <div className='grid grid-cols-3 grid-rows-2 sm:grid-cols-3 sm:grid-rows-1 grid-flow-dense bg-verdeSpin text-zinc-200 p-4 sm:px-7 md:px-12 lg:px-[10vw] xl:px-[14vw] 2xl:px-[17vw] lg:p-8'>
      <ul className='row-span-2 flex flex-col justify-evenly w-[13rem] sm:w-[10rem] pt-2 space-y-2 font-semibold text-xs sm:col-span-1-span-1 sm:place-self-center sm:row-span-1 md:w-auto sm:justify-self-start'>
        <li className='flex items-center gap-2'>
          <FaPhoneAlt className='w-4 h-4' />
          <p>383-4069803</p>
        </li>
        <li className='flex items-center gap-2'>
          <FaMapMarkerAlt className='w-4 h-4' />
          <p>Pje. Zambonini 1103, San Fernando del Valle de Catamarca</p>
        </li>
      </ul>

      <ul className='flex col-span-2 place-self-end justify-end  gap-3 w-[12rem] mb-2 sm:w-auto sm:col-span-1 sm:place-self-center'>
        <li>
          <Link
            to='https://api.whatsapp.com/send?phone=543834069803&text=%C2%A1Gracias%20por%20comunicarte!%20Te%20vamos%20a%20responder%20lo%20m%C3%A1s%20pronto%20posible'
            target='_blank'>
            <FaWhatsapp className='h-9 w-9 hover:text-white hover:bg-opacity-30 transition bg-black bg-opacity-10 p-2 rounded-md ' />
          </Link>
        </li>
        <li>
          <Link to='https://www.instagram.com/languagespinidiomas/' target='_blank'>
            <FaInstagram className='h-9 w-9 hover:text-white hover:bg-opacity-30 transition bg-black bg-opacity-10 p-2 rounded-md' />
          </Link>
        </li>
        <li>
          <Link to='https://www.facebook.com/LanguageSpinArg/' target='_blank'>
            <FaFacebookF className='h-9 w-9 hover:text-white hover:bg-opacity-30 transition bg-black bg-opacity-10 p-2 rounded-md' />
          </Link>
        </li>
        <li>
          <Link to='https://www.youtube.com/@languagespin8138' target='_blank'>
            <FaYoutube className='h-9 w-9 hover:text-white hover:bg-opacity-30 transition bg-black bg-opacity-10 p-2 rounded-md' />
          </Link>
        </li>
      </ul>

      <ul className='row-span-2 col-span-2 place-self-end sm:col-span-1 sm:place-self-center sm:justify-self-end'>
        <li>
          <Link
            to='/nosotros'
            className='font-semibold  transition  bg-black bg-opacity-10 p-[9px]  rounded-md hover:text-white hover:bg-opacity-30'>
            Nosotros
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
