import {App, Avatar, Button, Col, ConfigProvider, Divider, Dropdown, Flex, Image, Layout, Row, Typography} from "antd";
import {Link, useNavigate} from "react-router-dom";
import MainMenu from "./Menu.jsx";
import LoginIcon from "../components/icons/LoginIcon.jsx";
import {useAuth} from "../contexts/authentication/AuthContext.jsx";
import {MenuOutlined} from "@ant-design/icons";

const AuthButton = () => {
    const {authUser, loading, handleLogout} = useAuth();
    const navigate = useNavigate();
    const {notification} = App.useApp();

    const logout = () => {
        try {
            handleLogout();
            notification.success({message: "شما از سامانه خارج شدید"})
            navigate("/");
        } catch {
            notification.error({message: "خطایی در خروج از سامانه رخ داد"})
        }
    }

    const items = [
        {
            key: 'profile',
            label: "مشاهده پروفایل"
        },
        {
            key: 'logout',
            label: "خروج"
        }
    ]

    const onClick = ({key}) => {
        if (key === "profile") {
            navigate("/profile")
        } else {
            if (key === "logout") {
                logout();
            }
        }
    }

    return (
        <>
            {!loading &&
                <>
                    {authUser ?
                        <Dropdown
                            menu={{
                                items: items,
                                onClick: onClick,
                            }}
                            trigger={["click"]}
                        >
                            <Flex align={"center"} gap={8} style={{cursor: "pointer"}}>
                                <Avatar size={"large"} src={authUser.profile_pic}/>
                                <Typography.Title style={{margin: 0}}
                                                  level={5}>{`${authUser.first_name} ${authUser.last_name}`}</Typography.Title>
                            </Flex>
                        </Dropdown> :
                        <Link to={"/auth"}>
                            <Button style={{display: "flex"}} type={"primary"} icon={<LoginIcon/>}>
                                ورود / ثبت نام
                            </Button>
                        </Link>
                    }
                </>
            }
        </>
    )
}

export default function Header(props) {
    const {broken, collapsed, setCollapsed} = props;

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
                {!broken ?
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
                            <MainMenu mode={"horizontal"}/>
                        </Col>

                        <Col>
                            <AuthButton/>
                        </Col>
                    </Row> :

                    <Flex align={"center"} justify={"space-between"}>
                        <Button
                            size={"large"}
                            type={"text"}
                            icon={<MenuOutlined style={{fontSize: '20px', color: "#0b3d59"}}/>}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                width: 60,
                                height: 50,
                            }}
                        />

                        <Link to="/">
                            <Image
                                preview={false}
                                alt={""}
                                src={"/assets/images/logo_dark.svg"}
                                style={{height: "5vh"}}
                            />
                        </Link>
                    </Flex>
                }

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
