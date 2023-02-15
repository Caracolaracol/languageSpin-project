import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, SectionTitle } from '../../components/utils/utils';

function Nosotros() {
  return (
    <div>
      <Header />
      <Container>
        <SectionTitle text='sobre nosotros' />
      </Container>
      <Footer />
    </div>
  );
}

export default Nosotros;
