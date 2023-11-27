import {Button, Form, Input} from "antd";
import {loginRules} from "../../validations/LoginFormValidation.jsx";

export default function LoginForm(props) {
    const {switcher} = props;
    const [form] = Form.useForm();

    return (
        <Form form={form} requiredMark={false}>
            <div style={{marginTop: '30px', marginBottom: '30px', textAlign: 'center'}}>
                ورود به سامانه
            </div>

            <Form.Item
                key={"email"}
                name={"email"}
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
                <Button type={"primary"} size={"large"}>
                    ورود
                </Button>
            </div>

            <div style={{fontSize: 12, marginTop: '50px', marginBottom: '50px', textAlign: "center"}}>
                حساب کاربری ندارید؟ <a onClick={() => switcher("register")}>ثبت نام کنید</a>
            </div>
        </Form>
    )
}
