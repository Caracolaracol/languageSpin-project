export const TestimonioCard = ({ testimonio }) => {
  return (
    <div className='shadow-borderShadow bg-white rounded-md p-4'>
      <p className='capitalize font-semibold mb-1'>{testimonio.nombre}</p>
      <p className='text-zinc-600 italic'>"{testimonio.testimonio}"</p>
    </div>
  );
};
