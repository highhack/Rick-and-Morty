import React, {useEffect, useState} from 'react';
import s from './Locations.module.css';
import {Pagination} from "@material-ui/lab";
import {TextField} from "@material-ui/core";


const Locations = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [locationsPage, setLocationsPage] = useState(props.locations.slice(0, 25))
    const [nameValue, setNameValue] = useState('')


    useEffect(() => {
        setLocationsPage(props.locations.slice(0, 25))
    }, [props])


    const onChangeLocationsPage = (currentPage) => {
        setCurrentPage(currentPage)
        if (currentPage === 1) setLocationsPage(props.locations.slice(0, 25))
        else if (currentPage === 2) setLocationsPage(props.locations.slice(26, 50))
        else if (currentPage === 3) setLocationsPage(props.locations.slice(51, 75))
        else if (currentPage === 4) setLocationsPage(props.locations.slice(76, 100))
        else if (currentPage === 5) setLocationsPage(props.locations.slice(100, props.locations.length))
    }

    const onChangeLocationName = (e) => {
        setNameValue(e.currentTarget.value)
        if (e.currentTarget.value === '') {
            onChangeLocationsPage(props.currentPage)
            setLocationsPage(props.locations.slice(0, 25))
        } else {
            let n = []
            for (let i = 0; i < props.locations.length; i++) {
                let a = props.locations[i].name.toLowerCase().search(e.currentTarget.value)
                if (a !== -1) {
                    n.push(props.locations[i])
                }
            }
            setLocationsPage(n)
        }
    }

    return <div className={s.locations}>
        <div className={s.searchContainer}>
            <div>Search by:</div>
            <form className={s.searchForm} noValidate autoComplete="off">
                <TextField value={nameValue} onChange={onChangeLocationName} id="filled-basic-name" label="Name"
                           variant="filled"/>
            </form>
            <form className={s.searchForm} noValidate autoComplete="off">
                <TextField id="filled-basic-episode" label="Number of episode" variant="filled"/>
            </form>
            <form className={s.searchForm} noValidate autoComplete="off">
                <TextField id="filled-basic-episode" label="Number of episode" variant="filled"/>
            </form>
        </div>
        <table className={s.table}>
            <thead>
            <tr className={s.header}>
                <th>Name</th>
                <th>Type</th>
                <th>Dimension</th>
                <th>URL</th>
            </tr>
            </thead>
            {locationsPage.map(u =>
                <tbody>
                <tr key={u.id} className={s.insideTable}>
                    <td>{u.name} </td>
                    <td>{u.type} </td>
                    <td>{u.dimension} </td>
                    <td><a href={u.url} target="_blank" rel="noreferrer">watch</a></td>
                </tr>
                </tbody>
            )}
        </table>
        <Pagination count={5} page={currentPage} variant="outlined" shape="rounded"
                    onChange={(e, selectedPage) => onChangeLocationsPage(selectedPage)}/>
    </div>

};

export default Locations;