import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AppBar from "../components/AppBar";

const Menu = () => {

    const BackButton = () => {
        let history = useHistory();
        const handleClick = () => {
            history.goBack();
        };
        return <ArrowBackIcon onClick={handleClick} />;
    };

    return (
        <Box>
            <AppBar icon={<BackButton />} title="Menu" />
            <div>

                <h2>Menu content</h2>
            </div>
        </Box>);
};

export default Menu;