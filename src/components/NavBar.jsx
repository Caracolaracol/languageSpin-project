import { Link } from "react-router-dom"

function NavBar(){
    return (
        <div>
            <ul>
                <li>
                    <Link to='/Ingles'>Inglés</Link>
                </li>
                <li>
                   <Link to='/Italiano'>  Italiano </Link>
                </li>
                <li>
                <Link to='/Portugues'>Portugués </Link>
                </li>
                <li>
                <Link to='/Espanol'>Español </Link>
                </li>
            </ul>
        </div>
    )
}  

export default NavBar