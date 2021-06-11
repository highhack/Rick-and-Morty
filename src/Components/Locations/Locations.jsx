import React, {useState} from 'react';
import s from './Locations.module.css';
import {Pagination} from "@material-ui/lab";


const Locations = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [locationsPage, setLocationsPage] = useState(props.locations.slice(0,25))


    const onChangeEpisodesPage = (currentPage) => {
        setCurrentPage(currentPage)
        if(currentPage === 1) setLocationsPage(props.locations.slice(0,25))
         else if (currentPage === 2) setLocationsPage(props.locations.slice(26,50))
         else if (currentPage === 3) setLocationsPage(props.locations.slice(51,75))
         else if (currentPage === 4) setLocationsPage(props.locations.slice(76,100))
         else if (currentPage === 5) setLocationsPage(props.locations.slice(100,props.locations.length))
    }

    return <div className={s.locations}>

        {/*<EpisodesTable episodesPage={[...episodesPage]} />*/}

        <div className={s.table}>
            <thead>
            <tr className={s.header}>
                <th>Name</th>
                <th>Type</th>
                <th>Dimension</th>
                <th>URL</th>
            </tr>
            </thead>
            {[...locationsPage].map(u =>
                <tbody>
                <tr key={u.id} className={s.insideTable}>
                    <td>{u.name} </td>
                    <td>{u.type} </td>
                    <td>{u.dimension} </td>
                    <td><a href={u.url} target="_blank">watch</a></td>
                </tr>
                </tbody>
            )}
        </div>
        <Pagination count={5} page={currentPage} variant="outlined" shape="rounded"
                    onChange={(e, selectedPage) => onChangeEpisodesPage(selectedPage)}/>
    </div>

};

export default Locations;