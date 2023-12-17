import StudentsTab from "./Students.jsx";
import UniversitiesTab from "./Universities.jsx";
import CompaniesTab from "./Companies.jsx";
import {ConfigProvider, Flex, Tabs, Typography} from "antd";
import {useState, useEffect, useCallback} from "react";
import {useClient} from "../../contexts/client/ClientContext";
import StudentsIconLight from "../../components/icons/StudentsIconLight.jsx";
import StudentsIconDark from "../../components/icons/StudentsIconDark.jsx";
import UniversitiesIconLight from "../../components/icons/UniversitiesIconLight.jsx";
import UniversitiesIconDark from "../../components/icons/UniversitiesIconDark.jsx";
import CompaniesIconLight from "../../components/icons/CompaniesIconLight.jsx";
import CompaniesIconDark from "../../components/icons/CompaniesIconDark.jsx";

const iconStyle = {height: 35};

const TabLabel = ({isActive, iconLight, iconDark, label}) => {
    const icon = isActive ? iconLight : iconDark;
    const labelStyle = {
        margin: 0,
        padding: "0px 80px 0px 80px",
        color: isActive ? "#ffffff" : null,
    };

    return (
        <Typography.Title level={5} style={labelStyle}>
            <Flex gap={10} align={"center"}>
                {icon}
                {label}
            </Flex>
        </Typography.Title>
    );
};

export default function Collaborate() {
    const [activeKey, setActiveKey] = useState("students");
    const {client} = useClient();
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const fetchData = useCallback(() => {
        setLoading(true);
        client
            .get("/statics/landing/")
            .then(({data}) => {
                setFetched(true);
                setData(data);
                setLoading(false);
            })
            .catch(() => {
            });
    }, [client]);

    useEffect(() => {
        if (!fetched && !loading) {
            fetchData();
        }
    }, [fetched, loading, fetchData]);

    const items = [
        {
            key: "students",
            label: (
                <TabLabel
                    isActive={activeKey === "students"}
                    iconLight={<StudentsIconLight style={iconStyle}/>}
                    iconDark={<StudentsIconDark style={iconStyle}/>}
                    label={"دانشجویان"}
                />
            ),
            children: <StudentsTab/>,
        },
        {
            key: "universities",
            label: (
                <TabLabel
                    isActive={activeKey === "universities"}
                    iconLight={<UniversitiesIconLight style={iconStyle}/>}
                    iconDark={<UniversitiesIconDark style={iconStyle}/>}
                    label={"دانشگاه‌ها"}
                />
            ),
            children: <UniversitiesTab data={data}/>,
        },
        {
            key: "companies",
            label: (
                <TabLabel
                    isActive={activeKey === "companies"}
                    iconLight={<CompaniesIconLight style={iconStyle}/>}
                    iconDark={<CompaniesIconDark style={iconStyle}/>}
                    label={"شرکت‌ها"}
                />
            ),
            children: <CompaniesTab data={data}/>,
        },
    ];

    const onChange = (newActiveKey) => {
        setActiveKey(newActiveKey);
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        itemSelectedColor: "#ffffff",
                        colorBgContainer: "#0b3d59",
                    },
                },
            }}
        >
            <Tabs
                size={"large"}
                defaultActiveKey={"students"}
                type={"card"}
                centered
                items={items}
                onChange={onChange}
            />
        </ConfigProvider>
    );
}
