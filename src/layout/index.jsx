import {ConfigProvider, Layout} from "antd";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";
import {useState} from "react";
import Sidebar from "./Sidebar.jsx";

export default function MainApp() {
    const [broken, setBroken] = useState(false);
    const [collapsed, setCollapsed] = useState(true);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        bodyBg: "#ffffff",
                    }
                }
            }}
        >
            <Layout style={{minHeight: '100vh'}}>
                <Header broken={broken} collapsed={collapsed} setCollapsed={setCollapsed}/>

                <Layout>
                    <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} setBroken={setBroken}/>
                    <Content/>
                </Layout>

                <Footer/>
            </Layout>
        </ConfigProvider>
    )
}
