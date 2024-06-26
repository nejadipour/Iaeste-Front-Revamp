import {App, ConfigProvider, Menu} from "antd";
import GradientButton from "../components/Button/GradientButton.jsx";
import MenuItem from "./MenuItem.jsx";
import InternshipIcon from "../../assets/icons/internship.svg?react";
import EventsIcon from "../../assets/icons/events.svg?react";
import StepsIcon from "../../assets/icons/steps.svg?react";
import CollaborateIcon from "../../assets/icons/collaborate.svg?react";
import WeblogIcon from "../../assets/icons/weblog.svg?react";
import ExperienceIcon from "../../assets/icons/experience.svg?react";
import AboutUsIcon from "../../assets/icons/about-us.svg?react";
import ContactUsIcon from "../../assets/icons/contact-us.svg?react";
import ExamIcon from "../../assets/icons/exam_menu.svg?react";
import LogoutIcon from "../../assets/icons/logout.svg?react";
import LoginIcon from "../../assets/icons/login.svg?react";
import {useAuth} from "../contexts/authentication/AuthContext.jsx";
import {Link} from "react-router-dom";


const getItems = (mode) => [
    {
        key: "internship",
        label: <MenuItem to={"/internship"}>{"فرصت‌های کارآموزی"}</MenuItem>,
        icon: mode === "vertical" && <InternshipIcon/>
    },
    {
        key: "events",
        label: <MenuItem to={"/events"}>{"رویدادها"}</MenuItem>,
        icon: mode === "vertical" && <EventsIcon/>
    },
    {
        key: "steps",
        label: <MenuItem to={"/"} scroll={"steps"}>{"مراحل پذیرش"}</MenuItem>,
        icon: mode === "vertical" && <StepsIcon/>
    },
    {
        key: "collaborate",
        label: <MenuItem to={"/collaborate"}>{"همکاران"}</MenuItem>,
        icon: mode === "vertical" && <CollaborateIcon/>
    },
    {
        key: "weblog",
        label: <MenuItem to={"/blogs"}>{"وبلاگ و اخبار"}</MenuItem>,
        icon: mode === "vertical" && <WeblogIcon/>
    },
    {
        key: "experiences",
        label: <MenuItem to={"/"} scroll={"experiences"}>{"تجربه‌ها"}</MenuItem>,
        icon: mode === "vertical" && <ExperienceIcon/>
    },
    {
        key: "about-us",
        label: <MenuItem to={"/about-us"}>{"درباره ما"}</MenuItem>,
        icon: mode === "vertical" && <AboutUsIcon/>
    },
    {
        key: "contact-us",
        label: <MenuItem to={"/contact-us"}>{"ارتباط با ما"}</MenuItem>,
        icon: mode === "vertical" && <ContactUsIcon/>
    }
]


export default function MainMenu(props) {
    const {mode, onSelect} = props;
    const {authUser, handleLogout} = useAuth();
    const {notification} = App.useApp();
    let items = getItems(mode);

    if (mode === "horizontal") {
        items = [
            ...items,
            // {
            //     key: "special",
            //     label: <MenuItem to={"/exam"}><GradientButton>آزمون ۲۰۲۴</GradientButton></MenuItem>
            // }
        ]
    } else {
        items = [
            ...items,
            // {
            //     key: "special",
            //     label: <MenuItem to={"/exam"}>{"آزمون ۲۰۲۴"}</MenuItem>,
            //     icon: <ExamIcon/>
            // },
            {
                key: "auth",
                label: authUser ?
                    <Link to={"/"} onClick={() => {
                        handleLogout();
                        notification.success({message: "شما از سامانه خارج شدید"})
                    }}>{"خروج"}</Link> :
                    <Link to={"/auth"}>{"ورود / ثبت نام"}</Link>,
                icon: authUser ? <LogoutIcon/> : <LoginIcon/>,
            }
        ]
    }


    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemHoverColor: mode === "horizontal" ? "#6a92b0" : "#ffffff",
                        activeBarHeight: 0,
                        horizontalItemSelectedColor: "#0b3d59",
                        itemColor: mode === "horizontal" ? "#0b3d59" : "#ffffff"
                    }
                }
            }}
        >
            <Menu
                selectedKeys={[]}
                style={{
                    border: "none",
                    backgroundColor: "transparent",
                }}
                mode={mode}
                items={items}
                onSelect={onSelect}
            />
        </ConfigProvider>
    )
}
