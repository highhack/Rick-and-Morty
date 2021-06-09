import React from 'react';
import s from './Characters.module.css';
import {Grid, InputLabel} from "@material-ui/core";
import {Pagination} from '@material-ui/lab'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles'


const Characters = (props) => {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

        const classes = useStyles();

        const filterSpecies = (event) => {props.filterSpecies(event.target.value)};
        const filterStatus = (event) => {props.filterStatus(event.target.value)};


        return <Grid className={s.mainContainer}>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>Species</InputLabel>
                <Select value={props.species} onChange={filterSpecies}>
                    <MenuItem value={''}>All</MenuItem>
                    <MenuItem value={'human'}>Human</MenuItem>
                    <MenuItem value={'alien'}>Alien</MenuItem>
                    <MenuItem value={'mythologicalCreature'}>Mythological Creature</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>Status</InputLabel>
                <Select value={props.status} onChange={filterStatus}>
                    <MenuItem value={''}>All</MenuItem>
                    <MenuItem value={'alive'}>Alive</MenuItem>
                    <MenuItem value={'dead'}>Dead</MenuItem>
                    <MenuItem value={'unknown'}>Unknown</MenuItem>
                </Select>
            </FormControl>
        <div className={s.allCharacters}>
            {props.characters.map(u =>
                <div key={u.id} className={s.characterBlock}>
                    <div>
                        < img
                            src={u.image}
                            className={s.img}/>
                    </div>
                    <div>{u.name}</div>

                </div>
            )}
        </div>

        <Pagination count={props.pageCount} page={props.currentPage} variant="outlined" shape="rounded"
                    onChange={(e, selectedPage) => props.onChangeNumber(selectedPage)}/>
    </Grid>

};

export default Characters;