import {Col, Row} from "antd";
import DescriptionCard from "../../components/Card/DescriptionCard.jsx";
import {
    ITCommitteeDescription,
    localCommitteeDescription,
    marketingCommitteeDescription
} from "../../constants/CollaborateConstants.jsx";
import LocalIcon from "../../components/icons/LocalIcon.jsx";
import ITIcon from "../../components/icons/ITIcon.jsx";
import MarketingIcon from "../../components/icons/MarketingIcon.jsx";

export default function StudentsTab() {
    return (
        <>
            <Row justify={"center"} gutter={[24, 24]}>
                <Col xs={8}>
                    <DescriptionCard
                        title={"Local Committee"}
                        src={"/assets/images/local_committee.jpg"}
                        description={localCommitteeDescription}
                        icon={<LocalIcon/>}
                    />
                </Col>

                <Col xs={8}>
                    <DescriptionCard
                        title={"Marketing & Graphic Design Committee"}
                        src={"/assets/images/marketing_committee.jpg"}
                        description={marketingCommitteeDescription}
                        icon={<MarketingIcon/>}
                    />
                </Col>

                <Col xs={8}>
                    <DescriptionCard
                        title={"IT Committee"}
                        src={"/assets/images/IT_committee.jpg"}
                        description={ITCommitteeDescription}
                        icon={<ITIcon/>}
                    />
                </Col>
            </Row>
        </>
    )
}
