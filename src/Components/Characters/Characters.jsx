import React from 'react';
import s from './Characters.module.css';
import {Grid, InputLabel} from "@material-ui/core";


const Characters = (props) => {

    let pages = [];

    for (let i = 1; i <= props.pageCount; i++) {
        pages.push(i)
    }

    return <Grid container direction="row" justify="center" alignItems="center">
        <div>
            <div>
            {pages.map(p => {
                return <span className= {props.currentPage === p ? s.selectedPage : s.notSelected}
                             onClick={(e) => props.onChangeNumber(p)}>{p} </span>

            })}
            </div>
            <div className={s.filters}>
        <span className={s.filter}>
        <InputLabel>Species</InputLabel>
        <select onChange={props.filterSpecies}>
            <option value='All' defaultValue >All</option>
            <option value='Human'>Human</option>
            <option value='Alien'>Alien</option>
            <option value='Mythological Creature'>Mythological Creature</option>
        </select>
        </span>
                <span className={s.filter}>
        <InputLabel>Status</InputLabel>
        <select onChange={props.filterStatus}>
            <option value='All' defaultValue>All</option>
            <option value='Alive'>Alive</option>
            <option value='Dead'>Dead</option>
            <option value='Unknown'>Unknown</option>
        </select>
        </span>
            </div>
        </div>
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
    </Grid>

};

export default Characters;