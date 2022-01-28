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
    return (
        <TabPanel value={props.value} index={4}>

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
    );
}