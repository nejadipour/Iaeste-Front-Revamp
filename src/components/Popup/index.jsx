import React from "react";
import {Modal} from "antd";

export default function Popup(props) {
    const {openPopup, setOpenPopup, footer, children, onCancel, ...otherProps} = props;

    const defaultOnCancel = () => {
        setOpenPopup(false);
    }

    return (
        <Modal
            {...otherProps}
            destroyOnClose={true}
            open={openPopup}
            onCancel={onCancel ? onCancel : defaultOnCancel}
            footer={footer ? footer : null}
        >
            {children}
        </Modal>
    )
}
