import Box from "@material-ui/core/Box";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { classicNameResolver } from "typescript";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            padding: theme.spacing(3),
            width: "100%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#3f51b5"

        },
        icon: {
            flexGrow: 1,
            color: "white",
            tabSize: "0.73em",
        },
        title: {
            flexGrow: 1,
            color: "white"

        },
        divider: {
            margin: theme.spacing(1, 0),
        },
    })
);

interface Props {
    icon: React.ReactNode,
    title: string
}
const AppBar = (prop: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.appBar}>
            <i className={classes.icon}>
                {prop.icon}
            </i><h1 className={classes.title}> {prop.title}</h1>
        </div >


    );
};


export default AppBar;