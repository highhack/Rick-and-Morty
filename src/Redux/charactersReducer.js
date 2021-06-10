// const SET_CHARACTERS_TOTAL_COUNT = 'SET-CHARACTERS-TOTAL-COUNT'
// const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


let initialState = {
    characters: [],
    // totalCharactersCount: 671,
    currentPage: 1,
    pageCount: 0,
    species: '',
    status: '',
    gender: '',
    information: {}
}

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-CHARACTERS':
            return {...state, characters: [...action.characters]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.pageNumber}
        case 'SET-PAGE-COUNT':
            return {...state, pageCount: action.pageCount}
        case 'SET-SPECIES':
            return {...state, species: action.species}
        case 'SET-STATUS':
            return {...state, status: action.status}
        case 'SET-GENDER':
            return {...state, gender: action.gender}
            case 'SET-INFORMATION':
            return {...state, information: action.information}
        // case SET_CHARACTERS_TOTAL_COUNT:
        //     return {...state, totalCharactersCount: action.count}
        // case TOGGLE_IS_FETCHING:
        //     return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const setCharacters = (characters) => ({type: 'SET-CHARACTERS', characters})
export const setCurrentPage = (pageNumber) => ({type: 'SET-CURRENT-PAGE', pageNumber})
export const setPageCount = (pageCount) => ({type: 'SET-PAGE-COUNT', pageCount})
export const setSpecies = (species) => ({type: 'SET-SPECIES', species})
export const setStatus = (status) => ({type: 'SET-STATUS', status})
export const setGender = (gender) => ({type: 'SET-GENDER', gender})
export const setInformation = (information) => ({type: 'SET-INFORMATION', information})
// export const setCharactersTotalCount = (totalCharactersCount) => ({type: SET_CHARACTERS_TOTAL_COUNT, count: totalCharactersCount})
// export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)


export default charactersReducer