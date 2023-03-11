import Slider from '../components/Slider';

import smUtn from '../assets/carruselmobile1.png';
import { Container, SectionTitle } from '../components/utils/utils';

function Inicio() {
  return (
    <div className='m-auto transicion'>
      <Container>
        <Slider />
      </Container>

      <Container>
        <div className='shadow-borderShadow bg-white rounded-lg mb-12 pb-6'>
          <div className='flex justify-center pt-8'>
            <SectionTitle text='Nuestros Alumnos' />
          </div>
          <div className='p-4 flex flex-col justify-center items-center px-6'>
            <p className='text-center pb-4 max-w-2xl'>
              En Language Spin queremos acercarte el idioma de manera interactiva, dinámica y
              eficaz, con el objetivo de brindarte el conocimiento orientado a tus necesidades.
            </p>
            <p className='text-center max-w-2xl'>
              Entendemos que cada alumno aprende de manera diferente, por lo tanto, ponemos énfasis
              en personalizar las clases y poder brindar el mejor aprendizaje para los alumnos.
            </p>
          </div>
          <div className='flex flex-col-reverse justify-evenly sm:flex-row sm:gap-2 w-full'>
            <div className=' bg-white rounded-md p-2 sm:py-4'>
              <iframe
                className='h-[576px] w-[100%] sm:h-[512px] sm:w-[288px] md:h-[608px] md:w-[342px] lg:h-[720px] lg:w-[405px] rounded-lg overflow-hidden'
                src='https://www.youtube.com/embed/Qp19qYFqoCU'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'></iframe>
            </div>
            <div className=' bg-white rounded-md p-2 sm:py-4'>
              <iframe
                className='h-[576px] w-[100%] sm:h-[512px] sm:w-[288px] md:h-[608px] md:w-[342px] lg:h-[720px] lg:w-[405px] rounded-lg overflow-hidden'
                src='https://www.youtube.com/embed/3zpuS8dC5bM'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Inicio;
