import {useEffect, useRef, useState} from "react";
import {Card, Col, ConfigProvider, Image, Row, Typography} from "antd";
import QueueAnim from "rc-queue-anim";

export default function DescriptionCard(props) {
    const [isHovered, setIsHovered] = useState(false);
    const {src, icon, title, description, objectPosition} = props;
    const titleRef = useRef(null);
    const [titleHeight, setTitleHeight] = useState("20%");

    useEffect(() => {
        const titleElement = titleRef.current;
        if (titleElement) {
            setTitleHeight(titleElement.offsetHeight + 10);
        }
    }, [])

    return (
        <ConfigProvider
            theme={{
                token: {
                    fontSizeHeading5: 14,
                    colorTextHeading: "#ffffff",
                    colorText: "#ffffff"
                }
            }}
        >
            <Card style={{height: 250, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"}}>
                <div style={{position: "relative", margin: -24}}>
                    <Image
                        height={250}
                        width={"100%"}
                        preview={false}
                        style={{
                            borderRadius: "5px",
                            objectFit: "cover",
                            objectPosition: objectPosition || "bottom",
                        }}
                        alt={""}
                        src={src}
                    />

                    <Row
                        style={{height: "100%", width: "100%", bottom: 0, position: "absolute"}}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Col xs={21}>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    background: "linear-gradient(to right, rgba(11, 61, 89, 0.8), rgba(17, 124, 118, 0.8))",
                                    padding: "8px",
                                    height: isHovered ? "100%" : titleHeight,
                                    overflow: "hidden",
                                    transition: "0.3s ease-in-out",
                                    borderRadius: isHovered ? "0px 5px 5px 0px" : "0px 0px 5px 0px"
                                }}
                            >
                                <Typography.Title ref={titleRef} style={{marginTop: 0, direction: "ltr"}} level={4}>
                                    {title}
                                </Typography.Title>
                                {isHovered &&
                                    <QueueAnim delay={200} type={"bottom"} style={{height: "100%", display: "flex"}}>
                                        <div key={"committee-paragraph"}>
                                            <Typography.Paragraph style={{textAlign: "justify"}}>
                                                {description}
                                            </Typography.Paragraph>
                                        </div>
                                    </QueueAnim>
                                }
                            </div>
                        </Col>

                        <Col xs={3}>
                            <div
                                style={{
                                    textAlign: "center",
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    backgroundColor: "#0b3d59",
                                    height: isHovered ? "100%" : titleHeight,
                                    overflow: "hidden",
                                    transition: "0.3s ease-in-out",
                                    borderRadius: isHovered ? "5px 0px 0px 5px" : "0px 0px 0px 5px"
                                }}
                            >
                                <div style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                }}>
                                    {icon}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card>
        </ConfigProvider>
    )
}
