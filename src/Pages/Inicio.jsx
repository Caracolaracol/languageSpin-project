import Slider from '../components/Slider';

import smUtn from '../assets/utnmobile.jpeg'
import { Container, SectionTitle, Section } from '../components/utils/utils';

function Inicio(){

    return (
        <div className='m-auto transicion'>
            <div className='hidden sm:block'>

            
                <Container>
                    <Slider />
                </Container>
            </div>
            <div className='p-4 sm:hidden' >
                <div className='shadow-borderShadow bg-white rounded-md p-4'>
                    <img src={smUtn} width="1280" height="720"  />
                </div>
            </div>
            <Container>
                <div className='shadow-borderShadow bg-white rounded-md mb-12'>
                    <div className='flex flex-col-reverse sm:flex-row gap-2'>
                        <div className=' bg-white rounded-md p-4'>
                            <iframe className='h-[576px] w-[100%] sm:h-[512px] sm:w-[288px] md:h-[720px] md:w-[405px]' src='https://www.youtube.com/embed/Qp19qYFqoCU' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
                        </div>
                        <div className='p-4 flex flex-col justify-center items-center px-6'>
                            <SectionTitle text='Lorem, ipsum.'></SectionTitle>
                            <p className='text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis aspernatur quaerat voluptatum pariatur laborum dolores officia aperiam vitae? Accusantium, eos rem. Tempora, ut assumenda voluptatem, molestias eum, ad at quis perferendis eos consequuntur et ullam nulla possimus similique veritatis voluptatibus reprehenderit quas quo est amet omnis. Eaque, fugiat veritatis.</p>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    )
}

export default Inicio