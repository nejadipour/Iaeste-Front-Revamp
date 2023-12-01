import {Button, ConfigProvider, Flex, Image, Typography} from "antd";
import {DoubleLeftOutlined} from "@ant-design/icons";

export default function Banner({banner, buttons}) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorTextHeading: "#ffffff",
                    colorText: "#ffffff",
                    colorPrimary: "#ffffff"
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
                        textAlign: "right",
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <div style={{marginRight: 50}}>
                            <Typography.Title
                                style={{textShadow: '0 0 8px rgba(0, 0, 0, 0.8)'}}>{"آیسته ایران"}</Typography.Title>
                            <Typography.Title
                                level={5}>{"فرصت‌های کارآموزی خارج از کشور را از دست ندهید!"}</Typography.Title>

                            <Flex style={{marginTop: 25}}>
                                <DoubleLeftOutlined style={{marginLeft: 10, color: "#ffffff"}}/>
                                <Button size={"large"} style={{boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'}}
                                        ghost>{"ثبت نام در آزمون ۲۰۲۴"}</Button>
                            </Flex>
                        </div>

                        <Flex style={{bottom: 15, left: 20, position: "absolute"}}>
                            <Image
                                preview={false}
                                alt={""}
                                height={"3vw"}
                                src={"/assets/images/logo_light.svg"}
                            />
                        </Flex>

                    </div>
                </div>
            </div>
        </ConfigProvider>
    )
}
