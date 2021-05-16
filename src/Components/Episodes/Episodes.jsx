import React from 'react';
import axios from "axios";
import {Grid} from "@material-ui/core";
import s from './Episodes.module.css'


const Episodes = (props) => {
    let page
    if (props.episodes.length === 0) {
        axios.get(`https://rickandmortyapi.com/api/episode/?page=${props.currentPage}`)
            .then(resolve => {props.setEpisodes(resolve.data.results)
            })}
let a = [...props.episodes]

    return <div>
<span>{props.currentPage}</span>
        <div className={s.table}  >
            <tr className={s.header}>
                <th>name </th>
                <th>air_date </th>
                <th>episode </th>
                {/*<th>characters </th>*/}
                <th>url </th>
                <th>created </th>
            </tr>
        {a.map(u =>
            <tr key={u.id} className={s.insideTable}>
            <td>{u.name} </td>
            <td>{u.air_date} </td>
            <td>{u.episode} </td>
            {/*<td>{u.characters} </td>*/}
            <td><a href={u.url} target="_blank">watch</a></td>
            <td>{u.created} </td>
            </tr>
        )}
    </div>
    </div>
};

export default Episodes;