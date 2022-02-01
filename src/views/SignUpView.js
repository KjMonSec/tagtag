import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from '../components/TabPanel';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import clsx from 'clsx';
import signup from '../components/auth/signup';


const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

export default function SignUpView(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSignUp = async () => {
        var email = document.getElementById("standard-adornment-email").value;
        var password = document.getElementById("standard-adornment-password").value;
        var accessToken = await signup(email, password)
        console.log("AccessToken: ", accessToken);
    };

    return (
        <TabPanel value={props.value} index={5}>

            <form className={classes.form}>
                <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel variant='outlined' htmlFor="standard-adornment-email">Email</InputLabel>
                    <OutlinedInput
                        id="standard-adornment-email"
                        type={'Email'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton>
                                    <EmailIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined" >
                    <InputLabel variant='outlined' htmlFor="standard-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined" >
                    <InputLabel variant='outlined' htmlFor="standard-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSignUp}
                >
                    SignUp
                </Button>

            </form>
        </TabPanel>
    );
}