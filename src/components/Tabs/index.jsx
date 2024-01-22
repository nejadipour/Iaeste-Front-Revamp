import {ConfigProvider, Flex, Tabs, Typography} from "antd";
import {cloneElement, useState} from "react";


const iconStyle = {height: 35};

const TabLabel = ({isActive, iconLight, iconDark, label}) => {
    const icon = isActive ? iconLight : iconDark;
    const labelStyle = {
        margin: 0,
        padding: window.innerWidth >= 1000 ? "0px 80px 0px 80px" : null,
        color: isActive ? "#ffffff" : null,
    };

    return (
        <Typography.Title level={5} style={labelStyle}>
            <Flex gap={10} align={"center"}>
                {cloneElement(icon, {style: iconStyle})}
                {label}
            </Flex>
        </Typography.Title>
    );
};


export default function CustomTabs(props) {
    const [activeKey, setActiveKey] = useState(props.defaultActiveKey);

    const onChange = (newActiveKey) => {
        setActiveKey(newActiveKey);
    };

    const items = props.items.map((item) => {
        const isActive = item.key === activeKey;
        const iconLight = item.iconLight;
        const iconDark = item.iconDark;
        const label = item.label;
        return {
            key: item.key,
            label: (
                <TabLabel
                    isActive={isActive}
                    iconLight={iconLight}
                    iconDark={iconDark}
                    label={label}
                />
            ),
            children: item.children,
            disabled: item.disabled
        };
    })

    return (
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        itemSelectedColor: "#ffffff",
                        colorBgContainer: "#0b3d59",
                    },
                },
            }}
        >
            <Tabs
                size={"large"}
                type={"card"}
                centered
                destroyInactiveTabPane={true}
                {...props}
                items={items}
                onChange={onChange}
            />
        </ConfigProvider>
    )
}
