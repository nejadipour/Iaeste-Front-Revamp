import {Col, ConfigProvider, Flex, Image, Layout, Row} from "antd";
import {Link} from "react-router-dom";
import {InstagramOutlined, LinkedinFilled, MailOutlined} from "@ant-design/icons";
import TelegramIcon from "../components/icons/TelegramIcon.jsx";
import MenuItem from "./MenuItem.jsx";

const socialMediaIconStyle = {fontSize: 25, opacity: "50%", color: "#ffffff"}
const footerItemTextStyle = {color: "#ffffff", opacity: "50%", transition: 'opacity 0.3s ease-in-out'}

const FooterItem = ({to, scroll, children}) => (
    <Flex vertical>
        <MenuItem
            onMouseOver={(e) => {
                e.target.style.opacity = '1';
            }}
            onMouseOut={(e) => {
                e.target.style.opacity = '0.5';
            }}
            style={footerItemTextStyle}
            to={to}
            scroll={scroll}
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
            <Layout.Footer style={{bottom: 0, left: 0, right: 0}}>
                <Row justify={"space-between"} align={"middle"} gutter={[24, 24]}>
                    <Col xs={24} xl={18}>
                        <Row gutter={[100, 10]} justify={"space-evenly"}>
                            <Col xs={24} md={8} lg={6}>
                                <FooterItem to={"/internship"}>{"فرصت‌های کارآموزی"}</FooterItem>
                                <FooterItem to={"/events"}>{"رویدادها"}</FooterItem>
                            </Col>

                            <Col xs={24} md={8} lg={6}>
                                <FooterItem to={"/"} scroll={"steps"}>{"مراحل پذیرش"}</FooterItem>
                                <FooterItem to={"collaborate"}>{"همکاران"}</FooterItem>
                            </Col>

                            <Col xs={24} md={8} lg={6}>
                                <FooterItem to={"blogs"}>{"وبلاگ و اخبار"}</FooterItem>
                                <FooterItem to={"/"} scroll={"experiences"}>{"تجربه‌ها"}</FooterItem>
                            </Col>

                            <Col xs={24} md={8} lg={6}>
                                <FooterItem to={"about-us"}>{"درباره ما"}</FooterItem>
                                <FooterItem to={"/contact-us"}>{"ارتباط با ما"}</FooterItem>
                            </Col>
                        </Row>

                    </Col>

                    <Col xs={24} xl={6} flex={"auto"}>
                        <div style={{textAlign: "center"}}>
                            <Flex justify={"center"} style={{marginBottom: 12}}>
                                <Image
                                    preview={false}
                                    alt={""}
                                    height={80}
                                    src={"/assets/images/logo_light.svg"}
                                    style={{opacity: "50%"}}
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
                                    <LinkedinFilled style={socialMediaIconStyle}/>
                                </Link>

                                <Link to={"https://www.instagram.com/iaeste_iran/"}>
                                    <InstagramOutlined style={socialMediaIconStyle}/>
                                </Link>
                            </Flex>
                        </div>
                    </Col>
                </Row>
            </Layout.Footer>
        </ConfigProvider>
    )
}
