export const CursoCard = ({ curso }) => {
  return (
    <article className='bg-white p-4 rounded-lg shadow-xl'>
      <p className='mb-4 text-lg leading-tight text-zinc-800 font-bold first-letter:capitalize'>
        {curso.nombre}
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
        <span className='font-semibold'>{curso.cantidad_alumnos}</span>
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
          <span className='font-semibold capitalize'>{curso.duracion}</span>
        </div>
      )}
      <button className='mt-4 bg-verdeSpin text-xs uppercase font-extrabold text-zinc-100 w-full py-4 rounded-lg'>
        Solicitar más información
      </button>
    </article>
  );
};
