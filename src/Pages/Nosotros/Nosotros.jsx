import { useState, useEffect, useRef } from 'react';

import { Container, PageTitle, Section, SectionTitle } from '../../components/utils/utils';
import thankyou from '/thankyou.png';
import staff from '../../assets/staffphoto.jpg';
import { getTeacherSpeechs } from '../../services/services';
import profe1 from '../../assets/profes/celeste.jpeg';
import profe2 from '../../assets/profes/eduardo.jpeg';
import profe4 from '../../assets/profes/Agustina.jpg';
import profe5 from '../../assets/profes/belen.jpg';
import profe6 from '../../assets/profes/ayelen.jpg';
import profe3 from '../../assets/profes/agostina.jpeg';
import profe7 from '../../assets/profes/Rocioromero.jpg';
import profe8 from '../../assets/profes/Nataliaureta.jpg';
import profe9 from '../../assets/profes/Ceciliacarvajal.jpg';

function Nosotros() {
  const scroll = useRef();
  const [speechData, setSpeechData] = useState([]);

  useEffect(() => {
    scroll.current && scroll.current.scrollIntoView();
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    const getData = async () => {
      const speech = await getTeacherSpeechs();

      setSpeechData(speech);
    };
    getData();
  }, [speechData]);

  const profes = [profe1, profe2, profe3, profe4, profe5, profe6, profe7, profe8, profe9];

  return (
    <div className='transicion pt-8 md:pt-12' ref={scroll}>
      <Container>
        <PageTitle text='sobre nosotros' />
        <Section>
          <div className='pt-4 max-w-3xl mx-auto'>
            <div className='flex justify-center'>
              <SectionTitle text='¿Quiénes somos?' />
            </div>
            <p className='text-center pb-2'>
              En <strong>Language Spin</strong> queremos acercarte el idioma de manera interactiva,
              dinámica y eficaz, con el objetivo de brindarte el conocimiento orientado a tus
              necesidades.
            </p>
            <p className='text-center pb-2'>
              Entendemos que cada alumno aprende de manera diferente, por lo tanto, ponemos énfasis
              en personalizar las clases y poder brindar el mejor aprendizaje para los alumnos.
            </p>
            <p className='text-center'>
              También creemos en la necesidad de aprender en un contexto comunicativo e incluimos a
              los alumnos a nuestros club de conversación e invitamos a nativos a nuestras clases
              online.
            </p>
          </div>
        </Section>
      </Container>

      <img
        src={staff}
        className='pb-8 mx-auto w-full  md:h-[470px] md:object-cover md:object-top'
      />

      <Container>
        <Section>
          <div className='flex flex-row justify-center '>
            <SectionTitle text='nuestros profesores' />
          </div>
          <div className='grid grid-cols-1   md:grid-cols-6 gap-6 mt-4'>
            {speechData
              ? speechData.map((speech) => (
                  <div
                    key={speech.index}
                    className='flex flex-col col-span-2 justify-start items-center gap-4 md:item'>
                    <img
                      className='shadow-xl w-[40vw] sm:w-[60%] md:w-[65%] h-auto rounded-full'
                      src={profes[speech.index]}
                      alt='something'
                    />
                    <p className='text-center md:w-64 px-4'>{speech.speech}</p>
                  </div>
                ))
              : null}
          </div>
        </Section>
        <Section>
          <div className='flex justify-center'>
            <img src={thankyou} />
          </div>
        </Section>
      </Container>
    </div>
  );
}

export default Nosotros;
