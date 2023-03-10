import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import carrusel1 from '../assets/carrusel1.png';
import carrusel2 from '../assets/carrusel2.png';
import carrusel3 from '../assets/carrusel3.png';
import whatsapp from '../assets/wasp.png';

import carruselmobile1 from '../assets/carruselmobile1.png';
import carruselmobile2 from '../assets/carruselmobile2.png';
import carruselmobile3 from '../assets/carruselmobile3.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";
 
function Slider() {

    const caruselmobile = [carruselmobile1, carruselmobile2, carruselmobile3]

    return (
        <div className='w-[100%] h-[100%] pb-8 pt-8 sm:pt-0'>
            <div className='hidden sm:block'>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#ff5756",
                        "--swiper-pagination-color": "#ff5756",
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div className='relative'>
                            <img className='relative' src={carrusel1} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex'>
                            <img src={carrusel2} />
                            <div className='absolute w-full h-full flex top-0 justify-end items-end p-12 px-16' >
                                <img className='h-16 ' src={whatsapp} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex'>
                            <img src={carrusel3} />
                            <div className='absolute w-full h-full flex top-0 justify-end items-end p-12 px-16' >
                                <img className='h-16 ' src={whatsapp} />
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='sm:hidden'>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#ff5756',
                        '--swiper-pagination-color': '#ff5756',
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className='mySwiper'>
                        {
                            caruselmobile.map(img => 
                                (<SwiperSlide key={img}>
                                    <div>
                                        <img className='opt' src={img} />
                                    </div>
                                </SwiperSlide>)
                            
                            )
                            
                        }
                    
                </Swiper>
            </div>
        </div>
    );
}

export default Slider;
