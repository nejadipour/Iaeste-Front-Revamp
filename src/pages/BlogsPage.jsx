import {useCallback, useEffect, useState} from "react";
import {useClient} from "../contexts/client/ClientContext.jsx";
import {List} from "antd";
import BlogCard from "../components/blog/BlogCard.jsx";

export default function BlogsPage() {
    const {client} = useClient();
    const [blogs, setBlogs] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchBlogs = useCallback(() => {
        setLoading(true);
        client.get("/blog/")
            .then(({data}) => {
                setBlogs(data.results);
                setFetched(true);
                setLoading(false);
            })
            .catch(() => {
                setFetched(true);
                setLoading(false);
            })
    }, [client])

    useEffect(() => {
        if (!fetched && !loading) {
            fetchBlogs();
        }
    }, [fetched, loading, fetchBlogs])

    return (
        <List
            dataSource={blogs}
            grid={{
                gutter: 18,
            }}
            itemLayout={"horizontal"}
            renderItem={(item) => (
                <List.Item>
                    <BlogCard blog={item}/>
                </List.Item>
            )}
        />
    )
}
