import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, PageTitle, Section, SectionTitle } from '../../components/utils/utils';

function Nosotros() {
  return (
    <div>
      <Container>
        <PageTitle text='sobre nosotros' />
        <Section>
          <div className=''>
            <img src='https://placeimg.com/300/300/any' alt='something' className='w-full mb-4' />
            <div>
              <SectionTitle text='¿Quiénes somos?' />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sequi officiis eius
                porro sapiente suscipit et dolorum, necessitatibus repudiandae nisi fuga quis, harum
                ex quaerat laudantium ullam quas omnis reprehenderit magnam fugiat! Excepturi
                voluptatibus eum rem repellendus facilis laudantium non tenetur nobis tempora
                ducimus quis, saepe consequatur harum nostrum! Sunt.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className='flex flex-col gap-8'>
            <div className=''>
              <SectionTitle text='docentes' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias dolor
                hic corrupti sed? Aspernatur labore accusantium libero ullam laudantium?
              </p>
            </div>
            <div className=''>
              <SectionTitle text='objetivo' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, non! Labore vel
                provident illo tempore quos perferendis praesentium debitis eaque.
              </p>
            </div>
            <div className=''>
              <SectionTitle text='misión' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quis quidem
                accusantium dolorem esse, veniam magni? Ducimus quis cumque hic!
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <SectionTitle text='nuestros profesores' />
          <div className='flex flex-col gap-6'>
            <div>
              <img src='https://placeimg.com/150/150/any' alt='something' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium asperiores
                voluptatibus explicabo eum magni.
              </p>
            </div>
            <div>
              <img src='https://placeimg.com/150/150/any' alt='something' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium asperiores
                voluptatibus explicabo eum magni.
              </p>
            </div>
            <div>
              <img src='https://placeimg.com/150/150/any' alt='something' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium asperiores
                voluptatibus explicabo eum magni.
              </p>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}

export default Nosotros;
