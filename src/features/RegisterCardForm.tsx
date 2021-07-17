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
import api from "./api";
import { string } from "yup/lib/locale";

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
    cardNumber: yup
        .number()
        .required("Credit Card Number is required")
        .positive()
        .integer(),
    cvc: yup.number().required().positive().integer(),
    expiryDate: yup.date().required(),
});


interface CardForm {
    name: string,
    cardNumber: number,
    cvc: number,
    expiryDate: string
}
const RegisterCardForm = () => {
    const classes = useStyles();
    const userName = "AmberC"

    const formik = useFormik({
        initialValues: {
            name: userName,
            cardNumber: "",
            cvc: "",
            expiryDate: ""
        },

        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(typeof (Number(values.cardNumber)))
            api.post("/cards", { name: values.name, cardNumber: Number(values.cardNumber), cvc: Number(values.cvc), expiryDate: values.expiryDate })
                .then(res => alert("success")).catch(err => alert("fail"));
        }

    }
    );

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
                    <h2>Welcome {userName}</h2>
                </div>
                <form className={classes.form}
                    onSubmit={formik.handleSubmit}
                >
                    <Grid container justifyContent="space-around" direction="column">
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="cardNumber"
                            name="cardNumber"
                            label="Credit Card Number"
                            value={formik.values.cardNumber}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.cardNumber &&
                                Boolean(formik.errors.cardNumber)
                            }
                            helperText={
                                formik.touched.cardNumber &&
                                formik.errors.cardNumber
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
                                id="expiryDate"
                                type="date"
                                value={formik.values.expiryDate}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.expiryDate && Boolean(formik.errors.expiryDate)
                                }
                                helperText={formik.touched.expiryDate && formik.errors.expiryDate}
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