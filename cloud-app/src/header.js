import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SearchIcon from '@material-ui/icons/Search';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BackspaceIcon from '@material-ui/icons/Backspace';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MultipleValueTextInput from 'react-multivalue-text-input';
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    panel: {
        maxWidth: '20cm',
        margin: 'auto',
        marginTop: '30vh',
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    title: {
        //flexGrow: 1,
        float: 'right',
        margin: 'auto',
        marginRight: 0,
    },
}));

export default function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" style={{ margin: 0 }}>
                <Toolbar>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs example"
                    >
                        <Tab label="Home Page" icon={<CloudUploadIcon />} {...a11yProps(0)} />
                        <Tab label="Sign Up" icon={<SearchIcon />} {...a11yProps(1)} />
                        <Tab label="Sign In" icon={<AccountTreeIcon />} {...a11yProps(2)} />
                    </Tabs>
                    <IconButton aria-label="SignOut" edge="end" color="inherit" className={classes.title}> Logout
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            
            </div>

    );
}
