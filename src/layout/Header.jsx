import {Avatar, Button, Col, ConfigProvider, Divider, Flex, Image, Layout, Row, Typography} from "antd";
import {Link} from "react-router-dom";
import MainMenu from "./Menu.jsx";
import LoginIcon from "../components/icons/LoginIcon.jsx";
import {useAuth} from "../contexts/authentication/AuthContext.jsx";

export default function Header() {
    const {authUser, loading} = useAuth();

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

                    {!loading &&
                        <Col>
                            {authUser ?
                                <Flex align={"center"} gap={8}>
                                    <Avatar src={authUser.profile_pic}/>
                                    <Typography.Title style={{margin: 0}}
                                                      level={5}>{`${authUser.first_name} ${authUser.last_name}`}</Typography.Title>
                                </Flex> :
                                <Link to={"/auth"}>
                                    <Button style={{display: "flex"}} type={"primary"} icon={<LoginIcon/>}>
                                        ورود / ثبت نام
                                    </Button>
                                </Link>
                            }
                        </Col>
                    }
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
