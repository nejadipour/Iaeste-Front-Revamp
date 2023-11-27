import {Card, Image} from "antd";

export default function CollaboratorCard({collaborator}) {
    return (
        <Card
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 200,
                width: 200,
                backgroundColor: "#f1f7f7",
            }}
        >
            <Image style={{maxHeight: 150}} preview={false} alt={""} src={collaborator.logo}/>
        </Card>
    )
}
