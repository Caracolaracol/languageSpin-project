// Utilizar como wrapper dentro de cada pagina
export const Container = ({ children }) => {
  return <div className='px-4 max-w-6xl mx-auto'>{children}</div>;
};

// Separa bloques de contenido a traves de padding top y bot
export const Section = ({ children }) => {
  return <section className='py-4'>{children}</section>;
};

// Utilizar una sola vez por pagina
export const PageTitle = ({ text }) => {
  return <h1 className='font-extrabold text-2xl py-4 text-zinc-200 capitalize'>{text}</h1>;
};

// Utilizar como titulo de seccion (<Section>) en caso de que corresponda
export const SectionTitle = ({ text }) => {
  return <h2 className='first-letter:capitalize text-xl font-medium mb-2 text-zinc-300'>{text}</h2>;
};
