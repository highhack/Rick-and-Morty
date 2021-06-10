import charactersReducer from "./charactersReducer";
import episodesReducer from "./episodesReducer";
import commonReducer from "./commonReducer";
import {combineReducers, createStore} from "redux";


export const rootReducer = combineReducers({
    charactersPage: charactersReducer,
    episodesPage: episodesReducer,
    commonComponents: commonReducer
    // locationsPage: locationsReducer,
    // myWatchListPage: myWatchListReducer
})
let store =  createStore(rootReducer)
export  default store