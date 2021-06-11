import React from 'react';
import Locations from "./Locations";
import {connect} from "react-redux";
import {setLocations} from '../../Redux/locationReducer'
import axios from "axios";

class LocationsFun extends React.Component {

    componentDidMount() {
        // if (this.props.episodes.length === 0) {
        axios.get(`https://rickandmortyapi.com/api/location?page=1`)
            .then(resolve1 => {
                axios.get(`https://rickandmortyapi.com/api/location?page=2`)
                    .then(resolve2 => {
                        axios.get(`https://rickandmortyapi.com/api/location?page=3`)
                            .then(resolve3 => {
                                axios.get(`https://rickandmortyapi.com/api/location?page=4`)
                                    .then(resolve4 => {
                                        axios.get(`https://rickandmortyapi.com/api/location?page=5`)
                                            .then(resolve5 => {
                                                axios.get(`https://rickandmortyapi.com/api/location?page=6`)
                                                    .then(resolve6 => {
                                                        this.props.setLocations([
                                                            ...resolve1.data.results,
                                                            ...resolve2.data.results,
                                                            ...resolve3.data.results,
                                                            ...resolve4.data.results,
                                                            ...resolve5.data.results,
                                                            ...resolve6.data.results,
                                                        ])
                                                    })
                                            })
                                    })
                                // this.props.setCurrentEpisodesPage(this.props.currentEpisodesPage)
                                // this.props.setEpisodePageCount(resolve.data.info.pages)
                            })
                    })
            })
    }

    render() {
        return <>
            <Locations locations={this.props.locations}
            />

        </>
    }
}


let mapStateToProps = (state) => {
    return {
        locations: state.locationsPage.locations

    }
}


const LocationsContainer = connect(mapStateToProps, {
    setLocations
})(LocationsFun)

export default LocationsContainer;