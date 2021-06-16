import React, {useEffect, useState} from 'react';
import s from './Episodes.module.css'
import {Pagination} from "@material-ui/lab";
import Preloader from "../Preloader/Preloader";
import { TextField } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { IconButton } from '@material-ui/core';


const Episodes = React.memo((props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [episodesPage, setEpisodesPage] = useState([])
    const [disabledButton, setDisabledButton] = useState(false)

    useEffect(() => {
        setEpisodesPage(props.episodes.slice(0, 25))
    }, [props])

    useEffect(() => {
        let localData = localStorage.getItem('watchList')
        if (localData)
        props.setWatchList(JSON.parse(localData))
    },[])

    const  onChangeName = (event) => {props.onChangeName(event.currentTarget.value)}

    const onChangeEpisodesPage = (currentPage) => {
        setCurrentPage(currentPage)
        currentPage === 1
            ? setEpisodesPage(props.episodes.slice(0, 25))
            : setEpisodesPage(props.episodes.slice(26, props.episodes.length))
    }

    const addToWatchList = (event, id) => {
        let currentEpisode = {...props.episodes.find(episode => episode.id === id)}
        if (props.watchList) {props.watchList.push({...currentEpisode})}
        props.setWatchList(props.watchList)
        localStorage.setItem('watchList',JSON.stringify(props.watchList))
    }


    return <div className={s.episodes}>
        <Preloader/>
        <div className={s.searchContainer} >
            <div>Search by: </div>
            <form  className={s.searchForm} noValidate autoComplete="off">
                <TextField value={props.nameValue} onChange={onChangeName} id="filled-basic-name" label="Name" variant="filled" />
            </form>
                <form className={s.searchForm} noValidate autoComplete="off">
                <TextField id="filled-basic-episode" label="Number of episode" variant="filled" />
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
            {episodesPage.map(u =>
                <tbody>
                <tr key={u.id} className={s.insideTable}>
                    <td>{u.name}</td>
                    <td>{u.air_date} </td>
                    <td>{u.episode} </td>
                    <td style={{display: 'flex', justifyContent: 'center'}}>
                        <IconButton  onClick={(e) => addToWatchList(e, u.id)}>
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
});

export default Episodes;