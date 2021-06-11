import charactersReducer from "./charactersReducer";
import episodesReducer from "./episodesReducer";
import locationReducer from "./locationReducer";
import commonReducer from "./commonReducer";
import {combineReducers, createStore} from "redux";


export const rootReducer = combineReducers({
    charactersPage: charactersReducer,
    episodesPage: episodesReducer,
    locationsPage: locationReducer,
    commonComponents: commonReducer,
    // myWatchListPage: myWatchListReducer
})
let store =  createStore(rootReducer)
export  default store