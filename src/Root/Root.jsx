import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='bg-zinc-100'>
      <Outlet />
    </div>
  );
};

export default Root;
