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
                <TextField fullWidth variant='outlined' label='Image URL' />
                <Button variant='contained' fullWidth color='primary'>SUBMIT</Button>
            </form>
        </TabPanel>
    )
}