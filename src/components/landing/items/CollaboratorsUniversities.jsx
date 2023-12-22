import CollaboratorCard from "../../collaborator/CollaboratorCard.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

import 'swiper/css';

export default function CollaboratorsUniversities({universities}) {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={Math.floor(window.innerWidth / 250)}
            spaceBetween={50}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            loop={true}
            speed={2500}
            roundLengths={true}
        >
            {universities?.map((university) => (
                <SwiperSlide key={university.id}>
                    <CollaboratorCard collaborator={university}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
