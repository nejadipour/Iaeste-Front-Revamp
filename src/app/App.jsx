import {ConfigProvider, App as AntdApp} from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import '../styles/main.css';
import {ClientProvider} from "../contexts/client/ClientContext.jsx";
import Router from "../router/index.jsx";
import {AuthProvider} from "../contexts/authentication/AuthContext.jsx";


function App() {
    return (
        <ConfigProvider
            direction={"rtl"}
            theme={{
                token: {
                    fontFamily: "IRANSans",
                    colorPrimary: "#0b3d59",
                    fontSize: 16,
                    colorLink: "#0094cd",
                    controlOutline: "#0b3d59",
                    colorTextHeading: "#0b3d59",
                    colorText: "#707070"
                },
            }}
            locale={fa_IR}>
            <AntdApp
                notification={{rtl: true, placement: "top"}}
                message={{rtl: true}}
            >
                <AuthProvider>
                    <ClientProvider>
                        <Router/>
                    </ClientProvider>
                </AuthProvider>
            </AntdApp>
        </ConfigProvider>
    )
}

export default App
