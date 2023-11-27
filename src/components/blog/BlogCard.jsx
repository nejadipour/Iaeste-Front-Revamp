import {Card, ConfigProvider, Flex, Image, Typography} from "antd";
import {useState} from "react";
import GradientButton from "../Button/GradientButton.jsx";
import {DoubleLeftOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export default function BlogCard({blog}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ConfigProvider
            theme={{
                token: {
                    fontSizeHeading5: 14
                }
            }}
        >
            <Card
                style={{width: 300, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"}}
            >
                <div
                    style={{position: "relative", margin: -24}}
                >
                    <Link to={`/blogs/${blog.id}`}>
                        <Image preview={false} style={{borderRadius: "5px"}} alt={""} src={blog.image}/>
                    </Link>
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            background: "rgba(255, 255, 255, 0.8)",
                            padding: "8px",
                            height: isHovered ? "35%" : "40px",
                            overflow: "hidden",
                            transition: "0.3s ease-in-out",
                            borderRadius: "0px 0px 5px 5px"
                        }}
                    >
                        <Typography.Title style={{marginTop: 0}} level={5}>{blog.title}</Typography.Title>
                        {isHovered &&
                            <>
                                <div>{`نویسنده: ${blog.writers}`}</div>
                                <Flex justify={"end"}>
                                    <Link to={`/blogs/${blog.id}`} state={{blog: blog}}>
                                        <GradientButton style={{fontSize: 12}} size={"small"}>{"بیشتر بخوانید"}
                                            <DoubleLeftOutlined style={{marginTop: 5}}/></GradientButton>
                                    </Link>
                                </Flex>
                            </>}
                    </div>
                </div>
            </Card>
        </ConfigProvider>
    );
}
