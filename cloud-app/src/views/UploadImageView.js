import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from '../components/TabPanel';
import { Button } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));


export default function UploadImageView(props) {
    const classes = useStyles();
    return (
        <TabPanel value={props.value} index={0}>
            <form className={classes.form}>
                <input type='file' id='imageUpload' style={{ display: 'None' }} />
                <Button
                    onClick={() => {
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
    );
}