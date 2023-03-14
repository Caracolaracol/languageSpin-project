import { Link } from 'react-router-dom';
import Balancer from 'react-wrap-balancer';
import { IoPerson, IoSchool, IoSettings } from 'react-icons/io5';
import { HiClock } from 'react-icons/hi2';

export const CursoCard = ({ curso }) => {
  return (
    <article className='flex flex-col justify-between bg-gradient-to-b from-verdeSpin to-verdeSpinDark p-4 md:p-8 rounded-lg shadow-borderShadow'>
      <div>
        <p className='font-lato first-letter:capitalize text-[28px] md:text-[40px] leading-tight pt-2 md:pt-4 pb-4 md:pb-6 text-white font-black w-[13ch] md:w-[22ch] mx-auto text-center'>
          {curso.nombre}
        </p>
        <p className='text-zinc-300 text-sm md:text-base md:leading-normal mb-6 text-center max-w-3xl mx-auto'>
          <Balancer>{curso.descripcion}</Balancer>
        </p>

        <div className='border border-zinc-200 opacity-20 rounded mb-6 md:mb-8 md:max-w-[800px] md:mx-auto'></div>

        <div className='grid grid-cols-3 md:max-w-xl md:mx-auto md:gap-0 gap-6'>
          <div className='flex flex-col items-center'>
            <p className='text-[11px] md:text-sm mb-1 text-zinc-200 font-semibold uppercase flex flex-col items-center gap-1'>
              <IoSchool className='w-6 h-6 text-zinc-300' />
              <span>Alumnos</span>
            </p>
            <span className='text-sm font-medium text-white first-letter:capitalize text-center'>
              {curso.cantidad_alumnos}
            </span>
          </div>

          <div className='flex flex-col items-center'>
            <p className='text-[11px] md:text-sm mb-1 text-zinc-200 font-semibold uppercase flex flex-col items-center gap-1'>
              <IoSettings className='w-6 h-6 text-zinc-300' />
              <span>Modalidades</span>
            </p>
            <div className='flex items-center gap-1 md:gap-2 flex-wrap justify-center'>
              {curso.modalidades.map((modalidad) => (
                <span
                  key={modalidad}
                  className='capitalize text-xs md:text-base font-semibold bg-verdeSpin bg-opacity-80 text-white py-1 px-1.5 rounded-md w-max'>
                  {modalidad}
                </span>
              ))}
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <p className='text-[11px] md:text-sm mb-1 text-zinc-200 font-semibold uppercase flex flex-col items-center gap-1'>
              <HiClock className='w-6 h-6 text-zinc-300' />
              <span>Duración</span>
            </p>
            <p className='text-sm font-medium text-white first-letter:capitalize text-center'>
              {curso.duracion}
            </p>
          </div>
        </div>

        <div className='mt-4 md:mt-8'>
          <p className='text-[11px] md:text-sm mb-1 text-zinc-200 font-semibold uppercase flex flex-col items-center gap-1'>
            <IoPerson className='w-6 h-6 text-zinc-300' />
            <span>Profesores</span>
          </p>
          <div className='flex items-center justify-center gap-2 flex-wrap max-w-xl mx-auto'>
            {curso.profesores.map((profesor) => (
              <span
                key={profesor}
                className='capitalize text-xs md:text-base font-semibold bg-rojoSpin bg-opacity-80 text-white py-1 px-1.5 rounded'>
                {profesor}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Link
        to={curso.link_wpp}
        target='_blank'
        className='mt-6 md:mt-8 shadow-lg border border-zinc-200 border-opacity-30 bg-verdeSpin text-xs uppercase font-extrabold text-zinc-100 w-full md:max-w-2xl md:mx-auto block text-center py-4 md:py-6 rounded-lg hover:brightness-110 transition'>
        Solicitar más información
      </Link>
    </article>
  );
};
