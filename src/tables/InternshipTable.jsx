import {Table} from "antd";
import {useState} from "react";

const columns = [
    {
        title: "شماره آفر",
        dataIndex: "offer_identifier",
        key: "offer_identifier"
    },
    {
        title: "نوع آفر",
        dataIndex: "offerType",
        key: "offerType"
    },
    {
        title: "رشته",
        dataIndex: "field",
        key: "field"
    },
    {
        title: "کشور",
        dataIndex: "country",
        key: "country"
    },
    {
        title: "فرم آفر",
        dataIndex: "pdf_file",
        key: "pdf_file"
    },
    {
        title: "مهلت درخواست",
        dataIndex: "date",
        key: "date"
    },
    {
        title: "درخواست آفر",
        dataIndex: "id",
        key: "id"
    }
]

export default function InternshipTable() {
    const [dataSource, setDataSource] = useState([]);

    return (
        <Table
            columns={columns}
            dataSource={dataSource}
        />
    )
}
