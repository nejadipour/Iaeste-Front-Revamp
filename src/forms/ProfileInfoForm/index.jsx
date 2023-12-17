import {Alert, App, Button, Col, Flex, Form, Input, Row, Select} from "antd";
import {useClient} from "../../contexts/client/ClientContext.jsx";
import GradientButton from "../../components/Button/GradientButton.jsx";
import {useState} from "react";
import {registerRules} from "../../validations/RegisterFormValidation.jsx";
import {useProfileOptions} from "../../../utils/hooks/useProfileOptions.js";

function ProfileInfoForm({initialValues}) {
    const [dataLoading, setDataLoading] = useState(false);
    const {fields, universities} = useProfileOptions();
    const [isEditing, setIsEditing] = useState(false);
    const {client} = useClient();
    const {notification} = App.useApp();

    function handleSubmit(form) {
        setDataLoading(true);
        client
            .patch("/auth/edit_profile/", form)
            .then((res) => {
                notification.success({
                    message: "اطلاعات شما با موفقیت بروزرسانی شد.",
                });
                toggleEditMode();
            })
            .catch((error) => {
                notification.success({message: "خطایی رخ داد."});
            })
            .finally(() => setDataLoading(false));
    }

    function toggleEditMode() {
        setIsEditing((prev) => !prev);
    }

    return (
        initialValues && (
            <>
                <Row gutter={64}>
                    <Col xs={24} md={12}>
                        <Alert
                            type="warning"
                            message="شما در حال ویرایش اطلاعات پروفایل خود هستید."
                            style={{margin: '16px 0'}}
                        />
                    </Col>
                </Row>
                <Form
                    layout="vertical"
                    initialValues={initialValues}
                    onFinish={handleSubmit}
                >
                    <Row gutter={64}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="first_name"
                                label="نام"
                                required={false}
                                rules={[{required: true, message: "نام الزامی است"}]}
                            >
                                <Input placeholder="مهدخت" disabled={!isEditing}/>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="last_name"
                                label="نام خانوادگی"
                                required={false}
                                rules={[{required: true, message: "نام خانوادگی الزامی است"}]}
                            >
                                <Input placeholder="شاه مرادی" disabled={!isEditing}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={64}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="email"
                                label="آدرس ایمیل"
                                required={false}
                                rules={registerRules.email}
                            >
                                <Input
                                    placeholder="mahdokht.shahmoradi@gamil.com"
                                    disabled={initialValues?.email || !isEditing}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="phone"
                                label="شماره تماس"
                                required={false}
                                rules={registerRules.phone}
                            >
                                <Input placeholder="" disabled={!isEditing}/>
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
                                    disabled={!isEditing}
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
                                    disabled={!isEditing}
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

                    <Flex justify="flex-end" gap={16}>
                        {isEditing === false ? (
                            <GradientButton type="primary" onClick={toggleEditMode}>
                                ویرایش
                            </GradientButton>
                        ) : (
                            <Button onClick={toggleEditMode}>انصراف</Button>
                        )}
                        {isEditing && (
                            <GradientButton
                                type="primary"
                                htmlType="submit"
                                loading={dataLoading}
                            >
                                ثبت
                            </GradientButton>
                        )}
                    </Flex>
                </Form>
            </>
        )
    );
}

export default ProfileInfoForm;
