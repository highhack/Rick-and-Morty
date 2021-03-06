import React from 'react';
import s from './MyWatchList.module.css';
import {IconButton} from "@material-ui/core";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import {useDispatch, useSelector} from "react-redux";
import {setWatchList} from "../../Redux/episodesReducer";


const MyWatchList = React.memo(()=> {


    let myWatchList = useSelector(state => state.episodesPage.watchList)
    let dispatch = useDispatch()

    myWatchList = JSON.parse(localStorage.getItem('watchList'))
    setWatchList(myWatchList)


    const removeEpisode = (id) => {
        let removeEpisode = myWatchList.find(episode => episode.id === id)
        myWatchList.splice(myWatchList.indexOf(removeEpisode), 1)
        dispatch(setWatchList([...myWatchList]))
        localStorage.setItem('watchList', JSON.stringify(myWatchList))
    }

    if (myWatchList === null) return <div>Add the episodes you plan to watch</div>
    if (myWatchList.length === 0) {
        setWatchList(JSON.parse(localStorage.getItem('watchList')))
    }
        return <div className={s.myWathList}>
        <table className={s.table}>
            <thead>
            <tr className={s.header}>
                <th>Name</th>
                <th>Date</th>
                <th>Episode</th>
                <th>URL</th>
            </tr>
            </thead>
            {[...myWatchList].map(u =>
                <tbody>
                <tr key={u.id} className={s.insideTable}>
                    <td>{u.name}</td>
                    <td>{u.air_date} </td>
                    <td>{u.episode} </td>
                    <td><a href={u.url} target="_blank" rel="noreferrer">watch</a></td>
                    <td>
                        <IconButton
                            onClick={() => removeEpisode(u.id)}
                        >
                            <DeleteSweepIcon fontSize={"large"}/>
                        </IconButton>

                    </td>
                </tr>
                </tbody>
            )}
        </table>
    </div>

});

export default MyWatchList;