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
            borderStyle: "solid"

        },
        icon: {
            flexGrow: 1
        },
        title: {
            flexGrow: 1
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
            <div className={classes.icon}>
                {prop.icon}
            </div><div className={classes.title}>
                {prop.title}
            </div>
        </div>
    );
};


export default AppBar;