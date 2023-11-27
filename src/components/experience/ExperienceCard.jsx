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
                }
            }}
        >
            <Card style={{minHeight: 450, borderRadius: "15px", boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)'}}>
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
                    <Col xs={7}>
                        <Typography.Title level={4}>{experience.fullname}</Typography.Title>

                        <ConfigProvider
                            theme={{
                                token: {
                                    lineHeight: 0.5
                                }
                            }}
                        >
                            <Typography.Paragraph>
                                <LocationIcon style={iconsStyle}/>
                                {experience.country}
                            </Typography.Paragraph>

                            <Typography.Paragraph>
                                <FieldIcon style={iconsStyle}/>
                                {experience.field}
                            </Typography.Paragraph>

                            <Typography.Paragraph>
                                <UniversityIcon style={iconsStyle}/>
                                {experience.university}
                            </Typography.Paragraph>

                            <Typography.Paragraph>
                                <CalendarIcon style={iconsStyle}/>
                                {direction === "rtl" ? `کارآموزی در ${experience.transfer_season}` : `internship in ${experience.transfer_season}`}
                            </Typography.Paragraph>
                        </ConfigProvider>
                    </Col>

                    <Col xs={1} style={{marginTop: "2rem", marginBottom: "1rem"}}>
                        <Divider type={"vertical"} style={{height: "100%"}}/>
                    </Col>

                    <Col xs={16} style={{marginTop: "2rem"}}>
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
