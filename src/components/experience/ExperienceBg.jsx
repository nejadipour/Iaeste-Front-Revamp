import {Image} from "antd";

export default function ExperienceBg(props) {
    return (
        <>
            <Image preview={false} src={"assets/images/test_exp_bg.jpg"}/>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50%',
                    height: '100%',
                    background: 'rgba(11, 61, 89, 0.5)',
                }}
            />
        </>
    )
}
