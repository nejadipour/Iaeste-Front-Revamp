import {App, Avatar, Button, Col, ConfigProvider, Empty, Flex, Row, Typography} from "antd";
import {useCallback, useEffect, useState} from "react";
import {useClient} from "../contexts/client/ClientContext.jsx";
import axios from "axios";
import EventCard from "../components/Event/EventCard.jsx";
import {useAuth} from "../contexts/authentication/AuthContext.jsx";
import {EditFilled, MailFilled, PhoneFilled, SyncOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import FieldIcon from "../components/icons/FieldIcon.jsx";
import UniversityIcon from "../components/icons/UniversityIcon.jsx";
import UserIcon from "../../assets/icons/user-fill.svg?react";
import CooperationIcon from "../../assets/icons/cooperation.svg?react";
import UploadIcon from "../../assets/icons/upload.svg?react";
import {digitsEnToFa} from "@persian-tools/persian-tools";
import GradientButton from "../components/Button/GradientButton.jsx";

const cardStyle = {
    borderRadius: 16,
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.26)",
    padding: 24,
    marginBottom: 24
}

const iconsStyle = {padding: "0px 0px 0px 5px"}

export default function ProfilePage() {
    const {client} = useClient();
    const {authUser} = useAuth();
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        events: [],
        jobs: []
    });
    const eventsBaseQuery = "/events/";
    const {notification} = App.useApp();
    const navigate = useNavigate();

    const fetchData = useCallback(() => {
        setLoading(true);
        const eventsReq = client.get(eventsBaseQuery);
        // const jobsReq = client.get(jobsBaseQuery);
        axios.all([
            eventsReq,
            // jobsReq
        ]).then(axios.spread((...responses) => {
            setFetched(true);
            const eventsResponse = responses[0];
            // const jobsResponse = responses[1];

            setData({
                ...data,
                events: eventsResponse?.data?.filter((item) => item.userIsRegistered === true),
                // jobs: jobsResponse.data,
            })

            setLoading(false);
        }))
            .catch(() => {
                notification.error({message: "خطا در دریافت داده‌ها"});
                navigate("/");
            })

    }, [client, data, notification, navigate])

    useEffect(() => {
        if (!fetched && !loading) {
            fetchData();
        }
    }, [fetched, loading, fetchData])

    return (
        <Row gutter={[24, 24]}>
            <Col md={5}>
                <div style={{textAlign: "center"}}>
                    <Avatar
                        size={120}
                        src={authUser?.profile_pic}
                    />
                </div>

                <div style={{textAlign: "center", marginTop: -32, marginRight: 60}}>
                    <Button style={{
                        zIndex: 1,
                        padding: "8px 8px 12px 8px",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        marginBottom: 24
                    }}><EditFilled style={{display: "flex"}}/></Button>
                </div>

                <div style={cardStyle}>
                    <ConfigProvider
                        theme={{
                            token: {
                                lineHeight: 0.5
                            }
                        }}
                    >
                        <Typography.Paragraph>
                            <UserIcon style={iconsStyle}/>
                            {`${authUser?.first_name || ""} ${authUser?.last_name || ""}`}
                        </Typography.Paragraph>

                        <Typography.Paragraph>
                            <PhoneFilled rotate={90} style={iconsStyle}/>
                            {authUser?.phone && digitsEnToFa(authUser.phone)}
                        </Typography.Paragraph>

                        <Typography.Paragraph>
                            <MailFilled style={iconsStyle}/>
                            {authUser?.email}
                        </Typography.Paragraph>

                        <Typography.Paragraph>
                            <UniversityIcon style={iconsStyle}/>
                            {authUser?.university}
                        </Typography.Paragraph>

                        <Typography.Paragraph>
                            <FieldIcon style={iconsStyle}/>
                            {authUser?.field}
                        </Typography.Paragraph>
                    </ConfigProvider>

                    <Flex justify={"end"} gap={12} style={{marginTop: 50}}>
                        <Button icon={<SyncOutlined />}>{"تغییر رمز عبور"}</Button>
                        <GradientButton>{"ویرایش"}</GradientButton>
                    </Flex>
                </div>

                <Button size={"large"} icon={<UploadIcon/>} style={{width: "100%", textAlign: "right", marginBottom: 12}}>{"بارگذاری رزومه"}</Button>
                <Button size={"large"} icon={<CooperationIcon/>} style={{width: "100%", textAlign: "right", marginBottom: 24}}>{"درخواست همکاری"}</Button>

            </Col>

            <Col md={19}>
                <Button
                    type={"primary"}
                    size={"large"}
                    style={{
                        width: "100%",
                        height: 120,
                        marginBottom: 24
                    }}
                >
                    <Typography.Title level={2} style={{color: "white"}}>{"آزمون ۲۰۲۴"}</Typography.Title>
                </Button>

                <div style={cardStyle}>
                    <Typography.Title level={4}>{"رویداد‌های ثبت نامی"}</Typography.Title>

                    {data?.events?.length > 0 ?
                        <div style={{overflow: "hidden"}}>
                            <div style={{display: "flex", flexWrap: "nowrap", whiteSpace: "nowrap", overflowX: "auto"}}>
                                {
                                    data.events.map((event) => (
                                        <div key={event.id} style={{
                                            minWidth: 420,
                                            width: 420,
                                            padding: "0px 10px 20px 10px",
                                            whiteSpace: "normal"
                                        }}>
                                            <EventCard key={event.id} data={event}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div> :
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={"شما در هیچ رویدادی ثبت نام نکرده‌اید."}
                        />
                    }
                </div>

            </Col>
        </Row>
    )
}