import ErrorPage from '../ErrorPage'
import { createBrowserRouter} from 'react-router-dom'
import Root from '../Root/Root'
import Inicio from '../Pages/Inicio'
import Espanol from '../Pages/Español/Espanol'
import Ingles from '../Pages/Ingles/Ingles'
import Portugues from '../Pages/Portugues/Portugues'
import Italiano from '../Pages/Italiano/Italiano'
import Nosotros from '../Pages/Nosotros/Nosotros'
import RootNosotros from '../Root/RootNosotros'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Inicio/>, 
        index: true,
      },
      {
        path:'/espanol',
        element:<Espanol/>
      },
      {
        path: '/ingles',
        element:<Ingles/>
      },
      {
        path:'/portugues',
        element:<Portugues/>
      },
      {
        path: '/italiano',
        element: <Italiano/>
      },
    ]
  },
  {
    path: '/nosotros',
    element: <RootNosotros/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/nosotros',
        element: <Nosotros/>,
        index: true,
      }
    ]
  }
])