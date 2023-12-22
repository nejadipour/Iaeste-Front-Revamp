import {Typography} from "antd";
import CollaboratorsUniversities from "../../components/landing/items/CollaboratorsUniversities";
import UniversitiesForm from "../../forms/collaborators/UniversitiesForm.jsx";

export default function UniversitiesTab({data}) {
    return (
        <>
            <CollaboratorsUniversities universities={data?.collaborator_university}/>
            <div className="card-layout" style={{marginTop: 40}}>
                <Typography.Title
                    level={4}
                    style={{textAlign: "center", margin: 0, marginBottom: 40}}
                >
                    درخواست همکاری
                </Typography.Title>

                <Typography.Paragraph style={{margin: 0, marginBottom: 25}}>
                    دانشگاه‌های همکار آیسته با عقد تفاهم‌نامه همکاری، امتیاز ویژه برای
                    دانشجویان خود در استفاده از فرصت کارآموزی خارج از کشور دریافت می‌کنند.
                    دانشگاه‌های متقاضی می‌توانند درخواست همکاری خود را از طریق فرم زیر
                    ارسال کنند.
                </Typography.Paragraph>

                <UniversitiesForm/>
            </div>
        </>
    );
}
