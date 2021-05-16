import React from 'react';
import Episodes from "./Episodes";
import {connect} from "react-redux";
import {setEpisodes} from "../../Redux/episodesReducer";


let mapStateToProps = (state) => {
    return {
        episodes: state.episodesPage.episodes,
        // totalCharactersCount: state.charactersPage.totalCharactersCount,

    }
}


const EpisodesContainer = connect(mapStateToProps, {
    setEpisodes,
    // setCurrentPage,
    // setCharactersTotalCount
})(Episodes)

export default EpisodesContainer;