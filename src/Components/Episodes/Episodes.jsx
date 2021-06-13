import React, {useEffect, useState} from 'react';
import s from './Episodes.module.css'
import {Pagination} from "@material-ui/lab";
import Preloader from "../Preloader/Preloader";
import { TextField } from '@material-ui/core';


const Episodes = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [episodesPage, setEpisodesPage] = useState([])

    useEffect(() => {
        setEpisodesPage(props.episodes.slice(0, 25))
    }, [props])

    const  onChangeName = (event) => {props.onChangeName(event.currentTarget.value)}

    const onChangeEpisodesPage = (currentPage) => {
        setCurrentPage(currentPage)
        currentPage === 1
            ? setEpisodesPage(props.episodes.slice(0, 25))
            : setEpisodesPage(props.episodes.slice(26, props.episodes.length))
    }


    return <div className={s.episodes}>
        {/*{props.loadingStatus === 'loading'*/}
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
                {/*<th>characters </th>*/}
                <th>URL</th>
            </tr>
            </thead>
            {episodesPage.map(u =>
                <tbody>
                <tr key={u.id} className={s.insideTable}>
                    <td>{u.name}</td>
                    <td>{u.air_date} </td>
                    <td>{u.episode} </td>
                    {/*<td>{u.characters} </td>*/}
                    <td><a href={u.url} target="_blank" rel="noreferrer">watch</a></td>
                </tr>
                </tbody>
            )}
        </table>
        <Pagination count={2} page={currentPage} variant="outlined" shape="rounded"
                    onChange={(e, selectedPage) => onChangeEpisodesPage(selectedPage)}/>
    </div>
};

export default Episodes;