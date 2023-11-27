import {ConfigProvider} from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import '../styles/main.css';
import {ClientProvider} from "../contexts/client/ClientContext.jsx";
import Router from "../router/index.jsx";


function App() {
    return (
        <ConfigProvider
            direction={"rtl"}
            theme={{
                token: {
                    fontFamily: "IRANSans",
                    fontSize: 14,
                    colorPrimary: "#0b3d59",
                    colorLink: "#0094cd",
                    controlOutline: "#0b3d59",
                    colorTextHeading: "#0b3d59",
                    colorText: "#707070"
                },
            }}
            locale={fa_IR}>
            <ClientProvider>
                <Router/>
            </ClientProvider>
        </ConfigProvider>
    )
}

export default App
