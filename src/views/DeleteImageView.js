import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from '../components/TabPanel';
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));


export default function DeleteImageView(props) {
    const classes = useStyles();

    async function handleDelete() {
        // get the tags from the ui and save them to a variable
        var url = document.getElementById("image-url-input").value;

        // send the request to the server with the tags and get the response
        var api = 'https://7irg6umdrf.execute-api.us-east-1.amazonaws.com/v1/images';
        var res = await fetch(api, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "url": url
            })
        });

        res = await res.json();
        document.getElementById('output').innerText=JSON.stringify(res, null, 2);
    }

    return (
        <TabPanel value={props.value} index={4}>

            <form className={classes.form}>
                <TextField id='image-url-input' fullWidth variant='outlined' label='Image URL' />
                <Button
                    onClick={handleDelete}
                    variant="contained"
                    color="secondary"
                    fullWidth
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
                <pre id='output'></pre>
            </form>
        </TabPanel>
    );
}