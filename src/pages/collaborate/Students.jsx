import {
  Col,
  Row,
  Form,
  Select,
  Input,
  Button,
  Upload,
  Typography,
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
import { registerRules } from "../../validations/RegisterFormValidation.jsx";
import { useProfileOptions } from "../../../utils/hooks/useProfileOptions.js";
import { handleCollaborationReq } from "../../../utils/index.js";
import { useClient } from "../../contexts/client/ClientContext.jsx";
import { useAuth } from "../../contexts/authentication/AuthContext";
import { useForm } from "antd/es/form/Form.js";

export default function StudentsTab() {
  const { fields, universities } = useProfileOptions();
  const { authUser } = useAuth();
  const { client } = useClient();
  const [form] = useForm();
  function handleSubmit(form) {
    console.log(form);
    handleCollaborationReq(
      { ...form, resume: form.resume[0].originFileObj },
      COLLABORATION_TYPES.student,
      client
    )
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  }

  const normFile = (e) => {
    console.log(e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  function handleResumeSize(file) {
    console.log(file);
    const size = file.size / (1024 * 1024);
    console.log(size);
    if (size > 1) {
      console.log('size is big');
      form.setFields([
        {
          name: "resume",
          errors: ["حجم فایل انتخاب شده بیشتر از 1 مگابایت است."],
        },{
          name: 'first_name',
          errors: ['error']
        }
      ]);
    }
    return false;
  }

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

      <div className="card-layout" style={{ marginTop: 40 }}>
        <Typography.Title
          level={4}
          style={{ textAlign: "center", margin: 0, marginBottom: 40 }}
        >
          درخواست همکاری
        </Typography.Title>
        <Typography.Title level={5} style={{ margin: 0, marginBottom: 25 }}>
          مشخصات درخواست دهنده
        </Typography.Title>
        {authUser && (
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={authUser}
            form={form}
          >
            <Row gutter={64}>
              <Col xs={24} md={12}>
                <Form.Item
                  name="first_name"
                  label="نام"
                  required={false}
                  rules={[{ required: true, message: "نام الزامی است" }]}
                >
                  <Input size={"large"} placeholder="مهدخت" />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  name="last_name"
                  label="نام خانوادگی"
                  required={false}
                  rules={[
                    { required: true, message: "نام خانوادگی الزامی است" },
                  ]}
                >
                  <Input size={"large"} placeholder="شاه مرادی" />
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
                  rules={[{ required: true, message: "شماره تماس الزامی است" }]}
                >
                  <Input size={"large"} placeholder="" />
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
              name="collaborationFields"
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
                  { label: "Local committee", value: "local" },
                  {
                    label: "Marketing and Graphic Design committee",
                    value: "marketingAndGraphicDesign",
                  },
                  { label: "IT committee", value: "IT" },
                ]}
              />
            </Form.Item>

            <Form.Item
              required
              name="resume"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: "رزومه الزامی است" }]}
            >
              <Upload maxCount={1} beforeUpload={handleResumeSize}>
                <Button size={"large"}>بارگذاری رزومه</Button>
              </Upload>
            </Form.Item>

            <Button
              size="large"
              type="primary"
              htmlType="submit"
              style={{ margin: "0 auto", display: "block" }}
            >
              درخواست همکاری
            </Button>
          </Form>
        )}
      </div>
    </>
  );
}
