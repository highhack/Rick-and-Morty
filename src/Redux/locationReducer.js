let initialState = {
    locations: [],
    countPages: 0
}

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-LOCATIONS':
            return {...state, locations: [...action.locations]}
            case 'TOTAL-COUNT-LOCATIONS-PAGES':
            return {...state, countLocationsPages: action.countLocationsPages}
        default:
            return state
    }
}
export const setLocations = (locations) => ({type: 'SET-LOCATIONS', locations})
export const setCountLocationsPages = (countLocationsPages) => ({type: 'TOTAL-COUNT-LOCATIONS-PAGES', countLocationsPages})


export default locationReducer