import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: "100%",
        },
        verticalContainer: {
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
        },
    })
);

const Container = ({ children }: { children: React.ReactNode }) => {
    const classes = useStyles();
    return (
        <Grid
            className={classes.container}
            container
            alignItems="center"
            justifyContent="center"
        >
            <Grid
                className={classes.verticalContainer}
                container
                item
                alignItems="center"
                justifyContent="center"
                xs={12}
                sm={7}
            >
                {children}
            </Grid>
        </Grid>
    );
};
export default Container

