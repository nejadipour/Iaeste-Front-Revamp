import {Button, Flex, Form, Input, Row, Typography} from "antd";
import React from "react";
import {useAuth} from "../contexts/authentication/AuthContext.jsx";
import {useParams} from "react-router-dom";
import ProfileInfoForm from "../components/ProfileInfoForm/index.jsx";


const RegisterPage = () => {
    const {authUser} = useAuth();
    const {id} = useParams();

    return (
        <div>
            <div className="card-layout">
                <Typography.Title level={3}>مشخصات شرکت کننده</Typography.Title>
                <ProfileInfoForm initialVlaues={authUser}/>
            </div>
            <div className="card-layout">
                <Typography.Title level={3}>سوالات ثبت نام</Typography.Title>
                <Form>
                    <Form.Item>
                        <Input.TextArea rows={4}/>
                    </Form.Item>
                    <Flex justify="flex-end">
                        <Button type="primary" htmlType="submit">ثبت</Button>
                    </Flex>
                </Form>
            </div>
            <div className="card-layout">
                <Typography.Title level={3}>ثبت نام نهایی و پرداخت</Typography.Title>
                <Form colon={false} layout="inline">
                    <Form.Item label="کد تخفیف">
                        <Input/>
                    </Form.Item>
                    <Button htmlType="submit">اعمال کد تخفیف</Button>
                </Form>
                <Typography.Paragraph>قابل پرداخت: </Typography.Paragraph>
                <Flex justify="center">
                    <Button type="primary">پرداخت</Button>
                </Flex>
            </div>
        </div>
    );
};

export default RegisterPage;
