import {Col, Layout, Row} from "antd";
import AuthCard from "../components/auth/AuthCard.jsx";
import AuthImage from "../components/auth/AuthImage.jsx";
import {useState} from "react";
import RegisterForm from "../forms/auth/RegisterForm.jsx";
import LoginForm from "../forms/auth/LoginForm.jsx";
import RequestPasswordForm from "../forms/auth/RequestPasswordForm.jsx";
import ResetPasswordForm from "../forms/auth/ResetPasswordForm.jsx";
import {useLocation, useParams} from "react-router-dom";

const {Content} = Layout;

export default function AuthPage() {
    const params = useParams();
    const [loginProps, setLoginProps] = useState(params);
    const [registerProps, setRegisterProps] = useState(params);
    const [requestPassProps, setRequestPassProps] = useState(params);
    const [resetPassProps, setResetPassProps] = useState(params);

    const [currentKey, setCurrentKey] = useState(params.mode || "login");

    const switcher = (key, props) => {
        setCurrentKey(key);
        switch (key) {
            case "register":
                setRegisterProps({...registerProps, ...props});
                break;
            case "login":
                setLoginProps({...loginProps, ...props});
                break;
            case "request_password":
                setRequestPassProps({...requestPassProps, ...props});
                break;
            case "reset_password":
                setResetPassProps({...resetPassProps, ...props});
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
            case "request_password":
                content = <RequestPasswordForm {...requestPassProps} switcher={switcher}/>
                break;
            case "reset_password":
                content = <ResetPasswordForm {...resetPassProps} switcher={switcher}/>
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
