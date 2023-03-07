import Slider from '../components/Slider';

function Inicio(){

    return (
        <div className='m-auto transicion'>
            <div className='hidden sm:block w-[40rem] md:w-[50rem] lg:w-[65rem] xl:w-[70rem] 2xl:w-[75rem] m-auto p-8 '>
                <Slider />
            </div> 
            <div className='p-4 sm:hidden' >
                <img src='https://placeimg.com/160/90/any' width="1280" height="720"  />
            </div>
        </div>
    )
}

export default Inicio