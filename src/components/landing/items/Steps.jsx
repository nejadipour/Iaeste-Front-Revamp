import FlexCollapse from "../../FlexCollapse/index.jsx";
import React from "react";
import {step1, step2, step3, step4, step5, step6, step7, step8} from "../../../constants/LandingConstants.jsx";
import Step1Icon from "../../icons/steps/Step1Icon.jsx";
import Step2Icon from "../../icons/steps/Step2Icon.jsx";
import Step3Icon from "../../icons/steps/Step3Icon.jsx";
import Step4Icon from "../../icons/steps/Step4Icon.jsx";
import Step5Icon from "../../icons/steps/Step5Icon.jsx";
import Step6Icon from "../../icons/steps/Step6Icon.jsx";
import Step7Icon from "../../icons/steps/Step7Icon.jsx";
import Step8Icon from "../../icons/steps/Step8Icon.jsx";
import {ConfigProvider, Flex} from "antd";
import GradientButton from "../../Button/GradientButton.jsx";
import BagIcon from "../../icons/BagIcon.jsx";
import {Link} from "react-router-dom";

const items = [
    {
        key: 1,
        label: "۱",
        icon: <Step1Icon style={{width: 70}}/>,
        ...step1
    },
    {
        key: 2,
        label: "۲",
        icon: <Step2Icon style={{width: 70}}/>,
        ...step2
    },
    {
        key: 3,
        label: "۳",
        icon: <Step3Icon style={{width: 70}}/>,
        ...step3
    },
    {
        key: 4,
        label: "۴",
        icon: <Step4Icon style={{width: 70}}/>,
        ...step4
    },
    {
        key: 5,
        label: "۵",
        icon: <Step5Icon style={{width: 70}}/>,
        ...step5
    },
    {
        key: 6,
        label: "۶",
        icon: <Step6Icon style={{width: 70}}/>,
        ...step6
    },
    {
        key: 7,
        label: "۷",
        icon: <Step7Icon style={{width: 70}}/>,
        ...step7
    },
    {
        key: 8,
        label: "۸",
        icon: <Step8Icon style={{width: 70}}/>,
        ...step8
    },
]


export default function Steps() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorSplit: "#ffffff",
                    colorTextHeading: "#ffffff",
                    colorText: "#ffffff",
                }
            }}
        >
            <FlexCollapse
                items={items}
                mode={window.innerWidth > 1350 ? "vertical": "horizontal"}
                trigger={window.innerWidth > 1350 ? "hover" : "click"}
                defaultActiveKey={1}
                autoOpenDefaultActiveKey
            />

            <Flex>
                <Link to={"/internship"}>
                    <GradientButton
                        icon={<BagIcon style={{height: "20px"}}/>}
                        style={{
                            display: "flex",
                            marginTop: "1.5rem"
                        }}
                    >{"مشاهده فرصت‌های کارآموزی خارج از کشور"}</GradientButton>
                </Link>
            </Flex>
        </ConfigProvider>
    )
}
