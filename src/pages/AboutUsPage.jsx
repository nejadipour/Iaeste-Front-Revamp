import AboutUs from "../components/landing/items/AboutUs.jsx";
import {
    aboutUsText3,
    aboutUsText4,
    incomingStudentsDescription,
    outgoingStudentsDescription, universitiesCompaniesDescription
} from "../constants/AboutUsConstants.jsx";
import {Col, Row, Typography} from "antd";
import DescriptionCard from "../components/Card/DescriptionCard.jsx";
import IncomingStudentsIcon from "../components/icons/IncomingStudentsIcon.jsx";
import OutgoingStudentsIcon from "../components/icons/OutgoingStudentsIcon.jsx";
import UniversitiesCompaniesIcon from "../components/icons/UniversitiesCompaniesIcon.jsx";

export default function AboutUsPage() {
    return (
        <>
            <AboutUs
                hideMore
                primaryTexts={[aboutUsText3]}
                secondaryTexts={[aboutUsText4]}
            />

            <Typography.Title level={5}>
                {"فعالیت‌های کمیته آیسته ایران به چند بخش تقسیم‌بندی می‌گردد دانشجویان داخلی و خارجی، دانشگاه‌ها و شرکت‌ها:"}
            </Typography.Title>

            <Row justify={"start"} gutter={[24, 24]} style={{marginBottom: "4rem"}}>
                <Col xs={24} lg={12} xl={8}>
                    <DescriptionCard
                        title={"Incoming Students"}
                        src={"/assets/images/incoming_students_cover.jpg"}
                        objectPosition={"center"}
                        description={incomingStudentsDescription}
                        icon={<IncomingStudentsIcon/>}
                    />
                </Col>

                <Col xs={24} lg={12} xl={8}>
                    <DescriptionCard
                        title={"Outgoing Students"}
                        src={"/assets/images/outgoing_students_cover.JPG"}
                        objectPosition={"center"}
                        description={outgoingStudentsDescription}
                        icon={<OutgoingStudentsIcon/>}
                    />
                </Col>

                <Col xs={24} lg={12} xl={8}>
                    <DescriptionCard
                        title={"Universities and Companies"}
                        src={"/assets/images/IT_committee.jpg"}
                        description={universitiesCompaniesDescription}
                        icon={<UniversitiesCompaniesIcon/>}
                    />
                </Col>
            </Row>
        </>
    )
}
