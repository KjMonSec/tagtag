import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from '../components/TabPanel';
import MultipleValueTextInput from 'react-multivalue-text-input';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));


export default function RemoveTagsView(props) {
    const classes = useStyles();

    async function handleDelete() {
        // get the tags from the ui and save them to a variable
        var tags = document.getElementById("tags-to-be-removed").value.split(',');
        var url = document.getElementById('image-url').value;
    
        var api = 'https://7irg6umdrf.execute-api.us-east-1.amazonaws.com/v1/tags';
        var res = await fetch(api, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "tags": tags,
                "url":url
            })
        }); 
        res = await res.json();
        document.getElementById('output').innerText=JSON.stringify(res, null, 2);
    } 
    return (
        <TabPanel value={props.value} index={3}>
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
                <TextField fullWidth id='image-url' variant='outlined' label='Image URL' />
                <Button id='delete-image' variant='contained' fullWidth color='secondary' onClick={handleDelete}>DELETE</Button>
                <pre id='output'></pre>
            </form>
        </TabPanel>
    )
}