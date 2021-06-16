import React from 'react';
import Locations from "./Locations";
import {connect} from "react-redux";
import {setLocations, setCountLocationsPages} from '../../Redux/locationReducer'
import axios from "axios";

class LocationsFun extends React.Component {

    componentDidMount() {
        axios.get(`https://rickandmortyapi.com/api/location`)
            .then(resolve => {
                setCountLocationsPages(resolve.data.info.pages)
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
                                    })
                            })
                    })
            })
    }

    render() {
        return <>
            <Locations locations={this.props.locations}
                       countLocationsPages={this.props.countLocationsPages}
                       setCountLocationsPages={this.props.setCountLocationsPages}
            />

        </>
    }
}


let mapStateToProps = (state) => {
    return {
        locations: state.locationsPage.locations,
        countLocationsPages: state.locationsPage.countLocationsPages

    }
}


const LocationsContainer = connect(mapStateToProps, {
    setLocations,
    setCountLocationsPages
})(LocationsFun)

export default LocationsContainer;