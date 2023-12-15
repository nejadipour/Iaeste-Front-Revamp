import React from "react";
import CustomTabs from "../../components/Tabs/index.jsx";
import ExamIcon from "../../../assets/icons/exam.svg?react";
import ResultsIcon from "../../../assets/icons/results.svg?react";
import '../../styles/examPage.css'
import RegisterExam from "./RegisterExam.jsx";
import ExamResult from "./ExamResult.jsx";

const ExamsPage = () => {
    return (
        <div>
            <CustomTabs
                items={[
                    {
                        key: "register",
                        label: (
                            <CustomTabs.Label
                                label="ثبت نام در آزمون"
                                icon={<ExamIcon width={30} height={30}/>}
                            />
                        ),
                        children: <RegisterExam/>,
                    },
                    {
                        key: "result",
                        label: (
                            <CustomTabs.Label
                                label="مشاهده نتایج"
                                icon={<ResultsIcon width={30} height={30}/>}
                            />
                        ),
                        children: <ExamResult/>,
                    },
                ]}
            />
        </div>
    );
};

export default ExamsPage;
