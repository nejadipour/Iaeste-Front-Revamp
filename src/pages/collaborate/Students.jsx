import { Col, Row, Form, Select, Input, Button, Upload, Typography } from "antd";
import DescriptionCard from "../../components/Card/DescriptionCard.jsx";
import {
  ITCommitteeDescription,
  localCommitteeDescription,
  marketingCommitteeDescription,
} from "../../constants/CollaborateConstants.jsx";
import LocalIcon from "../../components/icons/LocalIcon.jsx";
import ITIcon from "../../components/icons/ITIcon.jsx";
import MarketingIcon from "../../components/icons/MarketingIcon.jsx";
import { registerRules } from "../../validations/RegisterFormValidation.jsx";
import { useProfileOptions } from "../../../utils/hooks/useProfileOptions.js";

export default function StudentsTab() {
  const { fields, universities } = useProfileOptions();
  function handleSubmit() {}
  return (
    <>
      <Row justify={"center"} gutter={[24, 24]}>
        <Col xs={8}>
          <DescriptionCard
            title={"Local Committee"}
            src={"/assets/images/local_committee.jpg"}
            description={localCommitteeDescription}
            icon={<LocalIcon />}
          />
        </Col>

        <Col xs={8}>
          <DescriptionCard
            title={"Marketing & Graphic Design Committee"}
            src={"/assets/images/marketing_committee.jpg"}
            description={marketingCommitteeDescription}
            icon={<MarketingIcon />}
          />
        </Col>

        <Col xs={8}>
          <DescriptionCard
            title={"IT Committee"}
            src={"/assets/images/IT_committee.jpg"}
            description={ITCommitteeDescription}
            icon={<ITIcon />}
          />
        </Col>
      </Row>
      <div className="card-layout" style={{marginTop: 40}}>
        <Typography.Title level={4} style={{textAlign: 'center', margin: 0, marginBottom: 40}}>درخواست همکاری</Typography.Title>
        <Typography.Title level={5} style={{margin: 0, marginBottom: 25}}>مشخصات درخواست دهنده</Typography.Title>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Row gutter={64}>
            <Col xs={24} md={12}>
              <Form.Item
                name="first_name"
                label="نام"
                required={false}
                rules={[{ required: true, message: "نام الزامی است" }]}
              >
                <Input placeholder="مهدخت" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="last_name"
                label="نام خانوادگی"
                required={false}
                rules={[{ required: true, message: "نام خانوادگی الزامی است" }]}
              >
                <Input placeholder="شاه مرادی" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={64}>
            <Col xs={24} md={12}>
              <Form.Item
                name="email"
                label="آدرس ایمیل"
                required={false}
                rules={[{ required: true, message: "آدرس ایمیل الزامی است" }]}
              >
                <Input placeholder="mahdokht.shahmoradi@gamil.com" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="phone"
                label="شماره تماس"
                required={false}
                rules={[{ required: true, message: "شماره تماس الزامی است" }]}
              >
                <Input placeholder="" />
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
          <Form.Item required label="در کدام بخش ها قصد همکاری دارید؟">
            <Select options={[]} />
          </Form.Item>
          <Form.Item>
            <Upload>
              <Button>بارگذاری رزومه</Button>
            </Upload>
          </Form.Item>
          <Button size="large" type="primary" style={{margin: '0 auto', display: 'block'}}>درخواست همکاری</Button>
        </Form>
      </div>
    </>
  );
}
