import { Col, Flex, Form, Input, Row, Select } from "antd";
import { useClient } from "../../contexts/client/ClientContext";
import GradientButton from "../Button/GradientButton";
import { useEffect, useState } from "react";
import { fetchFieldsAndUniversities } from "../../../utils";
import {registerRules} from "../../validations/RegisterFormValidation.jsx";

export const PROFILE_FORM_MODE = {
  edit: "edit",
  add: "add",
};

function ProfileInfoForm({ mode, initialVlaues, url }) {
  const [dataLoading, setDataLoading] = useState(false);
  const [fields, setFields] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [canEdit, setCanEdit] = useState(mode === PROFILE_FORM_MODE.add);
  const {client} = useClient();
  function handleSubmit(form) {
    console.log(form);
    client
      .post(url, form)
      .then((res) => {
        if (mode === PROFILE_FORM_MODE.edit) {
          toggleEditMode();
        }
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function toggleEditMode() {
    setCanEdit((prev) => !prev);
  }

  useEffect(() => {
    fetchFieldsAndUniversities(client)
      .then(([fields, universities]) => {
        setFields(fields);
        setUniversities(universities);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Form
      layout="vertical"
      initialValues={initialVlaues}
      onFinish={handleSubmit}
    >
      <Row gutter={64}>
        <Col xs={24} md={12}>
          <Form.Item
            name="first_name"
            label="نام"
            required={false}
            rules={[{ required: true, message: "نام الزامی است" }]}
          >
            <Input placeholder="مهدخت" disabled={!canEdit} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="last_name"
            label="نام خانوادگی"
            required={false}
            rules={[{ required: true, message: "نام خانوادگی الزامی است" }]}
          >
            <Input placeholder="شاه مرادی" disabled={!canEdit} />
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
              placeholder="mahdokht.shahmoradi@gamil.com"
              disabled={initialVlaues?.email || !canEdit}
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
            <Input placeholder="" disabled={!canEdit} />
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
              disabled={!canEdit}
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
              disabled={!canEdit}
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

      <Flex>
        {mode === PROFILE_FORM_MODE.edit && canEdit === false && (
          <GradientButton
            type="primary"
            style={{ marginRight: "auto" }}
            onClick={toggleEditMode}
          >
            ویرایش
          </GradientButton>
        )}
        {canEdit && (
          <GradientButton
            type="primary"
            style={{ marginRight: "auto" }}
            htmlType="submit"
          >
            ثبت
          </GradientButton>
        )}
      </Flex>
    </Form>
  );
}

export default ProfileInfoForm;