import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import "../index.css";
const RootNosotros = () => {
  return (
    <div className='bg-zinc-100 min-h-screen flex flex-col justify-between'>
      <div>
        <Header/>   
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default RootNosotros;