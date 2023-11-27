import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

export default function MenuItem(props) {
    const {type, to, style, children, ...other} = props;

    return (
        <>
            {type === "link" ?
                <Link {...other} style={style} to={to}>{children}</Link> :
                <ScrollLink
                    {...other}
                    style={style}
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-20}
                >
                    {children}
                </ScrollLink>
            }
        </>
    )
}
