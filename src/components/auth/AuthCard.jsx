import {ConfigProvider, Layout} from "antd";
import {Link} from "react-router-dom";

const {Header, Content} = Layout;


export default function AuthCard(props) {
    const {content} = props;
    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        headerBg: "#ffffff",
                        headerHeight: "8rem"
                    }
                }
            }}
        >
            <Layout style={{minHeight: '100vh'}}>
                <Header>
                    <Link to="/">
                        <img
                            alt={""}
                            src={"/assets/images/logo_dark.svg"}
                            style={{
                                marginTop: "10px",
                                opacity: '60%',
                                transition: 'opacity 0.3s ease-in-out',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.opacity = '1';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.opacity = '0.6';
                            }}
                        />
                    </Link>
                </Header>

                <Content style={{
                    height: '100%',
                    display: 'flex',
                    width: '100%',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        minWidth: 300,
                        width: window.innerWidth > 1200 ? "20vw" : "auto",
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'right',
                    }}>
                        <ConfigProvider
                            theme={{
                                token: {
                                    fontSizeLG: 14,
                                }
                            }}
                        >
                            {content}
                        </ConfigProvider>
                    </div>
                </Content>
            </Layout>
        </ConfigProvider>
    )
}
