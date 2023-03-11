import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';

import { Container, PageTitle, Section, SectionTitle } from '../../components/utils/utils';
import thankyou from '/thankyou.png';
import staff from '../../assets/staffphoto.jpg'
import { getTeacherSpeechs } from '../../services/services';
import profe1 from '../../assets/profes/profe1.jpeg'
import profe2 from '../../assets/profes/celeste.jpeg'
import profe4 from '../../assets/profes/Agustina.jpg'
import profe5 from '../../assets/profes/belen.jpg'
import profe6 from '../../assets/profes/ayelen.jpg'
import profe3 from '../../assets/profes/agostina.jpeg'



function Nosotros() {
  const [speechData, setSpeechData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const speech = await getTeacherSpeechs();

      setSpeechData(speech);
    };
    getData();

  }, []);

  const profes = [profe1, profe2, profe4, profe5,  profe6, profe3]

  return (
    <div className='transicion'>
      <Container>
        <PageTitle text='sobre nosotros' />
        <Section>
          <div className='flex flex-col sm:flex-row'>
            <img src='http://placekitten.com/300/300' alt='something' className='w-full mb-4' />
            <div >
              <div className='flex justify-center'>
                <SectionTitle text='¿Quiénes somos?' />
              </div>
              <p className='text-center pb-2'>
              En Language Spin queremos acercarte el idioma de manera interactiva, dinámica y eficaz, con el objetivo de brindarte el conocimiento orientado a tus necesidades. 
              </p>
              <p className='text-center pb-2'>
              Entendemos que cada alumno aprende de manera diferente, por lo tanto, ponemos énfasis en personalizar las clases y poder brindar el mejor aprendizaje para los alumnos.
              </p>
              <p className='text-center pb-2'>
              También creemos en la necesidad de aprender en un contexto comunicativo e incluimos a los alumnos a nuestros club de conversación e invitamos a nativos a nuestras clases online
              </p>
            </div>
          </div>
        </Section>
        <Container>
          <img src={staff} className='pb-8'/>
        </Container>
        {/* <Section>
          <div className='flex gap-6'>
            <div className='flex flex-col justify-center items-center gap-1'>
              <SectionTitle text='docentes' />
              <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias dolor
                hic corrupti sed? Aspernatur labore accusantium libero ullam laudantium?
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-1'>
              <SectionTitle text='objetivo' />
              <p className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, non! Labore vel
                provident illo tempore quos perferendis praesentium debitis eaque.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-1'>
              <SectionTitle text='misión' />
              <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quis quidem
                accusantium dolorem esse, veniam magni? Ducimus quis cumque hic!
              </p>
            </div>
          </div>
        </Section> */}
        <Section>
          <div className='flex flex-row justify-center '>
            <SectionTitle text='nuestros profesores'/>
          </div>
          <div className='grid grid-cols-2  md:grid-cols-3 grid-rows-2 gap-6 auto-cols-max auto-rows-max bg '>
            {
              speechData ? speechData.map(speech => ( <div key={speech.index} className='flex flex-col justify-start items-center gap-4 '>
              <img className='shadow-xl w-[40vw] sm:w-[60%] md:w-[65%] h-auto rounded-full' src={profes[speech.index]} alt='something' />
              <p className='text-center'>
              {speech.speech}
              </p>
            </div>
            )) : null
            }
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
