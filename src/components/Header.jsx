import logo from '../assets/logo.png'

function Header() {
    return (
        <div className='flex '>
            <div>
                <img className='w-32 h-32'  src={logo} />
            </div>
            <h1>Language spin idiomas</h1>
            
        </div>
    )
}

export default Header