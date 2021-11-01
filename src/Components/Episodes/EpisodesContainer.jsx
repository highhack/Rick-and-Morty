import React from 'react';
import Episodes from "./Episodes";
import {connect} from "react-redux";
import {
    setEpisodes,
    setEpisodePageCount,
    setValueNumber,
    setWatchList,
    setButtonDisabled,
    setCurrentEpisodesPage
} from "../../Redux/episodesReducer";
import {setLoadingStatus} from "../../Redux/commonReducer";
import axios from "axios";


class EpisodeFun extends React.Component {


    componentDidMount() {
        if (this.props.episodes.length !== 0)   this.props.setEpisodes([...this.props.episodes])
            else {
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
    }

    onChangeName = (name) => {
        axios.get(`https://rickandmortyapi.com/api/episode/?name=${name}`)
            .then(resolve => {
                this.props.setEpisodes(resolve.data.results)
            })
    }

    addToWatchList = (id) => {
        let currentEpisode = this.props.episodes.find(episode => episode.id === id)
        this.props.watchList.push({...currentEpisode})
        this.props.setWatchList(this.props.watchList)
        currentEpisode.disabled = true
        // this.props.setButtonDisabled([...this.props.episodes])
        this.props.setEpisodes([...this.props.episodes])
        localStorage.setItem('watchList', JSON.stringify(this.props.watchList))
    }

    render() {
        return <>
            <Episodes episodes={this.props.episodes}
                      currentEpisodesPage={this.props.currentEpisodesPage}
                      setEpisodes={this.props.setEpisodes}
                      onChangeName={this.onChangeName}
                      nameValue={this.props.nameValue}
                      watchList={this.props.watchList}
                      setWatchList={this.props.setWatchList}
                      currentEpisodesPage={this.props.currentEpisodesPage}
                      addToWatchList={this.addToWatchList}
                      setCurrentEpisodesPage={this.props.setCurrentEpisodesPage}
            />

        </>
    }
}


let mapStateToProps = (state) => {
    return {
        episodes: state.episodesPage.episodes,
        episodePageCount: state.episodesPage.episodePageCount,
        valueNumber: state.episodesPage.valueNumber,
        watchList: state.episodesPage.watchList,
        loadingStatus: state.commonComponents.loadingStatus,
        currentEpisodesPage: state.episodesPage.currentEpisodesPage,

    }
}

const EpisodesContainer = connect(mapStateToProps, {
    setEpisodes,
    setEpisodePageCount,
    setLoadingStatus,
    setValueNumber,
    setWatchList,
    setButtonDisabled,
    setCurrentEpisodesPage
})(EpisodeFun)


export default EpisodesContainer;