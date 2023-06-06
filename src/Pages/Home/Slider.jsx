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
                <SwiperSlide><img className="lg:h-[700px] h-[400px] w-full" src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img className="lg:h-[700px] h-[400px] w-full" src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="lg:h-[700px] h-[400px] w-full" src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img className="lg:h-[700px] h-[400px] w-full" src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img className="lg:h-[700px] h-[400px] w-full" src={img5} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;