import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, PageTitle, Section, SectionTitle } from '../../components/utils/utils';
import { getLanguageData, getTestimonials } from '../../services/services';
import { CursoCard } from '../../components/curso/CursoCard';
import { TestimonioCard } from '../../components/curso/TestimonioCard';

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
          <div className='grid grid-cols-1 gap-4 p-1'>
            {languageData
              ? languageData.cursos?.map((curso) => <CursoCard key={curso.nombre} curso={curso} />)
              : null}
          </div>
        </Section>

        <Section>
          <SectionTitle text='testimonios' />
          <div className='grid grid-cols-1 gap-4 p-1'>
            {languageTestimonials
              ? languageTestimonials.map((testimonio) => (
                  <TestimonioCard key={testimonio.nombre} testimonio={testimonio} />
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
