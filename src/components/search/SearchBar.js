import React, { useState } from "react";

import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 2),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('lrg')]: {
        maxWidth: "100%",
        },
    },
}));

const SearchBar = () => {
    const [ term, setTerm ] = useState("")

    const classes = useStyles();

    const onInputChange = (e) => {
        setTerm(e.target.value)
    }
    const onFormSubmit = e => {
        e.preventDefault()
        console.log(term)
        setTerm("")
    }

    return(
        <React.Fragment>
            <div className={classes.search}>
                <form onSubmit={onFormSubmit}>
                    <InputBase
                        value={term}
                        onChange={onInputChange}
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </form>
            </div>
        </React.Fragment>  
    );
}

export default SearchBar;