import {Divider, Flex, Typography} from "antd";
import QueueAnim from "rc-queue-anim";

export default function HorizontalLayout({item, collapsed}) {
    const {icon, title, content} = item;

    return (
        <>
            <Flex align={"center"} gap={8}>
                {icon}
                <Typography.Title style={{marginTop: 10}} level={5}>{title}</Typography.Title>
            </Flex>

            {!collapsed &&
                <>
                    <Divider/>

                    <QueueAnim delay={200} type={"top"}>
                        <div key={"collapse-item-content"}>
                            <Typography.Paragraph style={{textAlign: "justify"}}>
                                {content}
                            </Typography.Paragraph>
                        </div>
                    </QueueAnim>
                </>
            }
        </>
    )
}
