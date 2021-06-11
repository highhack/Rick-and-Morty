let initialState = {
    locations: []
}

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-LOCATIONS':
            return {...state, locations: [...action.locations]}
        default:
            return state
    }
}
export const setLocations = (locations) => ({type: 'SET-LOCATIONS', locations})


export default locationReducer