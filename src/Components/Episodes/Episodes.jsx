import React, {useEffect, useState} from 'react';
import s from './Episodes.module.css'
import {Pagination} from "@material-ui/lab";
import Preloader from "../Preloader/Preloader";
import {TextField} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {IconButton} from '@material-ui/core';



const Episodes = props => {
    const [currentPage, setCurrentPage] = useState(1)
    // const [episodesCurrentPage, setEpisodesCurrentPage] = useState([])


    useEffect(() => {
        props.setCurrentEpisodesPage(props.episodes.slice(0, 25))
    }, [props])

    const onChangeName = (event) => {
        props.onChangeName(event.currentTarget.value)
    }

    const onChangeEpisodesPage = (currentPage) => {
        setCurrentPage(currentPage)
        currentPage === 1
            ? props.setCurrentEpisodesPage(props.episodes.slice(0, 25))
            : props.setCurrentEpisodesPage(props.episodes.slice(26, props.episodes.length))
    }

    const addToWatchList = (id) => props.addToWatchList(id)

    return <div className={s.episodes}>
        <Preloader/>
        <div className={s.searchContainer}>
            <div>Search by:</div>
            <form className={s.searchForm} noValidate autoComplete="off">
                <TextField value={props.nameValue} onChange={onChangeName} id="filled-basic-name" label="Name"
                           variant="filled"/>
            </form>
            <form className={s.searchForm} noValidate autoComplete="off">
                <TextField id="filled-basic-episode" label="Number of episode" variant="filled"/>
            </form>
        </div>
        <table className={s.table}>
            <thead>
            <tr className={s.header}>
                <th>Name</th>
                <th>Date</th>
                <th>Episode</th>
                <th>Add to Watchlist</th>
            </tr>
            </thead>
            {[...props.currentEpisodesPage].map(u =>
                <tbody>
                <tr key={u.id} className={s.insideTable}>
                    <td>{u.name}</td>
                    <td>{u.air_date} </td>
                    <td>{u.episode} </td>
                    <td style={{display: 'flex', justifyContent: 'center'}}>
                        <IconButton onClick={(e) => addToWatchList(u.id)} disabled={u.disabled}>
                            <AddBoxIcon fontSize={"large"}/>
                        </IconButton>

                    </td>
                </tr>
                </tbody>
            )}
        </table>
        <Pagination count={2} page={currentPage} variant="outlined" shape="rounded"
                    onChange={(e, selectedPage) => onChangeEpisodesPage(selectedPage)}/>
    </div>
};

export default Episodes;