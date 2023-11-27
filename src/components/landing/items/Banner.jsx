import {ConfigProvider, Image, Typography} from "antd";

export default function Banner({banner, buttons}) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorTextHeading: "#ffffff",
                }
            }}
        >
            <div style={{textAlign: "center"}}>
                <div style={{position: "relative", display: "inline-block"}}>
                    <Image
                        src={"/assets/images/banner.png"}
                        preview={false}
                    />

                    <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        background: "linear-gradient(to right, rgba(11, 61, 89, 0.2), rgba(17, 124, 118, 0.8))",
                        padding: "8px",
                        height: "100%",
                        overflow: "hidden",
                        textAlign: "right"
                    }}>
                        <Typography.Title>{"آیسته ایران"}</Typography.Title>

                    </div>
                </div>
            </div>
        </ConfigProvider>
    )
}
