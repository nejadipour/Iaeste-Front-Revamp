import {List} from "antd";
import CollaboratorCard from "../../collaborator/CollaboratorCard.jsx";

export default function CollaboratorsUniversities({universities}) {
    return (
        <List
            bordered={false}
            grid={{
                gutter: 18,
            }}
            dataSource={universities}
            itemLayout={"horizontal"}
            renderItem={(item) => (
                <List.Item>
                    <CollaboratorCard collaborator={item}/>
                </List.Item>
            )}
        >
        </List>
    )
}
