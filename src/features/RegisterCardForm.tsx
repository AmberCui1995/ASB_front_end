import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import AppBar from "../components/AppBar";

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
        <div >
            <AppBar icon={<Icon />} title="Register Card Form" />
            <div>
                <div

                >
                    <h2>Welcome message</h2>
                </div>
                <form
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
        </div>
    );
};

export default RegisterCardForm;