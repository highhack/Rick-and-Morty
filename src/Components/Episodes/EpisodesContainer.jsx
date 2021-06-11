import React from 'react';
import Episodes from "./Episodes";
import {connect} from "react-redux";
import {setEpisodes, setEpisodePageCount} from "../../Redux/episodesReducer";
import axios from "axios";

class EpisodeFun extends React.Component {

    componentDidMount() {
        if (this.props.episodes.length === 0) {
            axios.get(`https://rickandmortyapi.com/api/episode/?page=1`)
                .then(resolve1 => {
                    axios.get(`https://rickandmortyapi.com/api/episode/?page=2`)
                        .then(resolve2 => {
                            axios.get(`https://rickandmortyapi.com/api/episode/?page=3`)
                                .then(resolve3 => {
                                   this.props.setEpisodes([...resolve1.data.results, ...resolve2.data.results, ...resolve3.data.results])
                                    // this.props.setEpisodePageCount(resolve.data.info.pages)
                                })
                        })
                })
    }}

    render() {
        return <>
            <Episodes episodes={this.props.episodes}
                      currentEpisodesPage={this.props.currentEpisodesPage}
                      setEpisodes={this.setEpisodes}
            />

        </>
    }
}


let mapStateToProps = (state) => {
    return {
        episodes: state.episodesPage.episodes,
        episodePageCount: state.episodesPage.episodePageCount,

    }
}


const EpisodesContainer = connect(mapStateToProps, {
    setEpisodes,
    setEpisodePageCount
})(EpisodeFun)

export default EpisodesContainer;