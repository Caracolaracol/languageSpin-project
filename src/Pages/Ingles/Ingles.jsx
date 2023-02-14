import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, PageTitle, Section, SectionTitle } from '../../components/utils/utils';
import { getLanguageData, getTestimonials } from '../../services/services';
import { useEffect, useState } from 'react';

function Ingles() {
  const [languageData, setLanguageData] = useState({});
  const [languageTestimonials, setLanguageTestimonials] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const language = await getLanguageData('ingles');
      const testimonials = await getTestimonials('ingles');
      setLanguageData(language);
      setLanguageTestimonials(testimonials);
    };
    getData();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <PageTitle text={languageData.nombre} />

        <Section>
          <SectionTitle text='cursos' />
          <div className='bg-white rounded-md p-4'>
            {languageData
              ? languageData.cursos?.map((curso) => (
                  <div key={curso.nombre} className='capitalize py-2'>
                    {curso.nombre}
                  </div>
                ))
              : null}
          </div>
        </Section>

        <Section>
          <SectionTitle text='testimonios' />
          <div className='bg-white rounded-md p-4'>
            {languageTestimonials
              ? languageTestimonials.map((testimonio) => (
                  <div key={testimonio.nombre}>
                    <p className='capitalize font-medium mb-1'>{testimonio.nombre}</p>
                    <p>{testimonio.testimonio}</p>
                  </div>
                ))
              : null}
          </div>
        </Section>
      </Container>
      <Footer />
    </div>
  );
}

export default Ingles;
