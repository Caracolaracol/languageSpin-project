

import { Container, PageTitle, Section, SectionTitle } from '../../components/utils/utils';
import { CursoCard } from '../../components/curso/CursoCard';
import { TestimonioCard } from '../../components/curso/TestimonioCard';
import { useState,useEffect } from "react";
import { getTestimonials,getLanguageData } from "../../services/services";




function Espanol(){
    const [languageData, setLanguageData] = useState({});
    const [languageTestimonials, setLanguageTestimonials] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
        const language = await getLanguageData('español');
        const testimonials = await getTestimonials('español');
        setLanguageData(language);
        setLanguageTestimonials(testimonials);
      };
      getData();
    }, []);

    return (
        <div>
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
        </div>
    )
}

export default Espanol