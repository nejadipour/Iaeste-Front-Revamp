import React, {useEffect, useState} from "react";
import {BorderedTag, FilledTag} from "../components/Tag";
import {
    EVENT_FORMANT,
    EVENT_STATUS,
    EVENT_TYPES,
} from "../constants/EventsConstants";
import {Button, Card, Flex, Image, Typography} from "antd";
import LocationIcon from "../assets/icons/location.svg?react";
import TimeIcon from "../assets/icons/time.svg?react";
import CalendarIcon from "../assets/icons/calendar.svg?react";
import MapIcon from "../assets/icons/map.svg?react";
import SaveIcon from "../assets/icons/Save.svg?react";
import StarIcon from "../assets/icons/Star.svg?react";
import BulletIcon from "../assets/icons/bullet-point.svg?react";
import Row from "../components/Row";
import "../styles/eventPage.css";
import GradientButton from "../components/Button/GradientButton";
import {Link, useParams} from "react-router-dom";
import {useClient} from "../contexts/client/ClientContext";

const EventPage = () => {
    const {id} = useParams();
    const {client} = useClient();
    const [data, setData] = useState(null);
    useEffect(() => {
        client.get(`/events/${id}`).then((res) => {
            setData(res.data);
        });
    }, []);

    return (
        <div className="event-page">
            <img src={data?.mainPagePoster} className="event-poster"/>
            {data && (
                <>
                    <section>
                        <Flex
                            justify="space-between"
                            align="flex-start"
                            style={{marginTop: 27}}
                        >
                            <div>
                                <Typography.Title level={3}>{data.title}</Typography.Title>
                                <Row
                                    icon={<CalendarIcon fill="var(--color-primary)"/>}
                                    title="زمان برگزاری"
                                    value={data.event_datetime}
                                />
                                <Row
                                    icon={<LocationIcon fill="var(--color-primary)"/>}
                                    title="محل برگزاری"
                                    value={data.location}
                                />
                                <Row
                                    icon={<TimeIcon fill="var(--color-primary)"/>}
                                    title="مهلت ثبت نام"
                                    value={data.registrationEndDate}
                                />
                                <Row
                                    icon={<TimeIcon fill="var(--color-primary)"/>}
                                    title="هزینه ثبت نام"
                                    value={data.registrationEndDate}
                                />
                            </div>
                            <Flex vertical align="flex-end">
                                <Flex gap={16}>
                                    {data.status === EVENT_STATUS.attended && (
                                        <FilledTag className="event-page-tag">برگزار شد</FilledTag>
                                    )}
                                    <BorderedTag className="event-page-tag">
                                        {EVENT_FORMANT[data.event_format]}
                                    </BorderedTag>
                                </Flex>
                                <Flex
                                    className="event-link"
                                    align="center"
                                    gap={8}
                                    justify="flex-end"
                                >
                                    <SaveIcon/>{" "}
                                    <Typography.Link
                                        className="event-link-text"
                                        href={data.calendar_link}
                                        target="_blank"
                                    >
                                        اضافه کردن به تقویم
                                    </Typography.Link>
                                </Flex>
                                <Flex
                                    className="event-link"
                                    align="center"
                                    gap={8}
                                    justify="flex-end"
                                >
                                    <MapIcon/>{" "}
                                    <Typography.Link
                                        className="event-link-text"
                                        hrer={data.google_map_link}
                                        target="_blank"
                                    >
                                        محل برگزاری روی نقشه
                                    </Typography.Link>
                                </Flex>
                            </Flex>
                        </Flex>
                    </section>
                    <section>
                        <Flex justify="center" align="center" vertical gap={8}>
                            {handleActionBtn(data)}
                        </Flex>
                    </section>
                    <section>
                        <Typography.Title level={3}>
                            {data.event_type === EVENT_TYPES.talk ? "سخنرانان" : "اساتید"}
                        </Typography.Title>
                        <Flex gap={24} wrap="wrap">
                            {data.presenters?.map((presenter) => (
                                <Card
                                    key={presenter.id}
                                    cover={
                                        <img alt={presenter.name} src={presenter.profile_picture}/>
                                    }
                                >
                                    <Card.Meta
                                        title={presenter.name}
                                        description={presenter.description}
                                    />
                                </Card>
                            ))}
                        </Flex>
                    </section>
                    {data.topics && (
                        <section>
                            <Typography.Title level={3}>سرفصل ها</Typography.Title>
                            {handleTopics(data.topics)?.map((topic, index) => (
                                <Flex
                                    key={index}
                                    align="center"
                                    gap={12}
                                    className="event-topic"
                                >
                                    <BulletIcon width={12}/> {topic}
                                </Flex>
                            ))}
                        </section>
                    )}
                    <section>
                        <Typography.Title level={3}>توضیحات رویداد</Typography.Title>
                        <Typography.Paragraph>{data.description}</Typography.Paragraph>
                    </section>
                    {data.status === EVENT_STATUS.attended && (
                        <section>
                            <Typography.Title level={3}>گزارش تصویری</Typography.Title>
                            <Flex gap={16} wrap="wrap">
                                {data.event_images?.map((item) => (
                                    <Image className="event-img" key={item.id} src={item.image}/>
                                ))}
                            </Flex>
                        </section>
                    )}
                </>
            )}
        </div>
    );
};

export default EventPage;

function handleActionBtn(data) {
    if (!data.userIsRegistered && data.status === EVENT_STATUS.register_open) {
        return (
            <Link to="/events/register">
                <Button
                    type="primary"
                    style={{margin: "0 auto", textAlign: "center"}}
                >
                    ثبت نام
                </Button>
            </Link>
        );
    }
    if (
        data.userIsRegistered &&
        data.event_format !== "inperson" &&
        data.status !== EVENT_STATUS.attended
    ) {
        return (
            <>
                <div>ثبت نام شده</div>
                <a rel={"noreferrer"} href={data.venue_link} target="_blank">
                    <GradientButton disabled={!data.venue_link}>ورود به رویداد</GradientButton>
                </a>
            </>
        );
    }
    if (data.userIsRegistered && data.status == EVENT_STATUS.attended) {
        return (
            <Flex gap={8} align="center">
                <StarIcon width={20}/>
                <Typography.Text color="red">
                    شما در این رویداد شرکت کردید.
                </Typography.Text>
            </Flex>
        );
    }
}

function handleTopics(text) {
    const topics = text?.split("\n");
    return topics;
}
