import {App, Avatar, Button, Card, Col, Row, Typography} from "antd";
import {useCallback, useEffect, useState} from "react";
import {useClient} from "../contexts/client/ClientContext.jsx";
import axios from "axios";
import EventCard from "../components/Event/EventCard.jsx";
import {useAuth} from "../contexts/authentication/AuthContext.jsx";
import {EditFilled} from "@ant-design/icons";

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
                events: eventsResponse.data,
                // jobs: jobsResponse.data,
            })

            setLoading(false);
        }))
            .catch(() => {
                notification.error({message: "خطا در دریافت داده‌ها"})
            })

    }, [client, data, notification])

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
                        backgroundColor: "rgba(255, 255, 255, 0.8)"
                    }}><EditFilled style={{display: "flex"}}/></Button>
                </div>
            </Col>

            <Col md={19}>
                <Button
                    type={"primary"}
                    size={"large"}
                    style={{
                        width: "100%",
                        height: 100,
                        marginBottom: 24
                    }}
                >
                    <Typography.Title level={2} style={{color: "white"}}>{"آزمون ۲۰۲۴"}</Typography.Title>
                </Button>

                <div style={{
                    borderRadius: 16,
                    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.26)",
                    padding: 24,
                }}>
                    <Typography.Title level={4}>{"رویداد‌های ثبت نامی"}</Typography.Title>
                    <div style={{overflow: "hidden"}}>
                        <div style={{display: "flex", flexWrap: "nowrap", whiteSpace: "nowrap", overflowX: "auto"}}>
                            {data.events.map((event) => (
                                <div key={event.id} style={{
                                    minWidth: 420,
                                    width: 420,
                                    padding: "0px 10px 20px 10px",
                                    whiteSpace: "normal"
                                }}>
                                    <EventCard key={event.id} data={event}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </Col>
        </Row>
    )
}
