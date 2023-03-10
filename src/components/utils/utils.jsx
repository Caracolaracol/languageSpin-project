// Utilizar como wrapper dentro de cada pagina
export const Container = ({ children }) => {
  return <div className='px-4 max-w-6xl mx-auto'>{children}</div>;
};

// Separa bloques de contenido a traves de padding top y bot
export const Section = ({ children }) => {
  return <section className='pb-16'>{children}</section>;
};

// Utilizar una sola vez por pagina
export const PageTitle = ({ text }) => {
  return (
    <h1 className='font-extrabold text-3xl md:text-5xl py-4 text-zinc-800 capitalize text-center'>
      {text}
    </h1>
  );
};

// Utilizar como titulo de seccion (<Section>) en caso de que corresponda
export const SectionTitle = ({ text }) => {
  return (
    <h2 className='first-letter:capitalize text-sm md:text-lg font-bold mb-4 text-verdeSpin uppercase text-center'>
      {text}
    </h2>
  );
};
