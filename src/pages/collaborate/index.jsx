import StudentsTab from "./Students.jsx";
import UniversitiesTab from "./Universities.jsx";
import CompaniesTab from "./Companies.jsx";
import {useState, useEffect, useCallback} from "react";
import {useClient} from "../../contexts/client/ClientContext";
import StudentsIconLight from "../../components/icons/StudentsIconLight.jsx";
import StudentsIconDark from "../../components/icons/StudentsIconDark.jsx";
import UniversitiesIconLight from "../../components/icons/UniversitiesIconLight.jsx";
import UniversitiesIconDark from "../../components/icons/UniversitiesIconDark.jsx";
import CompaniesIconLight from "../../components/icons/CompaniesIconLight.jsx";
import CompaniesIconDark from "../../components/icons/CompaniesIconDark.jsx";
import CustomTabs from "../../components/Tabs/index.jsx";


export default function Collaborate() {
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
            iconLight: <StudentsIconLight/>,
            iconDark: <StudentsIconDark/>,
            label: "دانشجویان",
            children: <StudentsTab/>,
        },
        {
            key: "universities",
            iconLight: <UniversitiesIconLight/>,
            iconDark: <UniversitiesIconDark/>,
            label: "دانشگاه‌ها",
            children: <UniversitiesTab data={data}/>,
        },
        {
            key: "companies",
            iconLight: <CompaniesIconLight/>,
            iconDark: <CompaniesIconDark/>,
            label: "شرکت‌ها",
            children: <CompaniesTab data={data}/>,
        },
    ];

    return (
        <CustomTabs
            defaultActiveKey={"students"}
            items={items}
        />
    );
}
