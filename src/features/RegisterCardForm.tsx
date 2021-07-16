import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import AppBar from "../components/AppBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      flexGrow: 1,
      padding: theme.spacing(0, 2, 2, 2),
    },
    form: {
        width: "100%",
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-around",

    }
  })
);

const validationSchema = yup.object().shape({
    creditCardNumber: yup
        .number()
        .required("Credit Card Number is required")
        .positive()
        .integer(),
    cvc: yup.number().required().positive().integer(),
    expiry: yup.date().required(),
});

const RegisterCardForm = () => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            creditCardNumber: "",
            cvc: "",
            expiry: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const Icon = () => {
        return (
            <Link to="/menu">
                <MenuIcon />
            </Link>
        );
    };
    return (
        <Box display="flex" flexDirection="column" height="100%">

            <AppBar icon={<Icon />} title="Register Card Form" />
            <div className={classes.main}>
                <div>
                    <h2>Welcome message</h2>
                </div>
                <form className={classes.form}
                    onSubmit={formik.handleSubmit}
                >
                    <Grid container justifyContent="space-around" direction="column">
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="creditCardNumber"
                            name="creditCardNumber"
                            label="Credit Card Number"
                            value={formik.values.creditCardNumber}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.creditCardNumber &&
                                Boolean(formik.errors.creditCardNumber)
                            }
                            helperText={
                                formik.touched.creditCardNumber &&
                                formik.errors.creditCardNumber
                            }
                        />
                    </Grid>
                    <Grid container justifyContent="space-between" spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="cvc"
                                name="cvc"
                                label="CVC"
                                value={formik.values.cvc}
                                onChange={formik.handleChange}
                                error={formik.touched.cvc && Boolean(formik.errors.cvc)}
                                helperText={formik.touched.cvc && formik.errors.cvc}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="expiry"
                                type="date"
                                value={formik.values.expiry}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.expiry && Boolean(formik.errors.expiry)
                                }
                                helperText={formik.touched.expiry && formik.errors.expiry}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Box>
    );
};

export default RegisterCardForm;