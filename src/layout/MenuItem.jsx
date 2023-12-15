import {Link} from "react-router-dom";

export default function MenuItem(props) {
    const {to, scroll, style, children, ...other} = props;

    return (
        <Link to={to} state={scroll ? {scroll: scroll} : null} replace={true} style={style} {...other}>
            {children}
        </Link>
    )
}
