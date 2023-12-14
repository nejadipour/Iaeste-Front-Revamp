import React from "react";
import CustomTabs from "../components/Tabs";
import { Button, Checkbox, Flex, Form, Input, Select, Typography } from "antd";
import ExamIcon from "../assets/icons/exam.svg?react";
import ResultsIcon from "../assets/icons/results.svg?react";
import ProfileInfoForm from "../components/ProfileInfoForm";
import '../styles/examPage.css'

const ExamsPage = () => {
  return (
    <div>
      <CustomTabs
        items={[
          {
            key: "exam",
            label: (
              <CustomTabs.Label
                text="ثبت نام در آزمون"
                icon={<ExamIcon width={40} height={40} />}
              />
            ),
            children: (
              <Flex gap={40}>
                <Flex vertical justify='space-between' className="exam-forms">
                  <div className="card-layout">
                    <ProfileInfoForm mode="edit" />
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
                        <Select />
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
            ),
          },
          {
            key: "result",
            label: (
              <CustomTabs.Label
                text="مشاهده نتایج"
                icon={<ResultsIcon width={40} height={40} />}
              />
            ),
            children: <div>exam</div>,
          },
        ]}
      />
    </div>
  );
};

export default ExamsPage;
