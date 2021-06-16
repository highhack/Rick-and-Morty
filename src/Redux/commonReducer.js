const initialState = {
    loadingStatus: 'idle'
}
export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-LOADING-STATUS':
            return {...state, loadingStatus: action.loadingStatus}
        default:
            return state
    }
}

// actions
export const setLoadingStatus = (loadingStatus) => ({type: 'SET-LOADING-STATUS', loadingStatus})

export default commonReducer
