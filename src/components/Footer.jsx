import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:items-center lg:justify-items-center bg-verdeSpin text-zinc-200 p-4 lg:p-8'>
      <ul className='text-xs space-y-2 font-semibold'>
        <li className='flex items-center gap-2'>
          <FaPhoneAlt className='w-4 h-4' />
          <p>383-4069803</p>
        </li>
        <li className='flex items-center gap-2'>
          <FaMapMarkerAlt className='w-4 h-4' />
          <p>Pasaje Zambonini 1103, San Fernando del Valle de Catamarca</p>
        </li>
      </ul>
      <ul className='flex items-center gap-4'>
        <li>
          <Link
            to='https://api.whatsapp.com/send?phone=543834069803&text=%C2%A1Gracias%20por%20comunicarte!%20Te%20vamos%20a%20responder%20lo%20m%C3%A1s%20pronto%20posible'
            target='_blank'>
            <FaWhatsapp className='h-9 w-9 hover:text-white hover:bg-opacity-30 transition bg-black bg-opacity-10 p-2 rounded-md' />
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
      </ul>
      <ul>
        <li>
          <Link to='/nosotros' className='font-semibold hover:text-white transition'>
            Nosotros
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
