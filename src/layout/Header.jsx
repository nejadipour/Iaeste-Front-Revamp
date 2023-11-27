import {Button, Col, ConfigProvider, Divider, Image, Layout, Row} from "antd";
import {Link} from "react-router-dom";
import MainMenu from "./Menu.jsx";
import LoginIcon from "../components/icons/LoginIcon.jsx";

export default function Header() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        headerBg: "#ffffff",
                        headerPadding: "20px 6vw 0px 6vw"
                    }
                }
            }}
        >
            <Layout.Header style={{height: "100%"}}>
                <Row gutter={[24, 24]} align={"middle"} justify={"space-between"}>
                    <Col md={3}>
                        <Link to="/">
                            <Image
                                preview={false}
                                alt={""}
                                src={"/assets/images/logo_dark.svg"}
                            />
                        </Link>
                    </Col>

                    <Col md={18}>
                        <MainMenu/>
                    </Col>

                    <Col>
                        <Link to={"/auth"}>
                            <Button style={{display: "flex"}} type={"primary"} icon={<LoginIcon/>}>
                                ورود / ثبت نام
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <ConfigProvider
                    theme={{
                        token: {
                            lineWidth: 2
                        }
                    }}
                >
                    <Divider style={{backgroundColor: "#0b3d59", marginTop: "10px"}}/>
                </ConfigProvider>

            </Layout.Header>
        </ConfigProvider>
    )
}
