import {registerRules} from "../../constants/AuthConstants.jsx";
import {List, Typography} from "antd";
import {digitsEnToFa} from "@persian-tools/persian-tools";

const {Paragraph} = Typography;

export default function RegisterRules() {
    return (
        <List
            style={{padding: "10px 0px 0px 20px"}}
            dataSource={registerRules}
            renderItem={(rule, index) => (
                <Paragraph style={{textAlign: "justify"}}>
                    {`${digitsEnToFa(index + 1)}. ${rule}`}
                </Paragraph>
            )}
        />
    )
}
