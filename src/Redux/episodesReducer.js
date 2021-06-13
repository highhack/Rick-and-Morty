let initialState = {
    episodes: [],
    episodePageCount: null,
    currentEpisodesPage: 1,
    valueNumber: ''
}

const episodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-EPISODES':
            return {...state, episodes: [...action.episodes]}
        case 'SET-CURRENT-EPISODES-PAGE':
            return {...state, currentEpisodesPage: action.currentEpisodesPage}
        case 'SET-EPISODE-PAGE-COUNT':
            return {...state, episodePageCount: action.episodePageCount}
            case 'SET-VALUE-NUMBER':
            return {...state, valueNumber: action.valueNumber}
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


export default episodesReducer