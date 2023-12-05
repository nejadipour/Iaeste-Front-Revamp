import {App, Button, Form, Input} from "antd";
import {loginRules} from "../../validations/LoginFormValidation.jsx";
import {useClient} from "../../contexts/client/ClientContext.jsx";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/authentication/AuthContext.jsx";

export default function LoginForm(props) {
    const {switcher} = props;
    const [form] = Form.useForm();
    const {client} = useClient();
    const {notification} = App.useApp();
    const navigate = useNavigate();
    const {handleLogin} = useAuth();

    const onFinish = (values) => {
        client.post("auth/login/", values)
            .then(({data}) => {
                handleLogin(data);
                navigate("/");
            })
            .catch(() => {
                notification.error({message: "احراز هویت ناموفق بود"})
            })
    }

    return (
        <Form form={form} requiredMark={false} onFinish={onFinish}>
            <div style={{marginTop: '30px', marginBottom: '30px', textAlign: 'center'}}>
                ورود به سامانه
            </div>

            <Form.Item
                key={"username"}
                name={"username"}
                rules={loginRules.email}
            >
                <Input
                    placeholder={"ایمیل"}
                    size={"large"}
                />
            </Form.Item>

            <Form.Item
                key={"password"}
                name={"password"}
                rules={loginRules.password}
            >
                <Input.Password
                    placeholder={"کلمه عبور"}
                    size={"large"}
                />
            </Form.Item>

            <div style={{textAlign: 'center'}}>
                <Button htmlType={"submit"} type={"primary"} size={"large"}>
                    ورود
                </Button>
            </div>

            <div style={{fontSize: 12, marginTop: '50px', textAlign: "center"}}>
                حساب کاربری ندارید؟ <a onClick={() => switcher("register")}>ثبت نام کنید</a>
            </div>

            <div style={{fontSize: 12, marginTop: '10px', marginBottom: '50px', textAlign: "center"}}>
                <a onClick={() => switcher("request_password")}>فراموشی رمز عبور</a>
            </div>
        </Form>
    )
}
