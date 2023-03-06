import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Container } from '../components/utils/utils';
import '../index.css';
const Root = () => {
  return (
    <div className='bg-zinc-100 min-h-screen flex flex-col justify-between'>
      <div>
        <Header />
        <Container>
          <NavBar />
        </Container>

        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
