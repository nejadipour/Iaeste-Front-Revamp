import {Badge, Col, Divider, Flex, Row, Typography} from "antd";
import QueueAnim from "rc-queue-anim";

export default function VerticalLayout({item, collapsed}) {
    const {label, icon, title, content} = item;

    return (
        <Row align={"stretch"}>
            <Col xs={collapsed ? 24 : 4}>
                <Flex vertical>
                    <Badge color={"#0b3d59"}
                           style={{borderColor: "transparent"}}
                           count={label}/>
                    <div style={{justifyContent: "center", display: "flex"}}>
                        {icon}
                    </div>
                </Flex>
            </Col>

            {!collapsed &&
                <>
                    <Col xs={1}>
                        <QueueAnim delay={200} type={"left"} style={{height: "100%", display: "flex"}}>
                            <div key={"collapse-item-divider"}>
                                <Divider type={"vertical"} style={{height: "100%"}}/>
                            </div>
                        </QueueAnim>
                    </Col>

                    <Col xs={collapsed ? 0 : 19}>
                        <QueueAnim delay={200} type={"left"}>
                            <div key={"collapse-item-content"}>
                                <Typography.Title style={{marginTop: 0}} level={5}>{title}</Typography.Title>
                                <Typography.Paragraph style={{textAlign: "justify"}}>
                                    {content}
                                </Typography.Paragraph>
                            </div>
                        </QueueAnim>
                    </Col>
                </>
            }
        </Row>
    )
}
