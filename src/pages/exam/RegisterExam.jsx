import {Button, Checkbox, Flex, Form, Select, Typography} from "antd";
import ProfileInfoForm from "../../components/ProfileInfoForm/index.jsx";
import React from "react";

export default function RegisterExam() {
    return (
        <Flex gap={40}>
            <Flex vertical justify='space-between' className="exam-forms">
                <div className="card-layout">
                    <ProfileInfoForm />
                </div>
                <div className="card-layout">
                    <Form layout="vertical">
                        <Form.Item
                            required
                            label="گروه رشته ای که قصد رقابت در آن را دارید انتخاب کنید"
                            rules={{
                                required: true,
                                message: "لطفا گروه رشته را مشخص کنید",
                            }}
                        >
                            <Select/>
                        </Form.Item>
                    </Form>
                </div>
            </Flex>
            <Flex
                vertical
                className="exam-payment-container"
            >
                <Typography.Title level={4}>پرداخت</Typography.Title>
                <Form layout="vertical">
                    <Form.Item name="disabled" valuePropName="checked">
                        <Checkbox>آزمون 1</Checkbox>
                    </Form.Item>
                    <Form.Item name="disabled" valuePropName="checked">
                        <Checkbox>آزمون 2</Checkbox>
                    </Form.Item>
                    <Typography.Text className="exam-price">قابل پرداخت: {} تومان</Typography.Text>
                    <Button className="exam-pay-btn" size="large">
                        پرداخت
                    </Button>
                </Form>
                <Button className="exam-first-exam-btn" size="large" block>
                    شرکت در آزمون 1
                </Button>
                <Button size="large" block>
                    شرکت در آزمون 2
                </Button>
            </Flex>
        </Flex>
    )
}
