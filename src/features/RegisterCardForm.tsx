import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import AppBar from "../components/AppBar";

const RegisterCardForm = () => {

    const Icon = () => {
        return (
            <Link to="/menu">
                <MenuIcon />
            </Link>
        );
    };

    return (<div>
        <AppBar icon={< Icon />} title="Form" />
        <div>

            <h2>form</h2>
        </div>
    </div>);
}
    ;

export default RegisterCardForm;