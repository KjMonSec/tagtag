import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SearchIcon from '@material-ui/icons/Search';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BackspaceIcon from '@material-ui/icons/Backspace';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import RemoveTagsView from './views/RemoveTagsView';
import DeleteImageView from './views/DeleteImageView';
import UploadImageView from './views/UploadImageView';
import RelatedImagesView from './views/RelatedImagesView';
import SearchImageView from './views/SearchImageView';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LogInView from './views/LogInView';
import SignUpView from './views/SignUpView';

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
                        <Tab label="Upload Image" icon={<CloudUploadIcon />} {...a11yProps(0)} />
                        <Tab label="Search Images" icon={<SearchIcon />} {...a11yProps(1)} />
                        <Tab label="Related Images" icon={<AccountTreeIcon />} {...a11yProps(2)} />
                        <Tab label="Remove Tags" icon={<BackspaceIcon />} {...a11yProps(3)} />
                        <Tab label="Delete Image" icon={<DeleteForeverIcon />} {...a11yProps(4)} />
                        <Tab label="SignUp" icon={<PersonAddIcon />} {...a11yProps(5)} />
                        <Tab label="LogIn" icon={<LockOpenIcon />} {...a11yProps(6)} />
                    </Tabs>
                    <IconButton aria-label="SignOut" edge="end" color="inherit" className={classes.title}> Logout
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.panel}>
                <UploadImageView value={value}  />
                <SearchImageView value={value} />
                <RelatedImagesView value={value} />
                <RemoveTagsView value={value} />
                <DeleteImageView value={value} />
                <LogInView value={value} />
                <SignUpView value={value} />
            </div>
        </div>
    );
}
