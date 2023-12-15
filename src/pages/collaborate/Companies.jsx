import { Typography, Form, Input, Row, Col, Button } from "antd";
import CollaboratorsCompanies from "../../components/landing/items/CollaboratorsCompanies";
import { handleCollaborationReq } from "../../../utils";
import { COLLABORATION_TYPES } from "../../constants/CollaborateConstants";
import { useClient } from "../../contexts/client/ClientContext";

export default function CompaniesTab({ data }) {
  const client = useClient();
  function handleSubmit(form) {
    handleCollaborationReq(form, COLLABORATION_TYPES.university, client)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <CollaboratorsCompanies companies={data?.collaborator_company} />
      <div className="card-layout" style={{ marginTop: 40 }}>
        <Typography.Title
          level={4}
          style={{ textAlign: "center", margin: 0, marginBottom: 40 }}
        >
          درخواست همکاری
        </Typography.Title>
        <p>
          شرکت های همکاری با ارائه آفر کارآموزی برای دانشجویان خارجی همراه آیسته
          بوده اند. برای درخواست همکاری از طریق فرم زیر اقدام نمایید.
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
                rules={[{ required: true, message: "آدرس ایمیل الزامی است" }]}
              >
                <Input size={"large"} />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="phone"
                label="شماره تماس"
                required
                rules={[{ required: true, message: "شماره تماس الزامی است" }]}
              >
                <Input size={"large"} placeholder="" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={64}>
            <Col xs={24} md={12}>
              <Form.Item
                name="company"
                label="شرکت درخواست دهنده"
                required
                // rules={registerRules.university}
              >
                <Input size={"large"} placeholder="" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="city"
                label="شهر محل شرکت"
                required
                // rules={registerRules.field}
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
                // rules={registerRules.university}
              >
                <Input size={"large"} placeholder="" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item required label="متن درخواست همکاری">
            <Input.TextArea size={"large"} rows={5} />
          </Form.Item>

          <Button
            size="large"
            type="primary"
            style={{ margin: "0 auto", display: "block" }}
          >
            ثبت درخواست همکاری
          </Button>
        </Form>
      </div>
    </>
  );
}
