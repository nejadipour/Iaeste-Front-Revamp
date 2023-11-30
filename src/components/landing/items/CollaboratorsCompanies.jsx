import {Swiper, SwiperSlide} from "swiper/react";
import CollaboratorCard from "../../collaborator/CollaboratorCard.jsx";

import 'swiper/css';
import 'swiper/css/free-mode';
import {Autoplay, FreeMode} from "swiper/modules";

export default function CollaboratorsCompanies({companies}) {
    return (
        <Swiper
            slidesPerView={7}
            freeMode={{
                enabled: true
            }}
            modules={[FreeMode, Autoplay]}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            loop={true}
            speed={2500}
            roundLengths={true}
        >
            {companies?.map((company) => (
                <SwiperSlide key={company.id}>
                    <CollaboratorCard collaborator={company}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
