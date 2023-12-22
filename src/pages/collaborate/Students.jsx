import {
    Col,
    Row,
    Form,
    Select,
    Input,
    Button,
    Upload,
    Typography,
    App,
    Flex,
} from "antd";
import DescriptionCard from "../../components/Card/DescriptionCard.jsx";
import {
    COLLABORATION_TYPES,
    ITCommitteeDescription,
    localCommitteeDescription,
    marketingCommitteeDescription,
} from "../../constants/CollaborateConstants.jsx";
import LocalIcon from "../../components/icons/LocalIcon.jsx";
import ITIcon from "../../components/icons/ITIcon.jsx";
import MarketingIcon from "../../components/icons/MarketingIcon.jsx";
import {registerRules} from "../../validations/RegisterFormValidation.jsx";
import {useProfileOptions} from "../../../utils/hooks/useProfileOptions.js";
import {handleCollaborationReq} from "../../../utils/index.js";
import {useClient} from "../../contexts/client/ClientContext.jsx";
import {useAuth} from "../../contexts/authentication/AuthContext";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function StudentsTab() {
    const [resumeFile, setResumeFile] = useState([]);
    const {fields, universities} = useProfileOptions();
    const {authUser} = useAuth();
    const {client} = useClient();
    const [requestLoading, setRequestLoading] = useState(false);
    const {notification} = App.useApp();
    const navigate = useNavigate();

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

    const normFile = (e) => {
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
        <>
            <Row justify={"start"} gutter={[24, 24]}>
                <Col xs={24} lg={12} xxl={8}>
                    <DescriptionCard
                        title={"Local Committee"}
                        src={"/assets/images/local_committee.jpg"}
                        description={localCommitteeDescription}
                        icon={<LocalIcon/>}
                    />
                </Col>

                <Col xs={24} lg={12} xxl={8}>
                    <DescriptionCard
                        title={"Marketing & Graphic Design Committee"}
                        src={"/assets/images/marketing_committee.jpg"}
                        description={marketingCommitteeDescription}
                        icon={<MarketingIcon/>}
                    />
                </Col>

                <Col xs={24} lg={12} xxl={8}>
                    <DescriptionCard
                        title={"IT Committee"}
                        src={"/assets/images/IT_committee.jpg"}
                        description={ITCommitteeDescription}
                        icon={<ITIcon/>}
                    />
                </Col>
            </Row>

            <div className="card-layout" style={{marginTop: 40}}>
                <Typography.Title
                    level={4}
                    style={{textAlign: "center", margin: 0, marginBottom: 40}}
                >
                    درخواست همکاری
                </Typography.Title>
                <Typography.Title level={5} style={{margin: 0, marginBottom: 25}}>
                    مشخصات درخواست دهنده
                </Typography.Title>
                {authUser ? (
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
                            <Typography.Link
                                // href={authUser.resume_file}
                                href="https://iaeste.ir/media/career/resume-test_klGNkVu.pdf"
                                target="_blank"
                            >
                                رزومه
                            </Typography.Link>
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
                ) : (
                    <Flex vertical gap={16}>
                        <Typography.Text>
                            برای ثبت درخواست همکاری ابتدا وارد شوید.
                        </Typography.Text>
                        <Button type="primary" onClick={() => navigate("/auth")}
                                style={{alignSelf: 'center', width: 200}}>
                            ورود
                        </Button>
                    </Flex>
                )}
            </div>
        </>
    );
}
