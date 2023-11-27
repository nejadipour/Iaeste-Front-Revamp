import {Col, ConfigProvider, Image, Row, Typography} from "antd";
import {aboutUsText1, aboutUsText2} from "../../../constants/LandingConstants.jsx";
import GradientButton from "../../Button/GradientButton.jsx";
import {DoubleLeftOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export default function AboutUs() {
    return (
        <Row gutter={[70, 24]} justify={"space-between"} align={"middle"}>
            <Col md={14} xs={24}>
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
                    <Typography.Paragraph
                        style={{textAlign: "justify", marginBottom: "3px"}}>{aboutUsText1}</Typography.Paragraph>
                    <Typography.Paragraph style={{textAlign: "justify"}}>{aboutUsText2}</Typography.Paragraph>
                </ConfigProvider>
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

            <Col>
                <Link to={"/about-us"}>
                    <GradientButton style={{display: "flex"}}>{"بیشتر بخوانید"}<DoubleLeftOutlined
                        style={{marginTop: 3}}/></GradientButton>
                </Link>
            </Col>
        </Row>
    )
}
