import React from 'react';
import Episodes from "./Episodes";
import {connect} from "react-redux";
import {setEpisodes, setEpisodePageCount, setValueNumber} from "../../Redux/episodesReducer";
import {setLoadingStatus} from "../../Redux/commonReducer";
import axios from "axios";

class EpisodeFun extends React.Component {

    componentDidMount() {
        this.props.setLoadingStatus('loading')
        // if (this.props.episodes.length === 0) {
            axios.get(`https://rickandmortyapi.com/api/episode/?page=1`)
                .then(resolve1 => {
                    axios.get(`https://rickandmortyapi.com/api/episode/?page=2`)
                        .then(resolve2 => {
                            axios.get(`https://rickandmortyapi.com/api/episode/?page=3`)
                                .then(resolve3 => {
                                     this.props.setEpisodes([...resolve1.data.results, ...resolve2.data.results, ...resolve3.data.results])
                                    this.props.setLoadingStatus('successes')
                                    // this.props.setEpisodePageCount(resolve.data.info.pages)
                                })
                        })
                })
    }

    onChangeName = (name) => {
        axios.get(`https://rickandmortyapi.com/api/episode/?name=${name}`)
            .then(resolve => {
            this.props.setEpisodes(resolve.data.results)
        })
    }

    render() {
        return <>
            <Episodes episodes={this.props.episodes}
                      currentEpisodesPage={this.props.currentEpisodesPage}
                      setEpisodes={this.props.setEpisodes}
                      onChangeName={this.onChangeName}
                      nameValue={this.props.nameValue}
            />

        </>
    }
}


let mapStateToProps = (state) => {
    return {
        episodes: state.episodesPage.episodes,
        episodePageCount: state.episodesPage.episodePageCount,
        valueNumber: state.episodesPage.valueNumber,
        loadingStatus: state.commonComponents.loadingStatus,

    }
}


const EpisodesContainer = connect(mapStateToProps, {
    setEpisodes,
    setEpisodePageCount,
    setLoadingStatus,
    setValueNumber
})(EpisodeFun)

export default EpisodesContainer;