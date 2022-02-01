import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from '../components/TabPanel';
import { Button } from '@material-ui/core';
import MultipleValueTextInput from 'react-multivalue-text-input';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const images = [
    'https://preview.redd.it/acwq7czy2vz71.png?width=640&crop=smart&auto=webp&s=6f05fc3fd517e6bc79d9a963e13a3cb4b61a2099',
    'https://static2.cbrimages.com/wordpress/wp-content/uploads/2021/12/Bojji-holding-a-stick-in-Ranking-of-Kings.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwjd2L4nHvq3SmktlDwCH4gSc7om9NhdmB8g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpfMGCfU0frSa4xsp31m5irELqnlZ_U-5Jg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHd4nhm7Ji3L0DMrHi3dYJ9_x0X_3zM4qkQ&usqp=CAU'
]

const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    imageList: {
        width: '100%',
        height: 450,
        paddingLeft: 10
    },
}));



export default function SearchImageView(props) {
    const classes = useStyles();
    const [imageList, setImageList] = useState([])

    async function handleSubmit() {
        // get the tags from the ui and save them to a variable
        var tags = document.getElementById("search-tags").value.split(',');
        // send the request to the server with the tags and get the response
        var res = await fetch('https://13odoj44e4.execute-api.us-east-1.amazonaws.com/v1/tags', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "tags": tags
            })
        });

        res = await res.json();

        // render the images listed in the response
        setImageList(images.urls);
    }

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
                <Button variant='contained' fullWidth color='primary' onClick={handleSubmit}>SUBMIT</Button>
                <br />
                <br />
                <ImageList rowHeight={180} className={classes.imageList}>
                    {imageList.map(image => (
                        <ImageListItem key={image}>
                            <img src={image} alt={image}/>
                        </ImageListItem>
                    ))}
                </ImageList>
            </form>
        </TabPanel>
    );
}