import { Typography, Form, Input, Row, Col, Button, message, App } from "antd";
import CollaboratorsUniversities from "../../components/landing/items/CollaboratorsUniversities";
import { handleCollaborationReq } from "../../../utils";
import { COLLABORATION_TYPES } from "../../constants/CollaborateConstants";
import { useClient } from "../../contexts/client/ClientContext";
import { useState } from "react";
import { registerRules } from "../../validations/RegisterFormValidation.jsx";

export default function UniversitiesTab({ data }) {
  const { client } = useClient();
  const [requestLoading, setRequestLoading] = useState(false);
  const { notification } = App.useApp();
  function handleSubmit(form) {
    setRequestLoading(true);
    handleCollaborationReq(form, COLLABORATION_TYPES.university, client)
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

  return (
    <>
      <CollaboratorsUniversities universities={data?.collaborator_university} />
      <div className="card-layout" style={{ marginTop: 40 }}>
        <Typography.Title
          level={4}
          style={{ textAlign: "center", margin: 0, marginBottom: 40 }}
        >
          درخواست همکاری
        </Typography.Title>
        <p style={{ margin: 0, marginBottom: 25 }}>
          دانشگاه های همکار آیسته با عقد تفاهم نامه همکاری، امتیاز ویژه برای
          دانشجویان خود در استفاده از فرصت کارآموزی خارج از کشور دریافت می کنند.
          دانشگاه های متقاضی می توانند درخواست همکاری خود را از طریق فرم زیر
          ارسال کنند.
        </p>

        <Form layout="vertical" onFinish={handleSubmit}>
          <Row gutter={64}>
            <Col xs={24} md={12}>
              <Form.Item
                name="first_name"
                label="نام درخواست دهنده"
                required
                rules={[{ required: true, message: "نام الزامی است" }]}
              >
                <Input size={"large"} />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="last_name"
                label="نام خانوادگی درخواست دهنده"
                required
                rules={[{ required: true, message: "نام خانوادگی الزامی است" }]}
              >
                <Input size={"large"} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={64}>
            <Col xs={24} md={12}>
              <Form.Item
                name="email"
                label="آدرس ایمیل"
                required
                rules={registerRules.email}
              >
                <Input size={"large"} />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="phone"
                label="شماره تماس"
                required
                rules={registerRules.phone}
              >
                <Input size={"large"} placeholder="" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={64}>
            <Col xs={24} md={12}>
              <Form.Item
                name="university"
                label="دانشگاه درخواست دهنده"
                required
                rules={[{ required: true, message: "دانشگاه الزامی است." }]}
              >
                <Input size={"large"} placeholder="" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="university_city"
                label="شهر محل دانشگاه"
                required
                rules={[
                  { required: true, message: "شهر محل دانشگاه الزامی است." },
                ]}
              >
                <Input size={"large"} placeholder="" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={64}>
            <Col xs={24} md={12}>
              <Form.Item
                name="applier_position"
                label="سمت شغلی درخواست دهنده"
                required
                rules={[{ required: true, message: "سمت شغلی الزامی است." }]}
              >
                <Input size={"large"} placeholder="" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="message"
            required
            label="متن درخواست همکاری"
            rules={[
              { required: true, message: "متن درخواست همکاری الزامی است." },
            ]}
          >
            <Input.TextArea size={"large"} rows={5} />
          </Form.Item>

          <Button
            size="large"
            type="primary"
            style={{ margin: "0 auto", display: "block" }}
            htmlType="submit"
            loading={requestLoading}
          >
            ثبت درخواست همکاری
          </Button>
        </Form>
      </div>
    </>
  );
}
