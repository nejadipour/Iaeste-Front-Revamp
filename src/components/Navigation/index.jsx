import {Button, Space} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

export default function Navigation(props) {
    const {swiper, direction} = props;

    return (
        <Space.Compact>
            <Button style={{zIndex: 1, color: "#0b3d59"}} icon={<RightOutlined/>}
                    onClick={() => direction === "ltr" ? swiper.slideNext() : swiper.slidePrev()}/>
            <Button style={{zIndex: 1, color: "#0b3d59"}} icon={<LeftOutlined/>}
                    onClick={() => direction === "ltr" ? swiper.slidePrev() : swiper.slideNext()}/>
        </Space.Compact>
    )
}
