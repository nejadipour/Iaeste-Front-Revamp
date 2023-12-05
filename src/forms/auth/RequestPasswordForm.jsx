import {App, Button, Form, Input} from "antd";
import {loginRules} from "../../validations/LoginFormValidation.jsx";
import {useClient} from "../../contexts/client/ClientContext.jsx";

export default function RequestPasswordForm(props) {
    const {switcher} = props;
    const [form] = Form.useForm();
    const {client} = useClient();
    const {notification} = App.useApp();

    const onFinish = (values) => {
        client.post("auth/request_password/", values)
            .then(() => {
                notification.success({message: "ایمیل تغییر رمز عبور برای شما ارسال شد"});
            })
            .catch(() => {
                notification.error({message: "خطا در بازیابی رمز عبور"});
            })
    }

    return (
        <Form form={form} onFinish={onFinish}>
            <div style={{marginBottom: '30px', textAlign: 'center'}}>
                فراموشی رمز عبور
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

            <div style={{textAlign: 'center'}}>
                <Button htmlType={"submit"} type={"primary"} size={"large"}>
                    ارسال ایمیل
                </Button>
            </div>

            <div style={{fontSize: 12, marginTop: '50px', textAlign: "center", cursor: "pointer"}}>
                <span onClick={() => switcher("login")}>بازگشت</span>
            </div>
        </Form>
    )
}
