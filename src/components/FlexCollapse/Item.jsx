import {useEffect, useState} from "react";
import {Badge, Card, Col, Divider, Flex, Row, Typography} from "antd";
import Step1Icon from "../icons/steps/Step1Icon.jsx";
import QueueAnim from "rc-queue-anim";
import VerticalLayout from "./VerticalLayout.jsx";
import HorizontalLayout from "./HorizontalLayout.jsx";

export default function FlexCollapseItem(props) {
    const {item, content, mode, activeKey, trigger, onCollapse} = props;

    const [collapsed, setCollapsed] = useState(true);

    const handleMouseOver = () => {
        if (trigger === "hover") {
            onCollapse(item.key, false);
        }
    };

    const handleMouseOut = () => {
        if (trigger === "hover") {
            onCollapse(item.key, true);
        }
    };

    const handleClick = () => {
        if (trigger === "click") {
            onCollapse(item.key, !collapsed);
        }
    }

    useEffect(() => {
        if (activeKey === item.key) {
            setCollapsed(false);
        } else {
            setCollapsed(true);
        }
    }, [activeKey, item.key])

    return (
        <Card
            style={{
                backgroundImage: collapsed ? "linear-gradient(to right, #0b3d59, #0b3d59)" : "linear-gradient(to right, #117C76, #0b3d59)",
                minHeight: 230,
                width: collapsed ? 100 : 500,
                transition: "0.3s ease-in-out",
                overflow: "hidden",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
        >
            {mode === "vertical" ? <VerticalLayout collapsed={collapsed} item={item} content={content}/> :
                <HorizontalLayout collapsed={collapsed} item={item} content={content}/>}
        </Card>
    );
}
