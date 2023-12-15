import {ConfigProvider, Flex, Tabs, Typography} from "antd";
import React, {useState} from "react";
// import "../../styles/tabs.css";

const CustomTabs = ({items, ...props}) => {
    const [activeKey, setActiveKey] = useState(props.defaultActiveKey);

    const onChange = (newActiveKey) => {
        setActiveKey(newActiveKey);
    }

    const items2 = [

    ]

    return (
        <div className="custome-tab">
            <ConfigProvider
                theme={{
                    components: {
                        Tabs: {
                            itemSelectedColor: "#ffffff",
                            // cardBg: "#0b3d59",
                        },
                    },
                    token: {
                        // colorBgContainer: "#0b3d59",
                    },
                }}
            >
                <Tabs
                    size={"large"}
                    defaultActiveKey={activeKey}
                    type={"card"}
                    items={items}
                    onChange={props.onChange || onChange}
                    {...props}
                />
            </ConfigProvider>
        </div>
    );
};

CustomTabs.Label = function Label({icon, label}) {
    const labelStyle = {margin: 0, padding: "0px 20px 0px 20px"};

    return (
        <Typography.Title level={5} style={labelStyle}>
            <Flex gap={10} align={"center"}>
                {icon}
                {label}
            </Flex>
        </Typography.Title>
    );
};

export default CustomTabs;
