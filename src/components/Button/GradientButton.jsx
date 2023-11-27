import {Button} from "antd";
import "../../styles/buttons.css"

export default function GradientButton(props) {
    const {children} = props;

    return (
        <Button
            className={"gradient-button"}
            type={"primary"}
            style={{
                border: "none",
                transition: 'background-image 0.3s ease-in-out',
            }}
            {...props}
        >
            {children}
        </Button>
    )
}
