import { useHistory, Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import AppBar from "../components/AppBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      padding: theme.spacing(3, 1),
    },
    main: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  })
);

const Menu = () => {
  const classes = useStyles();

  let history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  const BackButton = () => {
    return <ArrowBackIcon onClick={handleClick} />;
  };
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <AppBar title="Menu" icon={<BackButton />} />
      <div className={classes.main}>
        <h3>Menu</h3>
      </div>
    </Box>
  );
};

export default Menu;
