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
import UploadButtons from './Uploadbutton.js'
import IconLabelButtons from './Deletebutton.js'
import MultipleValueTextInput from 'react-multivalue-text-input';
import TextField from '@material-ui/core/TextField'
import SubmitButtons from './SubmitButton.js'

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
}));

export default function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
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
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                Select an image to upload:
                <UploadButtons />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MultipleValueTextInput
                    onItemAdded={(item, allItems) => console.log(`Item added: ${item}`)}
                    onItemDeleted={(item, allItems) => console.log(`Item removed: ${item}`)}
                    label="Use the search bar to search images using tags and press SUBMIT to confirm"
                    name="item-input"
                    placeholder="Search tags separated by comma or the ENTER button."
                    values={["default value", "another default value"]}
                />

                <SubmitButtons />

            </TabPanel>
            <TabPanel value={value} index={2}>
                Related Images:
                

            </TabPanel>
            <TabPanel value={value} index={3}>
                Select tags to be removed:

                <MultipleValueTextInput
                    onItemAdded={(item, allItems) => console.log(`Item added: ${item}`)}
                    onItemDeleted={(item, allItems) => console.log(`Item removed: ${item}`)}
                    label="Search image using tags"
                    name="item-input"
                    placeholder="Search tags separated by comma or the ENTER button."
                    values={["default value", "another default value"]}
                /> 


                Enter the URL of the tags you want to remove: <TextField />  
                <SubmitButtons />
            </TabPanel>
            <TabPanel value={value} index={4}>

                Please enter URL of the image you want to delete and then press the DELETE button to confirm:
                <TextField />
                <IconLabelButtons />
            </TabPanel>
        </div>
    );
}
