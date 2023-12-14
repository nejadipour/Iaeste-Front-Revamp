import { ConfigProvider, Flex, Tabs } from "antd";
import React from "react";
import "../../styles/tabs.css";

const CustomTabs = ({ items, onChange, ...props }) => {
  return (
    <div className="custome-tab">
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              // itemSelectedColor: "#ffffff",
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
          type={"card"}
          tabBarGutter={16}
          items={items}
          onChange={onChange}
          {...props}
        />
      </ConfigProvider>
    </div>
  );
};

CustomTabs.Label = function Label({ icon, text, ...props }) {
  return (
    <Flex align="center" flex={1} {...props}>
      {icon}
      <div className='tab-title'>{text}</div>
    </Flex>
  );
};

export default CustomTabs;
