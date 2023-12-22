import {Col, Row, Button, Typography, Flex} from "antd";
import DescriptionCard from "../../components/Card/DescriptionCard.jsx";
import {
    ITCommitteeDescription,
    localCommitteeDescription,
    marketingCommitteeDescription,
} from "../../constants/CollaborateConstants.jsx";
import LocalIcon from "../../components/icons/LocalIcon.jsx";
import ITIcon from "../../components/icons/ITIcon.jsx";
import MarketingIcon from "../../components/icons/MarketingIcon.jsx";
import {useAuth} from "../../contexts/authentication/AuthContext";
import {useNavigate} from "react-router-dom";
import StudentsForm from "../../forms/collaborators/StudentsForm.jsx";

export default function StudentsTab() {
    const {authUser} = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <Row justify={"start"} gutter={[24, 24]}>
                <Col xs={24} lg={12} xxl={8}>
                    <DescriptionCard
                        title={"Local Committee"}
                        src={"/assets/images/local_committee.jpg"}
                        description={localCommitteeDescription}
                        icon={<LocalIcon/>}
                    />
                </Col>

                <Col xs={24} lg={12} xxl={8}>
                    <DescriptionCard
                        title={"Marketing & Graphic Design Committee"}
                        src={"/assets/images/marketing_committee.jpg"}
                        description={marketingCommitteeDescription}
                        icon={<MarketingIcon/>}
                    />
                </Col>

                <Col xs={24} lg={12} xxl={8}>
                    <DescriptionCard
                        title={"IT Committee"}
                        src={"/assets/images/IT_committee.jpg"}
                        description={ITCommitteeDescription}
                        icon={<ITIcon/>}
                    />
                </Col>
            </Row>

            <div className="card-layout" style={{marginTop: 40}}>
                <Typography.Title
                    level={4}
                    style={{textAlign: "center", margin: 0, marginBottom: 40}}
                >
                    درخواست همکاری
                </Typography.Title>
                <Typography.Title level={5} style={{margin: 0, marginBottom: 25}}>
                    مشخصات درخواست دهنده
                </Typography.Title>
                {authUser ? (
                    <StudentsForm/>
                ) : (
                    <Flex vertical gap={16}>
                        <Typography.Text>
                            برای ثبت درخواست همکاری ابتدا وارد شوید.
                        </Typography.Text>
                        <Button type="primary" onClick={() => navigate("/auth")}
                                style={{alignSelf: 'center', width: 200}}>
                            ورود
                        </Button>
                    </Flex>
                )}
            </div>
        </>
    );
}
