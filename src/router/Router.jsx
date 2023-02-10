import ErrorPage from '../ErrorPage'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Root from '../Root/Root'
import Inicio from '../Pages/Inicio'
import Espanol from '../Pages/Español/Espanol'
import Ingles from '../Pages/Ingles/Ingles'
import Portugues from '../Pages/Portugues/Portuges'
import Italiano from '../Pages/Italiano/Italiano'
import Nosotros from '../Pages/Nosotros/Nosotros'

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>
        <Route path='/' index='true' element={<Inicio/>}/>
        <Route path='/espanol'  element={<Espanol/>}/>
        <Route path='/ingles'  element={<Ingles/>}/>
        <Route path='/portugues'  element={<Portugues/>}/>
        <Route path='/italiano'  element={<Italiano/>}/>
        <Route path='/nosotros'  element={<Nosotros/>}/>
      </Route>
    )
)