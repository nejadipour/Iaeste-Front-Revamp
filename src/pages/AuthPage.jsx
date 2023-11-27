import {Col, Layout, Row} from "antd";
import AuthCard from "../components/auth/AuthCard.jsx";
import AuthImage from "../components/auth/AuthImage.jsx";
import {useState} from "react";
import RegisterForm from "../forms/auth/RegisterForm.jsx";
import LoginForm from "../forms/auth/LoginForm.jsx";

const {Content} = Layout;

export default function AuthPage() {
    const [loginProps, setLoginProps] = useState();
    const [registerProps, setRegisterProps] = useState();

    const [currentKey, setCurrentKey] = useState("login");

    const switcher = (key, props) => {
        setCurrentKey(key);
        switch (key) {
            case "register":
                setRegisterProps(props);
                break;
            case "login":
                setLoginProps(props);
                break;
            default:
                setCurrentKey("login");
        }
    }

    const getContent = (key) => {
        let content
        switch (key ? key : currentKey) {
            case "register":
                content = <RegisterForm {...registerProps} switcher={switcher}/>
                break;
            case "login":
                content = <LoginForm {...loginProps} switcher={switcher}/>
                break;
            default:
                content = <LoginForm {...loginProps} switcher={switcher}/>
        }

        return content;
    }

    return (
        <Layout>
            <Content>
                <Row justify={"center"} align={"middle"}>
                    <Col xl={12} xs={24}>
                        <AuthCard content={getContent()}/>
                    </Col>

                    <Col xl={12} xs={0}>
                        <AuthImage
                            imageSrc={"/assets/images/login_image.png"}
                        />
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}
