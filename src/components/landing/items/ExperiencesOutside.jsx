import {useState} from "react";
import ExperienceCard from "../../experience/ExperienceCard.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import {Col, Row} from "antd";
import Navigation from "../../Navigation/index.jsx";
import ExperienceBg from "../../experience/ExperienceBg.jsx";


export default function ExperiencesOutside(props) {
    const {experiences} = props;
    const [swiper, setSwiper] = useState(null);
    const [bgSwiper, setBgSwiper] = useState(null);

    return (
        <Row>
            <Col xs={24} xxl={12} style={{marginTop: window.innerWidth >= 1600 ? 140 : 0}}>
                <Swiper
                    style={{borderRadius: "15px", boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)'}}
                    spaceBetween={50}
                    onSwiper={setSwiper}
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(swiperInstance) => {
                        if (bgSwiper) bgSwiper.slideTo(swiperInstance.realIndex)
                    }}
                >
                    {experiences?.map((exp) => (
                        <SwiperSlide key={exp.id}>
                            <ExperienceCard experience={exp} direction={"rtl"}/>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {window.innerWidth < 1600 &&
                    <div style={{textAlign: "center", marginTop: "-15px"}}>
                        <Navigation style={{zIndex: 1}} swiper={swiper}/>
                    </div>
                }
            </Col>

            <Col style={{position: "absolute"}} xs={0} xxl={{span: 17, offset: 4}}>
                <Swiper
                    style={{zIndex: 0, paddingBottom: "50px"}}
                    onSwiper={setBgSwiper}
                    modules={[Pagination, EffectFade]}
                    allowTouchMove={false}
                    effect={"fade"}
                    loop={true}
                    pagination={{
                        clickable: false,
                    }}
                >
                    {experiences?.map((exp) => (
                        <SwiperSlide key={exp.id}>
                            <ExperienceBg/>
                        </SwiperSlide>
                    ))}
                    <div style={{textAlign: "center", marginTop: "-15px"}}>
                        <Navigation style={{zIndex: 1}} swiper={swiper}/>
                    </div>
                </Swiper>
            </Col>
        </Row>
    )
}
