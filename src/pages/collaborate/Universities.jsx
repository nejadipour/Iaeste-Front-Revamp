import {Typography, Form, Input, Row, Col, Button} from "antd";
import CollaboratorsUniversities from "../../components/landing/items/CollaboratorsUniversities";

export default function UniversitiesTab({data}) {
    function handleSubmit(params) {
    }

    return (
        <>
            <CollaboratorsUniversities universities={data?.collaborator_university}/>
            <div className="card-layout" style={{marginTop: 40}}>
                <Typography.Title
                    level={4}
                    style={{textAlign: "center", margin: 0, marginBottom: 40}}
                >
                    درخواست همکاری
                </Typography.Title>
                <p style={{margin: 0, marginBottom: 25}}>
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
                                rules={[{required: true, message: "نام الزامی است"}]}
                            >
                                <Input size={"large"} placeholder="مهدخت"/>
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={12}>
                            <Form.Item
                                name="last_name"
                                label="نام خانوادگی درخواست دهنده"
                                required
                                rules={[{required: true, message: "نام خانوادگی الزامی است"}]}
                            >
                                <Input size={"large"} placeholder="شاه مرادی"/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={64}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="email"
                                label="آدرس ایمیل"
                                required
                                rules={[{required: true, message: "آدرس ایمیل الزامی است"}]}
                            >
                                <Input size={"large"} placeholder="mahdokht.shahmoradi@gamil.com"/>
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={12}>
                            <Form.Item
                                name="phone"
                                label="شماره تماس"
                                required
                                rules={[{required: true, message: "شماره تماس الزامی است"}]}
                            >
                                <Input size={"large"} placeholder=""/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={64}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="university"
                                label="دانشگاه درخواست دهنده"
                                required
                                // rules={registerRules.university}
                            >
                                <Input size={"large"} placeholder=""/>
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={12}>
                            <Form.Item
                                name="field"
                                label="شهر محل دانشگاه"
                                required
                                // rules={registerRules.field}
                            >
                                <Input size={"large"} placeholder=""/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={64}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="university"
                                label="سمت شغلی درخواست دهنده"
                                required
                                // rules={registerRules.university}
                            >
                                <Input size={"large"} placeholder=""/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item required label="متن درخواست همکاری">
                        <Input.TextArea size={"large"} rows={5}/>
                    </Form.Item>

                    <Button
                        size="large"
                        type="primary"
                        style={{margin: "0 auto", display: "block"}}
                    >
                        ثبت درخواست همکاری
                    </Button>
                </Form>
            </div>
        </>
    );
}
