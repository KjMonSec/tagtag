import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from '../components/TabPanel';
import { Button } from '@material-ui/core';
import MultipleValueTextInput from 'react-multivalue-text-input';



const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));



export default function SearchImageView(props) {
    const classes = useStyles();
    return (
        <TabPanel value={props.value} index={1}>
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
    );
}