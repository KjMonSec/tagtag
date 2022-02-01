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


export default function RelatedImagesView(props) {
    const classes = useStyles();

    async function handleUpload() {
        //var formdata = new FormData();
        var fileInput = document.getElementById('imageUpload');
        //formdata.append("image", fileInput.files[0]);

        // send the request to the server with the tags and get the response
        var api = 'https://7irg6umdrf.execute-api.us-east-1.amazonaws.com/v1/images';
        var res = await fetch(api, {
            method: 'POST',
            body: fileInput.files[0]
        });

        res = await res.json();
        document.getElementById('output').innerText = JSON.stringify(res, null, 2);
    }
    return (
        <TabPanel value={props.value} index={2}>
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
                <Button
                    variant='contained'
                    fullWidth color='primary'
                    onClick={handleUpload}
                >SUBMIT</Button>
                <pre id='output'></pre>
            </form>
        </TabPanel>
    );
}