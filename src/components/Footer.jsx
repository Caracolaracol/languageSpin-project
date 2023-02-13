import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="mt-40">
            <ul>
                <li>
                    <Link to='/nosotros'>Nosotros</Link> 
                </li>
            </ul>
        </div>
    )
}

export default Footer