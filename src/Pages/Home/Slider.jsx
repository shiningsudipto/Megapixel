import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/slider/s1.jpg'
import img2 from '../../assets/slider/s2.jpg'
import img3 from '../../assets/slider/s3.jpg'
import img4 from '../../assets/slider/s4.jpg'
import img5 from '../../assets/slider/s5.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="relative">
                        <img className="lg:h-[700px] md:h-[500px]  h-[350px] w-full" src={img1} alt="" />
                        <div className="absolute lg:bottom-60 bottom-0 left-0 lg:w-1/2 text-white text-lg bg-gradient-to-r from-fuchsia-800 to-transparent lg:p-8 p-2 ">
                            <h1 className="lg:text-6xl md:text-5xl text-2xl font-bold">Megapixel</h1>
                            <h2 className="md:text-2xl text-xl lg:my-3 md:my-4 my-1 font-semibold">A online photography school</h2>
                            <p className="lg:text-xl md:text-xl text-md">Unlock your photography potential with Megapixel and embark on a transformative learning experience today.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img className="lg:h-[700px] md:h-[500px] h-[350px] w-full" src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="lg:h-[700px] md:h-[500px] h-[350px] w-full" src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img className="lg:h-[700px] md:h-[500px] h-[350px] w-full" src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img className="lg:h-[700px] md:h-[500px] h-[350px] w-full" src={img5} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;