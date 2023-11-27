import {ConfigProvider, Layout} from "antd";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";

export default function MainApp() {
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
                <Header/>

                <Content/>

                <Footer/>
            </Layout>
        </ConfigProvider>
    )
}
