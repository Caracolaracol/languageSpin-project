import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import carrusel1 from '../assets/caruselutn.png'


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";
 
function Slider() {

    return (
        <div className='w-[100%] h-[100%] p-4'>
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
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className='mySwiper'
        >
            <SwiperSlide>
                <div className='flex'>
                    <img src={carrusel1}   />
                </div>
            </SwiperSlide>
{/*             <SwiperSlide>
                <div className='flex'>
                    <img src='https://placekitten.com/352/1159/'  />
                    <div className='p-4 border-[1px] border-spacing-2'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex praesentium aspernatur</p>
                    </div>
                </div>
            </SwiperSlide> */}
        </Swiper>
    </div>
    )
}

export default Slider
