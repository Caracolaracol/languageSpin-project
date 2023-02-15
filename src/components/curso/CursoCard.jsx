import { Link } from 'react-router-dom';

import Balancer from 'react-wrap-balancer';

export const CursoCard = ({ curso }) => {
  return (
    <article className='bg-white p-4 rounded-lg shadow-borderShadow border-t-[6px] border-verdeSpin'>
      <p className='mb-6 text-2xl text-zinc-800 font-extrabold overflow-hidden'>
        <Balancer className='first-letter:capitalize'>{curso.nombre}</Balancer>
      </p>
      <div className='mb-4'>
        <p className='text-sm'>Profesores:</p>
        <div className='flex items-center gap-2 flex-wrap'>
          {curso.profesores.map((profesor) => (
            <span
              key={profesor}
              className='uppercase text-xs font-semibold bg-rojoSpin text-white py-1 px-1.5 rounded-md'>
              {profesor}
            </span>
          ))}
        </div>
      </div>
      <div className='mb-4'>
        <p className='text-sm'>Cantidad de alumnos aprox:</p>
        {curso.cantidad_alumnos !== null ? (
          <span className='font-semibold'>{curso.cantidad_alumnos}</span>
        ) : (
          <span>Clases personalizadas sin cupo limitado.</span>
        )}
      </div>
      <div className='mb-4'>
        <p className='text-sm'>Modalidades:</p>
        <div className='flex items-center gap-2 flex-wrap'>
          {curso.modalidades.map((modalidad) => (
            <span
              key={modalidad}
              className='uppercase text-xs font-semibold bg-rojoSpin text-white py-1 px-1.5 rounded-md'>
              {modalidad}
            </span>
          ))}
        </div>
      </div>
      {curso.duracion !== null && (
        <div>
          <p className='text-sm'>Duración:</p>
          <p className='font-semibold first-letter:capitalize'>{curso.duracion}</p>
        </div>
      )}
      <Link
        to={curso.link_wpp}
        target='_blank'
        className='mt-4 bg-verdeSpin text-xs uppercase font-extrabold text-zinc-100 w-full block text-center py-4 rounded-lg'>
        Solicitar más información
      </Link>
    </article>
  );
};
