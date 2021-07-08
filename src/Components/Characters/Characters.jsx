import React from 'react';
import s from './Characters.module.scss';
import {Grid, InputLabel} from "@material-ui/core";
import {Pagination} from '@material-ui/lab'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {makeStyles} from '@material-ui/core/styles'
import CharacterWindow from "../CharacterWindow/CharacterWindow";
import Preloader from "../Preloader/Preloader";


const Characters = React.memo((props) => {

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

    const filterSpecies = (event) => {
        props.filterSpecies(event.target.value)
    };
    const filterStatus = (event) => {
        props.filterStatus(event.target.value)
    };
    const filterGender = (event) => {
        props.filterGender(event.target.value)
    };
    const openWindow = (id) => {props.openWindow(id)};

    return <Grid className={s.mainContainer}>

        <div>
            <Preloader/>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>Species</InputLabel>
                <Select value={props.species} onChange={filterSpecies}>
                    <MenuItem value={''}>All</MenuItem>
                    <MenuItem value={'human'}>Human</MenuItem>
                    <MenuItem value={'alien'}>Alien</MenuItem>
                    <MenuItem value={'mytholog'}>Mythological Creature</MenuItem>
                    <MenuItem value={'cronenberg'}>Cronenberg</MenuItem>
                    <MenuItem value={'disease'}>Disease</MenuItem>
                    <MenuItem value={'humanoid'}>Humanoid</MenuItem>
                    <MenuItem value={'robot'}>Robot</MenuItem>
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
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>Gender</InputLabel>
                <Select value={props.gender} onChange={filterGender}>
                    <MenuItem value={''}>All</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'genderless'}>Genderless</MenuItem>
                    <MenuItem value={'unknown'}>Unknown</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div className={s.allCharacters}>
            {props.characters.map(u =>
                <div key={u.id} className={s.characterBlock}>
                    <div className={s.imgBox}>
                        < img alt={''} onClick={() => openWindow(u.id)}
                              src={u.image}
                              className={s.img}/>
                    </div>
                    <div className={s.name}>{u.name}</div>

                </div>
            )}
        </div>

        <Pagination count={props.pageCount} page={props.currentPage} variant="outlined" shape="rounded"
                    onChange={(e, selectedPage) => props.onChangeNumber(selectedPage)}/>

        {props.characterWindowOpened
            ? <CharacterWindow
                 hideWindow={props.hideWindow}
                information={props.information}
            />
            : <div>{}</div>}
    </Grid>

});

export default Characters;