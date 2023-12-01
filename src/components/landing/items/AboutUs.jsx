import {Col, ConfigProvider, Image, Row, Typography} from "antd";
import GradientButton from "../../Button/GradientButton.jsx";
import {DoubleLeftOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export default function AboutUs({hideMore, primaryTexts, secondaryTexts}) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontSize: 18,
                },
                components: {
                    Typography: {
                        lineHeight: 2
                    }
                }
            }}
        >
            <Row gutter={[70, 24]} justify={"space-between"} align={"middle"}>
                <Col md={14} xs={24}>

                    {primaryTexts?.map((text, index) => (
                        <Typography.Paragraph style={{textAlign: "justify", marginBottom: "3px"}} key={index}>
                            {text}
                        </Typography.Paragraph>
                    ))}

                </Col>

                <Col md={10} xs={24}>
                    <div style={{textAlign: "left"}}>
                        <Image
                            alt={""}
                            src={"/assets/images/work_exp_discover.png"}
                            preview={false}
                        />
                    </div>
                </Col>

                {!hideMore &&
                    <Col>
                        <Link to={"/about-us"}>
                            <GradientButton style={{display: "flex", fontSize: 16}}>{"بیشتر بخوانید"}<DoubleLeftOutlined
                                style={{marginTop: 3}}/></GradientButton>
                        </Link>
                    </Col>
                }

                <Col>
                    {secondaryTexts?.map((text, index) => (
                        <Typography.Paragraph style={{textAlign: "justify", marginBottom: "3px"}} key={index}>
                            {text}
                        </Typography.Paragraph>
                    ))}
                </Col>
            </Row>
        </ConfigProvider>
    )
}
