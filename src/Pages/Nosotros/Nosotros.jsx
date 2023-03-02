import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, PageTitle, Section, SectionTitle } from '../../components/utils/utils';
import thankyou from '/thankyou.png';
function Nosotros() {
  return (
    <div>
      <Container>
        <PageTitle text='sobre nosotros' />
        <Section>
          <div className='flex flex-col sm:flex-row'>
            <img src='http://placekitten.com/300/300' alt='something' className='w-full mb-4' />
            <div >
              <div className='flex justify-center'>
                <SectionTitle text='¿Quiénes somos?' />
              </div>
              <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sequi officiis eius
                porro sapiente suscipit et dolorum, necessitatibus repudiandae nisi fuga quis, harum
                ex quaerat laudantium ullam quas omnis reprehenderit magnam fugiat! Excepturi
                voluptatibus eum rem repellendus facilis laudantium non tenetur nobis tempora
                ducimus quis, saepe consequatur harum nostrum! Sunt.
              </p>
              <p className='text-center'>
                UTN Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, totam.
              </p>
            </div>
          </div>
        </Section>
        <Section>
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
        </Section>
        <Section>
          <div className='flex flex-row justify-center'>
            <SectionTitle text='nuestros profesores'/>
          </div>
          <div className='grid grid-cols-2  md:grid-cols-3 grid-rows-2 gap-6'>
            <div className='flex flex-col justify-center items-center gap-4'>
              <img className='w-[40vw] sm:w-[60%] md:w-[65%] h-auto' src='http://placekitten.com/150/150' alt='something' />
              <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium asperiores
                voluptatibus explicabo eum magni.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <img className='w-[40vw] sm:w-[60%] md:w-[65%] h-auto' src='http://placekitten.com/150/150' alt='something' />
              <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium asperiores
                voluptatibus explicabo eum magni.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <img className='w-[40vw] sm:w-[60%] md:w-[65%] h-auto' src='http://placekitten.com/150/150' alt='something' />
              <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium asperiores
                voluptatibus explicabo eum magni.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <img className='w-[40vw] sm:w-[60%] md:w-[65%] h-auto' src='http://placekitten.com/150/150' alt='something' />
              <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium asperiores
                voluptatibus explicabo eum magni.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <img className='w-[40vw] sm:w-[60%] md:w-[65%] h-auto' src='http://placekitten.com/150/150' alt='something' />
              <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium asperiores
                voluptatibus explicabo eum magni.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <img className='w-[40vw] sm:w-[60%] md:w-[65%] h-auto' src='http://placekitten.com/150/150' alt='something' />
              <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium asperiores
                voluptatibus explicabo eum magni.
              </p>
            </div>
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
