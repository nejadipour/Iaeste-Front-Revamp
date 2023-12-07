import {App, Col, Row, Typography} from "antd";
import {useCallback, useEffect, useState} from "react";
import {useClient} from "../contexts/client/ClientContext.jsx";
import axios from "axios";
import EventCard from "../components/Event/EventCard.jsx";

export default function ProfilePage() {
    const {client} = useClient();
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
        <Row>
            <Col md={6}>

            </Col>

            <Col md={18}>
                <div style={{
                    borderRadius: 16,
                    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.26)",
                    padding: 24,
                }}>
                    <Typography.Title level={4}>{"رویداد‌های ثبت‌نامی"}</Typography.Title>
                    <div style={{overflow: "hidden"}}>
                        <div style={{display: "flex", flexWrap: "nowrap", whiteSpace: "nowrap", overflowX: "auto"}}>
                            {data.events.map((event) => (
                                <div key={event.id} style={{minWidth: 400, width: 400, padding: "0px 9px 18px 9px", whiteSpace: "normal"}}>
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
