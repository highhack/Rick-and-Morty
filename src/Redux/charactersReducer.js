const SET_CHARACTERS = 'SET-CHARACTERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
// const SET_CHARACTERS_TOTAL_COUNT = 'SET-CHARACTERS-TOTAL-COUNT'
// const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


let initialState = {
    characters: [
    ],
    totalCharactersCount: 671,
    currentPage: 1,
}

const charactersReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SET_CHARACTERS:
            return {...state, characters: [...action.characters]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}
        // case SET_CHARACTERS_TOTAL_COUNT:
        //     return {...state, totalCharactersCount: action.count}
        // case TOGGLE_IS_FETCHING:
        //     return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const setCharacters = (characters) => ({type: SET_CHARACTERS, characters})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
// export const setCharactersTotalCount = (totalCharactersCount) => ({type: SET_CHARACTERS_TOTAL_COUNT, count: totalCharactersCount})
// export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)


export default charactersReducer