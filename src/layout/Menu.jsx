import {ConfigProvider, Menu} from "antd";
import GradientButton from "../components/Button/GradientButton.jsx";
import MenuItem from "./MenuItem.jsx";


const items = [
    {
        key: "internship",
        label: <MenuItem type={"link"} to={"/internship"}>{"فرصت‌های کارآموزی"}</MenuItem>
    },
    {
        key: "events",
        label: <MenuItem type={"link"} to={"/events"}>{"رویدادها"}</MenuItem>
    },
    {
        key: "steps",
        label: <MenuItem type={"scroll"} to={"steps"}>{"مراحل پذیرش"}</MenuItem>
    },
    {
        key: "collaborate",
        label: <MenuItem type={"link"} to={"collaborate"}>{"همکاران"}</MenuItem>
    },
    {
        key: "weblog",
        label: <MenuItem type={"scroll"} to={"blog"}>{"وبلاگ و اخبار"}</MenuItem>
    },
    {
        key: "experiences",
        label: <MenuItem type={"scroll"} to={"experiences"}>{"تجربه‌ها"}</MenuItem>
    },
    {
        key: "about-us",
        label: <MenuItem type={"scroll"} to={"about-us"}>{"درباره ما"}</MenuItem>
    },
    {
        key: "contact-us",
        label: <MenuItem type={"link"} to={"/contact-us"}>{"ارتباط با ما"}</MenuItem>
    },
    {
        key: "special",
        label: <GradientButton>آزمون ۲۰۲۴</GradientButton>
    }
]


export default function MainMenu(props) {
    const {isBroken} = props;

    if (!isBroken) {
        items.forEach((item) => ({...item, icon: null}))
    }

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemHoverColor: "#6a92b0",
                        activeBarHeight: 0,
                        horizontalItemSelectedColor: "#0b3d59",
                        itemColor: "#0b3d59"
                    }
                }
            }}
        >
            <Menu
                selectedKeys={[]}
                style={{
                    border: "none",
                }}
                mode={"horizontal"}
                items={items}
            />
        </ConfigProvider>
    )
}
