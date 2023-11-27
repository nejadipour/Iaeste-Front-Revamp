import {Button, Checkbox, Form, Input, Select} from "antd";
import {useCallback, useEffect, useState} from "react";
import Popup from "../../components/Popup/index.jsx";
import RegisterRules from "../../components/auth/RegisterRules.jsx";
import {useClient} from "../../contexts/client/ClientContext.jsx";
import axios from "axios";
import {registerRules} from "../../validations/RegisterFormValidation.jsx";

export default function RegisterForm(props) {
    const {switcher} = props;
    const [form] = Form.useForm();
    const [openRules, setOpenRules] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [fields, setFields] = useState([]);
    const {client} = useClient();
    const fieldsBaseQuery = "/fields/";

    const fetchDependencies = useCallback(() => {
        const fieldsReq = client.get(fieldsBaseQuery);

        setLoading(true);
        axios.all([
            fieldsReq
        ]).then(axios.spread((...responses) => {
            setFetched(true);
            const fieldsResponse = responses[0];

            const fieldsReceived = []
            fieldsResponse?.data?.forEach((field) => {
                fieldsReceived.push({
                    key: field.id,
                    value: field.persianTitle,
                    label: field.persianTitle
                })
            })
            setFields(fieldsReceived);

            setLoading(false);
        }))
            .catch(() => {

            })
    }, [client])

    useEffect(() => {
        if (!fetched && !loading) {
            fetchDependencies();
        }
    }, [fetched, fetchDependencies, loading])

    return (
        <>
            <Form form={form} requiredMark={false}>
                <div style={{marginTop: '30px', marginBottom: '30px', textAlign: 'center'}}>
                    ثبت نام
                </div>

                <Form.Item>
                    <Input
                        placeholder={"نام"}
                        size={"large"}
                    />
                </Form.Item>

                <Form.Item>
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
                        placeholder={"موبایل (مثال: ۰۹۱۲۳۴۵۶۷۸۹)"}
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

                <Form.Item style={{textAlign: "right"}}>
                    <Checkbox>
                        <a onClick={() => setOpenRules(true)}>قوانین</a> را مطالعه کرده‌ام
                    </Checkbox>
                </Form.Item>

                <div style={{textAlign: 'center'}}>
                    <Button type={"primary"} size={"large"}>
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
