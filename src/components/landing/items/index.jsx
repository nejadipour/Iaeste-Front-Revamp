import {Element} from "react-scroll";
import {ConfigProvider, Typography} from "antd";

export default function LandingItem(props) {
    const {id, title, children} = props;

    return (
        <div id={id} style={{paddingBottom: "3rem"}}>
            <ConfigProvider
                theme={{
                    components: {
                        Typography: {
                            titleMarginBottom: "1.5rem"
                        }
                    }
                }}
            >
                <Typography.Title level={3}>{title}</Typography.Title>
            </ConfigProvider>
            {children}
        </div>
    )
}
