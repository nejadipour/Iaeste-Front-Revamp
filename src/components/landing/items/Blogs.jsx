import BlogCard from "../../blog/BlogCard.jsx";
import {Flex, List} from "antd";
import GradientButton from "../../Button/GradientButton.jsx";
import {Link} from "react-router-dom";


export default function Blogs({blogs}) {
    return (
        <>
            <List
                bordered={false}
                grid={{
                    gutter: 18,
                }}
                dataSource={blogs?.slice(0, 4)}
                itemLayout={"horizontal"}
                renderItem={(item) => (
                    <List.Item>
                        <BlogCard blog={item}/>
                    </List.Item>
                )}
            >
            </List>

            <Flex justify={"end"}>
                <Link to={"blogs"}><GradientButton>{"+ مطالب بیشتر"}</GradientButton></Link>
            </Flex>
        </>
    )
}
