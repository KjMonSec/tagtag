import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
=======
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
<<<<<<< HEAD
<<<<<<< HEAD
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
=======
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
=======
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SearchIcon from '@material-ui/icons/Search';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BackspaceIcon from '@material-ui/icons/Backspace';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
<<<<<<< HEAD
<<<<<<< HEAD
import MultipleValueTextInput from 'react-multivalue-text-input';
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

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
=======
=======
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import RemoveTagsView from './views/RemoveTagsView';
import DeleteImageView from './views/DeleteImageView';
import UploadImageView from './views/UploadImageView';
import RelatedImagesView from './views/RelatedImagesView';
import SearchImageView from './views/SearchImageView';

<<<<<<< HEAD
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
=======
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1

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
<<<<<<< HEAD
<<<<<<< HEAD
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
=======
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
=======
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
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
                    </Tabs>
                    <IconButton aria-label="SignOut" edge="end" color="inherit" className={classes.title}> Logout
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.panel}>
<<<<<<< HEAD
<<<<<<< HEAD
                <TabPanel value={value} index={0}>
                    <form className={classes.form}>
                        <input type='file' id='imageUpload' style={{ display: 'None' }} />
                        <Button
                            onClick={()=>{
                                document.getElementById('imageUpload').click()
                            }}
                            variant="contained"
                            fullWidth color="primary"
                            component="span"
                            startIcon={<PhotoCamera />}>
                            Upload
                        </Button>
                        <Button variant='contained' fullWidth color='primary'>SUBMIT</Button>
                    </form>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <form className={classes.form}>
                        <div className="beautiful-input MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                            <MultipleValueTextInput
                                onItemAdded={(item, allItems) => document.getElementById('search-tags').value = allItems.join()}
                                onItemDeleted={(item, allItems) => document.getElementById('search-tags').value = allItems.join()}
                                //label="Use the search bar to search images using tags and press SUBMIT to confirm"
                                name="item-input"
                                className='MuiInputBase-input MuiOutlinedInput-input'
                                placeholder="Search tags"
                            />
                        </div>
                        <input id='search-tags' type='hidden' />
                        <Button variant='contained' fullWidth color='primary'>SUBMIT</Button>
                    </form>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <form className={classes.form}>
                    <input type='file' id='imageUpload' style={{ display: 'None' }} />
                        <Button
                            onClick={()=>{
                                document.getElementById('imageUpload').click()
                            }}
                            variant="contained"
                            fullWidth color="primary"
                            component="span"
                            startIcon={<PhotoCamera />}>
                            Upload
                        </Button>
                        <Button variant='contained' fullWidth color='primary'>SUBMIT</Button>
                    </form>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <form className={classes.form}>
                        <div className="beautiful-input MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                            <MultipleValueTextInput
                                onItemAdded={(item, allItems) => document.getElementById('tags-to-be-removed').value = allItems.join()}
                                onItemDeleted={(item, allItems) => document.getElementById('tags-to-be-removed').value = allItems.join()}
                                //label="Tags to be removed:"
                                name="item-input"
                                className='MuiInputBase-input MuiOutlinedInput-input'
                                placeholder="Enter tags"
                            />
                        </div>
                        <input type='hidden' id='tags-to-be-removed' />
                        <TextField fullWidth variant='outlined' label='Image URL' />
                        <Button variant='contained' fullWidth color='primary'>SUBMIT</Button>
                    </form>
                </TabPanel>
                <TabPanel value={value} index={4}>

                    <form className={classes.form}>
                        <TextField fullWidth variant='outlined' label='Image URL' />
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            startIcon={<DeleteIcon />}
                        >
                            Delete
                        </Button>

                    </form>
                </TabPanel>
=======
=======
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
                <UploadImageView value={value}  />
                <SearchImageView value={value} />
                <RelatedImagesView value={value} />
                <RemoveTagsView value={value} />
                <DeleteImageView value={value} />
<<<<<<< HEAD
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
=======
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
            </div>
        </div>
    );
}
