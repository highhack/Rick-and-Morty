// const FOLLOW = 'FOLLOW'
// const UNFOLLOW = 'UNFOLLOW'
const SET_EPISODES = 'SET-EPISODES'
// const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
// const SET_CHARACTERS_TOTAL_COUNT = 'SET-CHARACTERS-TOTAL-COUNT'
// const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


let initialState = {
    episodes: [],
    pageSize: 25,
    // totalCharactersCount: 671,
    currentPage: 1,
}

const episodesReducer = (state = initialState, action)=> {
    switch (action.type) {
        // case FOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(u => {
        //             if (u.id === action.userID) {
        //                 return {...u, followed: false}
        //             }
        //             return u
        //         })
        //     }
        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(u => {
        //             if (u.id === action.userID) {
        //                 return {...u, followed: true}
        //             }
        //             return u
        //         })
        //     }
        case SET_EPISODES:
            return {...state, episodes: [...action.episodes]}
        // case SET_CURRENT_PAGE:
        //     return {...state, currentPage: action.currentPage}
        // case SET_CHARACTERS_TOTAL_COUNT:
        //     return {...state, totalCharactersCount: action.count}
        // case TOGGLE_IS_FETCHING:
        //     return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

// export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
// export const unfollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setEpisodes = (episodes) => ({type: SET_EPISODES, episodes})
// export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
// export const setCharactersTotalCount = (totalCharactersCount) => ({type: SET_CHARACTERS_TOTAL_COUNT, count: totalCharactersCount})
// export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)


export default episodesReducer