import {Avatar, Card, Col, ConfigProvider, Divider, Image, Row, Typography} from "antd";
import {DownOutlined} from "@ant-design/icons";
import UniversityIcon from "../icons/UniversityIcon.jsx";
import FieldIcon from "../icons/FieldIcon.jsx";
import LocationIcon from "../icons/LocationIcon.jsx";
import CalendarIcon from "../icons/CalendarIcon.jsx";

export default function ExperienceCard(props) {
    const {experience, direction} = props;
    const iconsStyle = {padding: direction === "rtl" ? "0px 0px 0px 5px" : "0px 5px 0px 0px"}

    return (
        <ConfigProvider
            direction={direction}
            theme={{
                components: {
                    Avatar: {
                        containerSize: 120
                    },
                    Typography: {
                        titleMarginBottom: "1.5rem"
                    }
                },
                token: {
                    lineHeight: 1.8,
                    fontSize: 16,
                    colorSplit: "#0b3d59",
                    fontFamily: direction === "ltr" ? "IranSansEn" : "IranSans"
                }
            }}
        >
            <Card
                bordered={false}
                style={{
                    minHeight: 450,
                    borderRadius: "15px",
                    boxShadow: direction === "rtl" ? '0 0 8px rgba(0, 0, 0, 0)' : '0 0 8px rgba(0, 0, 0, 0.2)'
                }}
            >
                <Row align={"top"} justify={"space-between"}>
                    <Col>
                        <Avatar src={experience.image}/>
                    </Col>

                    <Col>
                        <Image src={experience.country_icon} height={50} preview={false}
                               style={{borderRadius: 5, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"}}/>
                    </Col>
                </Row>

                <Row>
                    <Col xs={24} md={7}>
                        <Typography.Title level={4}>{experience.fullname}</Typography.Title>

                        <Typography.Paragraph style={{marginBottom: 0}}>
                            <LocationIcon style={iconsStyle}/>
                            {experience.country}
                        </Typography.Paragraph>

                        <Typography.Paragraph style={{marginBottom: 0}}>
                            <FieldIcon style={iconsStyle}/>
                            {experience.field}
                        </Typography.Paragraph>

                        <Typography.Paragraph style={{marginBottom: 0}}>
                            <UniversityIcon style={iconsStyle}/>
                            {experience.university}
                        </Typography.Paragraph>

                        <Typography.Paragraph style={{marginBottom: 0}}>
                            <CalendarIcon style={iconsStyle}/>
                            {direction === "rtl" ? `کارآموزی در ${experience.transfer_season}` : `internship in ${experience.transfer_season}`}
                        </Typography.Paragraph>
                    </Col>

                    <Col xs={24} md={0}>
                        <Divider type={"horizontal"} style={{marginBottom: "-1rem"}}/>
                    </Col>

                    <Col xs={0} md={1} style={{marginTop: "2rem", marginBottom: "1rem"}}>
                        <Divider type={"vertical"} style={{height: "100%"}}/>
                    </Col>

                    <Col xs={24} md={16} style={{marginTop: "2rem"}}>
                        <Typography.Paragraph
                            style={{textAlign: "justify"}}
                            ellipsis={{
                                expandable: true,
                                rows: 7,
                                symbol: <div style={{color: "#0b3d59", textAlign: "end", marginTop: "20px"}}>
                                    {direction === "rtl" ? "ادامه" : "continue"}
                                    <DownOutlined/>
                                </div>
                            }}
                        >
                            {experience.description}
                        </Typography.Paragraph>
                    </Col>
                </Row>
            </Card>
        </ConfigProvider>
    )
}
