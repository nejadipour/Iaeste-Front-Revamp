import {Layout} from "antd";
import {Outlet} from "react-router-dom";

export default function Content() {
    return (
        <Layout.Content style={{padding: "1rem 6vw 3rem 6vw"}}>
            <Outlet/>
        </Layout.Content>
    )
}
