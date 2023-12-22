import {Typography} from "antd";
import CollaboratorsCompanies from "../../components/landing/items/CollaboratorsCompanies";
import CompaniesForm from "../../forms/collaborators/CompaniesForm.jsx";

export default function CompaniesTab({data}) {
    return (
        <>
            <CollaboratorsCompanies companies={data?.collaborator_company}/>
            <div className="card-layout" style={{marginTop: 40}}>
                <Typography.Title
                    level={4}
                    style={{textAlign: "center", margin: 0, marginBottom: 40}}
                >
                    درخواست همکاری
                </Typography.Title>

                <Typography.Paragraph>
                    شرکت‌های همکاری با ارائه آفر کارآموزی برای دانشجویان خارجی همراه آیسته
                    بوده‌اند. برای درخواست همکاری از طریق فرم زیر اقدام نمایید.
                </Typography.Paragraph>

                <CompaniesForm/>
            </div>
        </>
    );
}
