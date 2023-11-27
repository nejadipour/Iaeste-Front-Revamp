import {useState} from "react";
import FlexCollapseItem from "./Item.jsx";
import {Flex} from "antd";

export default function FlexCollapse(props) {
    const {items, defaultActiveKey, autoOpenDefaultActiveKey, trigger, mode} = props;
    const [activeKey, setActiveKey] = useState(defaultActiveKey);

    const onCollapse = (key, collapsed) => {
        if (collapsed) {
            if (autoOpenDefaultActiveKey) {
                setActiveKey(defaultActiveKey);
            } else {
                setActiveKey(null);
            }
        } else {
            setActiveKey(key);
        }
    }

    return (
        <Flex gap={8} vertical={mode === "horizontal"}>
            {items.map((item) => (
                <FlexCollapseItem key={item.key} item={item} activeKey={activeKey} onCollapse={onCollapse}
                                  trigger={trigger || "hover"} mode={mode || "vertical"}/>
            ))}
        </Flex>
    )
}
