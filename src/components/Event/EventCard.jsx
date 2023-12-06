import {Button, Flex, Typography} from "antd";
import "../../styles/eventCard.css";
import {BorderedTag, FilledTag} from "../Tag";
import {EVENT_FORMANT, EVENT_STATUS} from "../../constants/EventsConstants";
import LocationIcon from "../../assets/icons/location.svg?react";
import TimeIcon from "../../assets/icons/time.svg?react";
import CalendarIcon from "../../assets/icons/calendar.svg?react";
import {useNavigate} from "react-router-dom";
import Row from "../Row";

const EventCard = ({data}) => {
    const isAttended = data.status === EVENT_STATUS.attended;
    const navigate = useNavigate();

    function handleNavigation() {
        navigate(`/events/${data.id}`);
    }

    return (
        <Flex
            vertical
            className={`event-card-container ${isAttended ? "finished" : ""}`}
        >
            <img className="event-card-poster" src={data.poster} id={data.id}/>
            <Flex vertical wrap="wrap" className="event-card-content">
                <Flex gap={10} justify="flex-end">
                    {isAttended && <FilledTag>برگزار شد</FilledTag>}
                    <BorderedTag>{EVENT_FORMANT[data.event_format]}</BorderedTag>
                </Flex>
                <Typography.Title level={5} className="event-card-title">
                    {data.title}
                </Typography.Title>
                <Row
                    icon={<CalendarIcon/>}
                    title="زمان برگزاری"
                    value={data.event_datetime}
                />
                <Row
                    icon={<LocationIcon/>}
                    title="محل برگزاری"
                    value={data.location}
                />
                <Row
                    icon={<TimeIcon/>}
                    title="مهلت ثبت نام"
                    value={data.registrationEndDate}
                />
                <Button
                    type="primary"
                    className="event-card-action-btn"
                    onClick={handleNavigation}
                >
                    {handleBtnText(data.status, data.userIsRegistered)}
                </Button>
            </Flex>
        </Flex>
    );
};

export default EventCard;

function handleBtnText(status, isRegistered) {
    const BTN_TEXT = {
        report: "مشاهده گزارش",
        detail: "مشاهده جزئیات",
        register: "مشاهده جزئیات و ثبت نام",
    };
    switch (status) {
        case EVENT_STATUS.attended:
            return BTN_TEXT.report;
        case EVENT_STATUS.register_open:
            return isRegistered ? BTN_TEXT.detail : BTN_TEXT.register;
        case EVENT_STATUS.register_close:
            return BTN_TEXT.detail;

        default:
            return BTN_TEXT.detail;
    }
}
