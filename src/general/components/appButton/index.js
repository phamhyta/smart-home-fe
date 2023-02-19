import { Button } from "react-bootstrap";
import './styles.scss'

function AppButton (props) {
    const {text, className, onClick, style, beforeIcon, afterIcon} = props;
    return (
        <Button className={`${className}`} onClick={onClick} style={style}>
            <div className="ms-2">{beforeIcon}</div>
            {text}
            <div className="ms-2">{afterIcon}</div>
        </Button>
    )
}

export default AppButton;