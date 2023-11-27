import {useCallback, useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {useClient} from "../contexts/client/ClientContext.jsx";
import {Col, Flex, Image, Row, Typography} from "antd";
import {digitsEnToFa,} from "@persian-tools/persian-tools";

export default function BlogDetailsPage() {
    const {client} = useClient();
    let {id} = useParams();
    const location = useLocation();
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const fetchData = useCallback(() => {
        setLoading(true);
        let passedData = location.state?.blog;
        if (passedData !== undefined && passedData !== null) {
            setFetched(true);
            setData(passedData);
            setLoading(false);
        } else {
            client.get(`/blog/${id}/`)
                .then(({data}) => {
                    setData(data);
                    setFetched(true);
                    setLoading(false);
                })
                .catch(() => {

                })
        }
    }, [client, location.state?.blog])

    useEffect(() => {
        if (!fetched && !loading) {
            fetchData();
        }
    }, [fetched, loading, fetchData])

    return (
        <>
            {data && <>
                <Typography.Title level={3}>{data?.title}</Typography.Title>

                <div style={{textAlign: "center"}}>
                    <Image style={{maxHeight: 500}} preview={false} src={data?.image} alt={""}/></div>

                <Row justify={"space-between"}>
                    <Col xs={24} sm={12}>
                        <Typography.Text>{`نویسنده: ${data?.writers}`}</Typography.Text>
                    </Col>
                    <Col flex={"none"} xs={24} sm={12}>
                        <Flex gap={6}>
                            <Typography.Text>{`تاریخ انتشار: `}
                            </Typography.Text>
                            <Typography.Text
                                style={{fontFamily: "IranSans"}}>{digitsEnToFa(data?.date?.substring(0, 11) || "")}</Typography.Text>
                        </Flex>
                    </Col>
                </Row>

                <Typography.Paragraph
                    style={{textAlign: "justify", marginTop: "3rem"}}>{data?.description}</Typography.Paragraph>
            </>}
        </>
    )
}
