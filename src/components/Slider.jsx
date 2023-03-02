import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";
 
function Slider() {

    return (
        <div className='w-[100%] h-[100%] border-[1px] border-spacing-2'>
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
                <div className='flex h-[19rem]'>
                    <img src='https://placekitten.com/180/200/' width="1280" height="720"  />
                    <div className='p-4 '>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex praesentium aspernatur</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex h-[19rem]'>
                    <img src='https://placekitten.com/160/140/' width="1280" height="720"  />
                    <div className='p-4 '>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex praesentium aspernatur</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex h-[19rem]'>
                    <img src='https://placekitten.com/260/90/' width="1280" height="720"  />
                    <div className='p-4 '>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex praesentium aspernatur</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex h-[19rem]'>
                    <img src='https://placekitten.com/160/100/' width="1280" height="720"  />
                    <div className='p-4 '>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex praesentium aspernatur</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    )
}

export default Slider
