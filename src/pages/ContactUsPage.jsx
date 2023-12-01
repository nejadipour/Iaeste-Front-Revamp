import {Button, Card, Col, ConfigProvider, Flex, Form, Input, Row, Typography} from "antd";
import {InstagramOutlined, LinkedinFilled, MailOutlined, PhoneFilled} from "@ant-design/icons";
import {Link} from "react-router-dom";
import TelegramIcon from "../components/icons/TelegramIcon.jsx";

const contactIconStyle = {fontSize: 20, color: "#ffffff", paddingRight: 10}

const ContactItem = ({to, icon, text}) => (
    <Flex align={"center"}>
        {/*<Link to={to}>*/}
        {icon}
        <Typography.Text style={{fontWeight: "bold"}}>{text}</Typography.Text>
        {/*</Link>*/}
    </Flex>
)

export default function ContactUsPage() {
    const [form] = Form.useForm();

    return (
        <Row align={"middle"} justify={"space-evenly"} gutter={[24, 24]}>
            <Col xs={24} md={24} lg={10}>
                <Typography.Title level={3}>{"ارتباط با ما"}</Typography.Title>
                <Form form={form} requiredMark={false} colon={false} layout={"vertical"}>
                    <Form.Item label={"نام و نام خانوادگی"}>
                        <Input size={"large"}/>
                    </Form.Item>

                    <Form.Item label={"آدرس ایمیل یا شماره تماس"}>
                        <Input size={"large"}/>
                    </Form.Item>

                    <Form.Item label={"متن پیام"}>
                        <Input.TextArea autoSize={{minRows: 3, maxRows: 5}} size={"large"}
                                        placeholder={"اینجا بنویسید..."}/>
                    </Form.Item>

                    <Flex justify={"end"}>
                        <Button type={"primary"} size={"large"}>
                            ارسال پیام
                        </Button>
                    </Flex>
                </Form>
            </Col>

            <Col xs={24} md={24} lg={8}>
                <ConfigProvider
                    direction={"ltr"}
                    theme={{
                        token: {
                            colorText: "#ffffff",
                            fontSize: 16
                        }
                    }}
                >
                    <Card style={{backgroundImage: "linear-gradient(to right, #117C76, #0b3d59)", direction: "ltr"}}>
                        <Flex vertical gap={20}>
                            <ContactItem
                                to={"mailto:Iaesteiran@gmail.com"}
                                icon={<MailOutlined style={contactIconStyle}/>}
                                text={"iaesteiran@gmail.com"}
                            />

                            <ContactItem
                                to={"https://www.instagram.com/iaeste_iran/"}
                                icon={<InstagramOutlined style={contactIconStyle}/>}
                                text={"iaeste_iran"}
                            />

                            <ContactItem
                                to={""}
                                icon={<TelegramIcon style={contactIconStyle}/>}
                                text={"t.me/+okJgertFRHpjMW10"}
                            />

                            <ContactItem
                                to={"https://www.linkedin.com/company/iaeste-iran/"}
                                icon={<LinkedinFilled style={contactIconStyle}/>}
                                text={"IAESTE Iran"}
                            />

                            <ContactItem
                                to={"tel:+982188968111"}
                                icon={<PhoneFilled rotate={90} style={contactIconStyle}/>}
                                text={"۰۲۱-۸۸۹۶۸۱۱۱"}
                            />
                        </Flex>
                    </Card>
                </ConfigProvider>
            </Col>
        </Row>
    )
}
