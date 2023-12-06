import { ConfigProvider, Tag } from "antd";
import React from "react";
import "../../styles/tag.css";

export const FilledTag = ({ children, ...props }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadiusSM: 2,
        },
      }}
    >
      <Tag className="custom-tag" color="var(--color-secondary)" {...props}>
        {children}
      </Tag>
    </ConfigProvider>
  );
};

export const BorderedTag = ({
  children,
  color = "var(--color-secondary)",
  ...props
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBorder: color,
          borderRadiusSM: 2,
        },
        components: {
          Tag: {
            defaultColor: color,
            defaultBg: 'transparet'
          },
        },
      }}
    >
      <Tag className="custom-tag" {...props}>
        {children}
      </Tag>
    </ConfigProvider>
  );
};
