import {App, Button, Checkbox, Form, Input, Select} from "antd";
import {useCallback, useEffect, useState} from "react";
import Popup from "../../components/Popup/index.jsx";
import RegisterRules from "../../components/auth/RegisterRules.jsx";
import {useClient} from "../../contexts/client/ClientContext.jsx";
import axios from "axios";
import {registerRules} from "../../validations/RegisterFormValidation.jsx";

export default function RegisterForm(props) {
    const {switcher} = props;
    const [form] = Form.useForm();
    const [rulesAgreed, setRulesAgreed] = useState(false);
    const [openRules, setOpenRules] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [fields, setFields] = useState([]);
    const [universities, setUniversities] = useState([]);
    const {client} = useClient();
    const fieldsBaseQuery = "/fields/";
    const universitiesBaseQuery = "/university/";
    const {notification} = App.useApp();

    const fetchDependencies = useCallback(() => {
        setLoading(true);
        const fieldsReq = client.get(fieldsBaseQuery);
        const universitiesReq = client.get(universitiesBaseQuery);
        axios.all([
            fieldsReq,
            universitiesReq
        ]).then(axios.spread((...responses) => {
            setFetched(true);
            const fieldsResponse = responses[0];
            const universitiesResponse = responses[1];

            const fieldsReceived = []
            fieldsResponse?.data?.forEach((field) => {
                fieldsReceived.push({
                    key: field.id,
                    value: field.persianTitle,
                    label: field.persianTitle
                })
            })
            setFields(fieldsReceived);

            const universitiesReceived = []
            universitiesResponse?.data?.forEach((university) => {
                universitiesReceived.push({
                    key: university.id,
                    value: university.name,
                    label: university.name
                })
            })
            setUniversities(universitiesReceived);

            setLoading(false);
        }))
            .catch(() => {

            })
    }, [client])

    const onFinish = (values) => {
        client.post("/auth/register/", values)
            .then(() => {
                notification.success({message: "ثبت‌نام با موفقیت انجام شد"});
                switcher("login");
            })
            .catch(() => {
                notification.error({message: "خطا در ثبت‌نام"});
            })
    }

    useEffect(() => {
        if (!fetched && !loading) {
            fetchDependencies();
        }
    }, [fetched, fetchDependencies, loading])

    return (
        <>
            <Form form={form} requiredMark={false} onFinish={onFinish}>
                <div style={{marginTop: '30px', marginBottom: '30px', textAlign: 'center'}}>
                    ثبت نام
                </div>

                <Form.Item
                    key={"first_name"}
                    name={"first_name"}
                >
                    <Input
                        placeholder={"نام"}
                        size={"large"}
                    />
                </Form.Item>

                <Form.Item
                    key={"last_name"}
                    name={"last_name"}
                >
                    <Input
                        placeholder={"نام خانوادگی"}
                        size={"large"}
                    />
                </Form.Item>

                <Form.Item
                    key={"email"}
                    name={"email"}
                    rules={registerRules.email}
                >
                    <Input
                        placeholder={"ایمیل (مثال: example@iaeste.ir)"}
                        size={"large"}
                    />
                </Form.Item>

                <Form.Item
                    key={"phone"}
                    name={"phone"}
                    rules={registerRules.phone}
                >
                    <Input
                        addonAfter={"+"}
                        placeholder={"موبایل (مثال: ۹۸۹۱۲۳۴۵۶۷۸۹)"}
                        size={"large"}
                    />
                </Form.Item>

                <Form.Item
                    key={"password"}
                    name={"password"}
                    rules={registerRules.password}
                >
                    <Input.Password
                        placeholder={"کلمه عبور"}
                        size={"large"}
                    />
                </Form.Item>

                <Form.Item
                    key={"confirm_password"}
                    name={"confirm_password"}
                    rules={registerRules.confirm_password}
                >
                    <Input.Password
                        placeholder={"تکرار کلمه عبور"}
                        size={"large"}
                    />
                </Form.Item>

                <Form.Item
                    key={"university"}
                    name={"university"}
                    rules={registerRules.university}
                >
                    <Select
                        options={universities}
                        size={"large"}
                        style={{
                            textAlign: "right",
                        }}
                        placeholder={"نام دانشگاه"}
                    />
                </Form.Item>

                <Form.Item
                    key={"field"}
                    name={"field"}
                    rules={registerRules.field}
                >
                    <Select
                        options={fields}
                        listHeight={200}
                        size={"large"}
                        style={{
                            textAlign: "right",
                        }}
                        placeholder={"رشته تحصیلی"}
                    />
                </Form.Item>

                <div style={{textAlign: "right", marginBottom: 40}}>
                    <Checkbox onClick={() => setRulesAgreed(!rulesAgreed)}>
                        <a onClick={() => setOpenRules(true)}>قوانین</a> را مطالعه کرده‌ام
                    </Checkbox>
                </div>

                <div style={{textAlign: 'center'}}>
                    <Button disabled={!rulesAgreed} htmlType={"submit"} type={"primary"} size={"large"}>
                        ثبت نام
                    </Button>
                </div>

                <div style={{fontSize: 12, marginTop: '50px', marginBottom: '50px', textAlign: "center"}}>
                    حساب کاربری دارید؟ <a onClick={() => switcher("login")}>وارد شوید</a>
                </div>
            </Form>

            <Popup
                styles={{
                    body: {
                        overflowY: 'scroll', height: "50vh"
                    },
                }}
                title={"قوانین ثبت نام"}
                openPopup={openRules}
                setOpenPopup={setOpenRules}
                style={{
                    left: window.innerWidth > 1200 ? "25vw" : "auto",
                }}
            >
                <RegisterRules/>
            </Popup>
        </>
    )
}
