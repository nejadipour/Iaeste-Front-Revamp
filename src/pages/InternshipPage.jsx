import {Col, Row, Typography} from "antd";
import DescriptionCard from "../components/Card/DescriptionCard.jsx";
import {ACOffersDescription, COBEOffersDescription, FCFSOffersDescription} from "../constants/InternshipConstants.jsx";
import FCFSOffersIcon from "../../assets/icons/FCFSOffers.svg?react";
import ACOffersIcon from "../../assets/icons/ACOffers.svg?react";
import COBEOffersIcon from "../../assets/icons/COBEOffers.svg?react";
import InternshipTable from "../tables/InternshipTable.jsx";

export default function InternshipPage() {
    return (
        <div>
            <Typography.Title level={3} style={{marginBottom: 40}}>{"انواع آفرهای کارآموزی"}</Typography.Title>

            <Row justify={"start"} gutter={[24, 24]} style={{marginBottom: 80}}>
                <Col xs={24} lg={12} xl={8}>
                    <DescriptionCard
                        title={"AC Offers"}
                        src={"/assets/images/ac_offers.jpg"}
                        description={ACOffersDescription}
                        icon={<ACOffersIcon/>}
                    />
                </Col>

                <Col xs={24} lg={12} xl={8}>
                    <DescriptionCard
                        title={"COBE Offers"}
                        src={"/assets/images/cobe_offers.jpg"}
                        description={COBEOffersDescription}
                        icon={<COBEOffersIcon/>}
                    />
                </Col>

                <Col xs={24} lg={12} xl={8}>
                    <DescriptionCard
                        title={"FCFS Offers"}
                        src={"/assets/images/fcfs_offers.jpg"}
                        description={FCFSOffersDescription}
                        icon={<FCFSOffersIcon/>}
                    />
                </Col>
            </Row>

            <Typography.Title level={3} style={{marginBottom: 40}}>{"لیست آفرهای کارآموزی"}</Typography.Title>
            <InternshipTable/>
        </div>
    )
}
