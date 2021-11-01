let initialState = {
    episodes: [],
    episodePageCount: null,
    currentEpisodesPage: [],
    valueNumber: '',
    watchList: [],
}

const episodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-EPISODES':
            // let episodes = action.episodes.map(episode => {
            //     return {...episode, disabled: false}
            // })
            // let a = {...state, episodes: [...episodes]}
            let a = {...state, episodes: action.episodes}
            return a
        case 'SET-CURRENT-EPISODES-PAGE':
            return {...state, currentEpisodesPage: action.currentEpisodesPage}
        case 'SET-EPISODE-PAGE-COUNT':
            return {...state, episodePageCount: action.episodePageCount}
        case 'SET-VALUE-NUMBER':
            return {...state, valueNumber: action.valueNumber}
        case 'SET-WATCH-LIST':
            return {...state, watchList: action.watchList}
        case 'SET-BUTTON-DISABLED':
            return {...state, episodes: action.episodes}
        default:
            return state
    }
}
export const setEpisodes = (episodes) => ({type: 'SET-EPISODES', episodes})
export const setCurrentEpisodesPage = (currentEpisodesPage) => ({
    type: 'SET-CURRENT-EPISODES-PAGE',
    currentEpisodesPage
})
export const setEpisodePageCount = (episodePageCount) => ({type: 'SET-EPISODE-PAGE-COUNT', episodePageCount})
export const setValueNumber = (valueNumber) => ({type: 'SET-VALUE-NUMBER', valueNumber})
export const setWatchList = (watchList) => ({type: 'SET-WATCH-LIST', watchList})
export const setButtonDisabled = (episodes) => ({type: 'SET-BUTTON-DISABLED', episodes})


export default episodesReducer