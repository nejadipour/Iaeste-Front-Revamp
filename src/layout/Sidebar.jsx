import {Avatar, ConfigProvider, Divider, Drawer, Flex, Layout, Typography} from "antd";
import MainMenu from "./Menu.jsx";
import {useAuth} from "../contexts/authentication/AuthContext.jsx";
import {useNavigate} from "react-router-dom";


export default function Sidebar(props) {
    const {collapsed, setCollapsed, setBroken} = props;
    const {authUser} = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <Layout.Sider
                breakpoint={"xxl"}
                onBreakpoint={broken => {
                    setBroken(broken);
                }}
                hidden={true}
            />

            <ConfigProvider
                theme={{
                    token: {
                        colorBgElevated: "linear-gradient(to right, #117C76, #0b3d59)"
                    }
                }}
            >
                <Drawer
                    width={300}
                    open={!collapsed}
                    closeIcon={null}
                    onClose={() => setCollapsed(true)}
                >
                    {authUser &&
                        <>
                            <Flex align={"center"} gap={12} style={{cursor: "pointer", paddingRight: 10}}
                                  onClick={() => {
                                      navigate("/profile")
                                      setCollapsed(true);
                                  }}>
                                <Avatar size={"large"} src={authUser.profile_pic}/>
                                <Typography.Title style={{margin: 0, color: "#ffffff"}} level={5}>
                                    {`${authUser.first_name} ${authUser.last_name}`}
                                </Typography.Title>
                            </Flex>
                            <Divider style={{margin: "12px 0", borderColor: "rgba(255, 255, 255, 0.3)"}}/>
                        </>
                    }

                    <MainMenu mode={"vertical"} onSelect={() => setCollapsed(true)}/>
                </Drawer>
            </ConfigProvider>
        </>
    )
}
