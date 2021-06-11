import React, {useEffect, useState} from 'react';
import s from './Episodes.module.css'
import {Pagination} from "@material-ui/lab";


const Episodes = (props) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [episodesPage, setEpisodesPage] = useState(props.episodes.slice(0,25))

    useEffect(() => {
        setEpisodesPage(props.episodes.slice(0,25))
    },[])


    const onChangeEpisodesPage = (currentPage) => {
        setCurrentPage(currentPage)
        currentPage === 1
            ? setEpisodesPage(props.episodes.slice(0,25))
            : setEpisodesPage(props.episodes.slice(26,props.episodes.length))
    }

    return <div className={s.episodes}>

        <div className={s.table}>
            <thead>
            <tr className={s.header}>
                <th>Name</th>
                <th>Date</th>
                <th>Episode</th>
                {/*<th>characters </th>*/}
                <th>URL</th>
            </tr>
            </thead>
            {[...episodesPage].map(u =>
                <tbody>
                <tr key={u.id} className={s.insideTable}>
                    <td>{u.name} </td>
                    <td>{u.air_date} </td>
                    <td>{u.episode} </td>
                    {/*<td>{u.characters} </td>*/}
                    <td><a href={u.url} target="_blank">watch</a></td>
                </tr>
                </tbody>
            )}
        </div>
        <Pagination count={2} page={currentPage} variant="outlined" shape="rounded"
                    onChange={(e, selectedPage) => onChangeEpisodesPage(selectedPage)}/>
    </div>
};

export default Episodes;