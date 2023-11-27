import {Col, ConfigProvider, Flex, Image, Layout, Row} from "antd";
import {Link} from "react-router-dom";
import {InstagramOutlined, LinkedinOutlined, MailOutlined} from "@ant-design/icons";
import TelegramIcon from "../components/icons/TelegramIcon.jsx";
import MenuItem from "./MenuItem.jsx";

const socialMediaIconStyle = {fontSize: 25, opacity: "50%", color: "#ffffff"}
const footerItemTextStyle = {color: "#ffffff", opacity: "50%", transition: 'opacity 0.3s ease-in-out'}

const FooterItem = ({type, to, children}) => (
    <Flex vertical>
        <MenuItem
            onMouseOver={(e) => {
                e.target.style.opacity = '1';
            }}
            onMouseOut={(e) => {
                e.target.style.opacity = '0.5';
            }}
            style={footerItemTextStyle}
            type={type}
            to={to}
        >
            {children}
        </MenuItem>
    </Flex>
)

export default function Footer() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        footerBg: "#0b3d59",
                        footerPadding: "80px 6vw 80px 6vw"
                    }
                }
            }}
        >
            <Layout.Footer style={{bottom:0, left: 0, right: 0}}>
                <Row justify={"space-between"} align={"middle"} gutter={[24, 24]}>
                    <Col xs={16}>
                        <Row gutter={[100, 24]}>
                            <Col>
                                <FooterItem type={"link"} to={"/internship"}>{"فرصت‌های کارآموزی"}</FooterItem>
                                <FooterItem type={"link"} to={"/events"}>{"رویدادها"}</FooterItem>
                            </Col>

                            <Col>
                                <FooterItem type={"scroll"} to={"steps"}>{"مراحل پذیرش"}</FooterItem>
                                <FooterItem type={"link"} to={"collaborate"}>{"همکاران"}</FooterItem>
                            </Col>

                            <Col>
                                <FooterItem type={"link"} to={"blogs"}>{"وبلاگ و اخبار"}</FooterItem>
                                <FooterItem type={"scroll"} to={"experiences"}>{"تجربه‌ها"}</FooterItem>
                            </Col>

                            <Col>
                                <FooterItem type={"scroll"} to={"about-us"}>{"درباره ما"}</FooterItem>
                                <FooterItem type={"link"} to={"/contact-us"}>{"ارتباط با ما"}</FooterItem>
                            </Col>
                        </Row>

                    </Col>

                    <Col xs={8} flex={"none"}>
                        <Flex justify={"center"} style={{marginBottom: 12}}>
                            <Image
                                preview={false}
                                alt={""}
                                height={80}
                                src={"/assets/images/logo_light.svg"}
                                style={{opacity: "50%", transition: 'opacity 0.3s ease-in-out',}}
                                onMouseOver={(e) => {
                                    e.target.style.opacity = '1';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.opacity = '0.5';
                                }}
                            />
                        </Flex>

                        <Flex justify={"center"} gap={12}>
                            <Link to={"mailto:Iaesteiran@gmail.com"}>
                                <MailOutlined style={socialMediaIconStyle}/>
                            </Link>

                            <Link to={""}>
                                <TelegramIcon style={socialMediaIconStyle}/>
                            </Link>

                            <Link to={"https://www.linkedin.com/company/iaeste-iran/"}>
                                <LinkedinOutlined style={socialMediaIconStyle}/>
                            </Link>

                            <Link to={"https://www.instagram.com/iaeste_iran/"}>
                                <InstagramOutlined style={socialMediaIconStyle}/>
                            </Link>
                        </Flex>
                    </Col>
                </Row>
            </Layout.Footer>
        </ConfigProvider>
    )
}
