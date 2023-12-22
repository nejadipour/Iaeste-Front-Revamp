import {App, Button, Col, Flex, Form, Input, Row, Select, Typography, Upload} from "antd";
import {registerRules} from "../../validations/RegisterFormValidation.jsx";
import {handleCollaborationReq} from "../../../utils/index.js";
import {COLLABORATION_TYPES} from "../../constants/CollaborateConstants.jsx";
import {useState} from "react";
import {useProfileOptions} from "../../../utils/hooks/useProfileOptions.js";
import {useAuth} from "../../contexts/authentication/AuthContext.jsx";
import {useClient} from "../../contexts/client/ClientContext.jsx";

export default function StudentsForm() {
    const [resumeFile, setResumeFile] = useState(null);
    const {fields, universities} = useProfileOptions();
    const {authUser} = useAuth();
    const {client} = useClient();
    const [requestLoading, setRequestLoading] = useState(false);
    const {notification} = App.useApp();

    console.log(authUser)

    function handleSubmit(form) {
        setRequestLoading(true);
        handleCollaborationReq(
            {...form, resumeFile: form.resumeFile[0]},
            COLLABORATION_TYPES.student,
            client
        )
            .then(() =>
                notification.success({
                    message: "درخواست شما با موفقیت ثبت شد.",
                })
            )
            .catch(() => {
                notification.error({
                    message: "خطایی رخ داد",
                });
            })
            .finally(() => setRequestLoading(false));
    }

    const normFile = () => {
        return resumeFile;
    };

    function handleBeforeUpload(file) {
        setResumeFile([file]);
        return false;
    }

    function validateResume() {
        return {
            validator(_, value) {
                if (value) {
                    const file = value[0];
                    const size = file.size / (1024 * 1024);
                    if (!/\.(pdf)$/i.test(file.name)) {
                        return Promise.reject("لطفا فایل pdf آپلود کنید");
                    }
                    if (size > 10) {
                        return Promise.reject("حجم فایل بیشتر از 10 مگابایت است");
                    }
                }
                return Promise.resolve();
            },
        };
    }

    return (
        <Form
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={authUser}
        >
            <Row gutter={64}>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="first_name"
                        label="نام"
                        required={false}
                        rules={[{required: true, message: "نام الزامی است"}]}
                    >
                        <Input size={"large"} placeholder="مهدخت"/>
                    </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item
                        name="last_name"
                        label="نام خانوادگی"
                        required={false}
                        rules={[
                            {required: true, message: "نام خانوادگی الزامی است"},
                        ]}
                    >
                        <Input size={"large"} placeholder="شاه مرادی"/>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={64}>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="email"
                        label="آدرس ایمیل"
                        required={false}
                        rules={[{required: true, message: "آدرس ایمیل الزامی است"}]}
                    >
                        <Input
                            size={"large"}
                            placeholder="mahdokht.shahmoradi@gamil.com"
                            disabled={authUser?.email}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="phone"
                        label="شماره تماس"
                        required={false}
                        rules={[{required: true, message: "شماره تماس الزامی است"}]}
                    >
                        <Input size={"large"} placeholder=""/>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={64}>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="university"
                        label="دانشگاه محل تحصیل"
                        required={false}
                        rules={registerRules.university}
                    >
                        <Select
                            options={universities}
                            size={"large"}
                            style={{
                                textAlign: "right",
                            }}
                            placeholder="نام دانشگاه"
                        />
                    </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item
                        name="field"
                        label="رشته تحصیلی"
                        required={false}
                        rules={registerRules.field}
                    >
                        <Select
                            options={fields}
                            listHeight={200}
                            size="large"
                            style={{
                                textAlign: "right",
                            }}
                            placeholder="رشته تحصیلی"
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item
                name="cooperationFields"
                required
                label="در کدام بخش ها قصد همکاری دارید؟"
                rules={[
                    {
                        required: true,
                        message: "لطفا بخشی که قصد همکاری دارید را انتخاب کنید",
                    },
                ]}
            >
                <Select
                    size={"large"}
                    options={[
                        {label: "Local committee", value: "local"},
                        {
                            label: "Marketing and Graphic Design committee",
                            value: "marketingAndGraphicDesign",
                        },
                        {label: "IT committee", value: "IT"},
                    ]}
                />
            </Form.Item>

            <Flex align="center" gap={16}>
                <Form.Item
                    required
                    name="resumeFile"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    rules={[
                        {required: true, message: "رزومه الزامی است"},
                        validateResume(),
                    ]}
                >
                    <Upload
                        accept=".pdf"
                        maxCount={1}
                        beforeUpload={handleBeforeUpload}
                        showUploadList={{showRemoveIcon: false}}
                        onRemove={false}
                    >
                        <Button size={"large"}>بارگذاری رزومه</Button>
                    </Upload>
                </Form.Item>

                {authUser.resume_file &&
                    <Typography.Link
                        href={authUser.resume_file}
                        target="_blank"
                    >
                        رزومه‌ی شما
                    </Typography.Link>
                }
            </Flex>

            <Button
                size="large"
                type="primary"
                htmlType="submit"
                loading={requestLoading}
                style={{margin: "0 auto", display: "block"}}
            >
                درخواست همکاری
            </Button>
        </Form>
    )
}
