import { Button, Col, Flex, Form, Input, Row, Typography } from "antd";
import React from "react";
import GradientButton from "../components/Button/GradientButton";

const RegisterPage = () => {
  return (
    <div>
      <div className="card-layout">
        <Typography.Title level={3}>مشخصات شرکت کننده</Typography.Title>
        <ProfileInfoForm isEditing={false} initialVlaues={{}} />
      </div>
      <div className="card-layout">
        <Typography.Title level={3}>سوالات ثبت نام</Typography.Title>
        <Form>
          <Form.Item>
            <Input.TextArea rows={4} />
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
            <Input />
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

function ProfileInfoForm({ isEditing, initialVlaues }) {
    function handleSubmit(form) {
        console.log(form);
    }
  return (
    <Form layout="vertical" initialValues={initialVlaues} onFinish={handleSubmit} >
      <Row gutter={64}>
        <Col xs={24} md={12}>
          <Form.Item name="first_name" label="نام" required={false} rules={[{required: true, message: 'نام الزامی است'}]}>
            <Input placeholder="مهدخت" disabled={isEditing} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="last_name" label="نام خانوادگی" required={false} rules={[{required: true, message: 'نام خانوادگی الزامی است'}]}>
            <Input placeholder="شاه مرادی" disabled={isEditing} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={64}>
        <Col xs={24} md={12}>
          <Form.Item name="email" label="آدرس ایمیل" required={false} rules={[{required: true, message: 'آدرس ایمیل الزامی است'}]}>
            <Input
              placeholder="mahdokht.shahmoradi@gamil.com"
              disabled={isEditing || initialVlaues?.email}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="phone" label="شماره تماس" required={false} rules={[{required: true, message: 'شماره تماس الزامی است'}]}>
            <Input placeholder="" disabled={isEditing} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={64}>
        <Col xs={24} md={12}>
          <Form.Item name="university" label="دانشگاه محل تحصیل" required={false}>
            <Input placeholder="" disabled={isEditing} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="major" label="رشته تحصیلی" required={false}>
            <Input placeholder="" disabled={isEditing} />
          </Form.Item>
        </Col>
      </Row>

      <Flex>
        <GradientButton type="primary" style={{ marginRight: "auto" }} htmlType='submit'>
          {isEditing ? "ویرایش" : "ثبت"}
        </GradientButton>
      </Flex>
    </Form>
  );
}
