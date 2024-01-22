import {useState} from "react";
import ExamIcon from "../../../assets/icons/exam.svg?react";
import ResultsIcon from "../../../assets/icons/results.svg?react";
import '../../styles/examPage.css'
import RegisterExam from "./RegisterExam.jsx";
import ExamResult from "./ExamResult.jsx";
import CustomTabs from "../../components/Tabs/index.jsx";
import {useAuth} from "../../contexts/authentication/AuthContext.jsx";
import {Button, Flex, Modal, Result, Typography} from "antd";
import {useNavigate, useSearchParams} from "react-router-dom";


const items = [
    {
        key: "register",
        iconLight: <ExamIcon/>,
        iconDark: <ExamIcon/>,
        label: "ثبت نام در آزمون",
        children: <RegisterExam/>,
    },
    {
        key: "result",
        iconLight: <ResultsIcon/>,
        iconDark: <ResultsIcon/>,
        label: "مشاهده نتایج",
        children: <ExamResult/>,
        disabled: true
    }
]

export default function ExamsPage() {
    const {authUser} = useAuth();
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const paymentStatus = searchParams.get("paymentStatus");

    if (paymentStatus && !openModal) {
        setOpenModal(true);
    }

    return (
        <>
            {
                authUser ?
                    <CustomTabs
                        centered={false}
                        items={items}
                        defaultActiveKey={"register"}
                    /> :
                    <Flex vertical gap={16} style={{textAlign: "center"}}>
                        <Typography.Text>
                            برای دسترسی به این صفحه، ابتدا وارد شوید.
                        </Typography.Text>
                        <Button type="primary" onClick={() => navigate("/auth")}
                                style={{alignSelf: 'center', width: 200}}>
                            ورود
                        </Button>
                    </Flex>
            }

            <Modal
                open={openModal}
                cancelButtonProps={{style: {display: "none"}}}
                closeIcon={null}
                onOk={() => {
                    searchParams.delete("paymentStatus");
                    setSearchParams(searchParams);
                    setOpenModal(false);
                }}
            >
                <Result
                    status={paymentStatus === "OK" ? "success" : "error"}
                    subTitle={paymentStatus === "OK" ? "ثبت نام شما با موفقیت انجام شد" : "ثبت نام شما با خطا مواجه شد"}
                />
            </Modal>
        </>
    );
}
