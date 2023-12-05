import {App, Button, Form, Input} from "antd";
import {useClient} from "../../contexts/client/ClientContext.jsx";
import {registerRules} from "../../validations/RegisterFormValidation.jsx";

export default function ResetPasswordForm(props) {
    const {switcher, uuid} = props;
    const [form] = Form.useForm();
    const {client} = useClient();
    const {notification} = App.useApp();

    const onFinish = ({password}) => {
        let values = {password: password, uuid: uuid}
        client.post("auth/reset_password/", values)
            .then(() => {
                notification.success({message: "تغییر رمز عبور با موفقیت انجام شد"});
                switcher("login");
            })
            .catch(() => {
                notification.error({message: "خطا در تغییر رمز عبور"});
            })
    }

    return (
        <Form form={form} onFinish={onFinish}>
            <div style={{marginBottom: '30px', textAlign: 'center'}}>
                تغییر رمز عبور
            </div>

            <Form.Item
                key={"password"}
                name={"password"}
                rules={registerRules.password}
            >
                <Input.Password
                    placeholder={"کلمه عبور جدید"}
                    size={"large"}
                />
            </Form.Item>

            <Form.Item
                key={"confirm_password"}
                name={"confirm_password"}
                rules={registerRules.confirm_password}
            >
                <Input.Password
                    placeholder={"تکرار کلمه عبور جدید"}
                    size={"large"}
                />
            </Form.Item>

            <div style={{textAlign: 'center'}}>
                <Button htmlType={"submit"} type={"primary"} size={"large"}>
                    تغییر رمز عبور
                </Button>
            </div>
        </Form>
    )
}
