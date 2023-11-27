import {Button, Result} from "antd";
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <div style={{minHeight: "100vh", textAlign: "center"}}>
            <Result
                status="404"
                title="404"
                subTitle="صفحه‌ی مورد نظر یافت نشد"
                extra={[
                    <Link key={"landing"} to={"/"}><Button type={"primary"}>{"صفحه اصلی"}</Button></Link>
                ]}
            />
        </div>
    )
}
