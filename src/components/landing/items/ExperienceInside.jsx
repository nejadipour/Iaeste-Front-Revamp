import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import {Autoplay, EffectCoverflow, Pagination} from "swiper/modules";
import Navigation from "../../Navigation/index.jsx";
import ExperienceCard from "../../experience/ExperienceCard.jsx";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


export default function ExperienceInside({experiences}) {
    const [swiper, setSwiper] = useState(null);

    return (
        <Swiper
            style={{padding: "5px", direction: "ltr", paddingBottom: "50px"}}
            onSwiper={setSwiper}
            effect={window.innerWidth < 1600 ? 'slide' : 'coverflow'}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 1600 ? 1 : 2}
            spaceBetween={window.innerWidth < 1600 ? 50 : null}
            coverflowEffect={{
                rotate: 0,
                stretch: 257,
                depth: 100,
                modifier: 1,
                scale: 0.8,
                slideShadows: false,
            }}
            pagination={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            roundLengths={true}
            modules={window.innerWidth < 1600 ? [Autoplay] : [EffectCoverflow, Pagination, Autoplay]}
        >
            {experiences?.map((exp) => (
                <SwiperSlide key={exp.id}>
                    <ExperienceCard experience={exp} direction={"ltr"}/>
                </SwiperSlide>
            ))}

            {experiences?.map((exp) => (
                <SwiperSlide key={exp.id}>
                    <ExperienceCard experience={exp} direction={"ltr"}/>
                </SwiperSlide>
            ))}

            <div style={{textAlign: "center", marginTop: "-15px"}}>
                <Navigation direction={"ltr"} style={{zIndex: 1}} swiper={swiper}/>
            </div>
        </Swiper>
    )
}
