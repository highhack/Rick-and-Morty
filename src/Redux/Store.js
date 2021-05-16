import charactersReducer from "./charactersReducer";
import episodesReducer from "./episodesReducer";
import {combineReducers, createStore} from "redux";


export const rootReducer = combineReducers({
    charactersPage: charactersReducer,
    episodesPage: episodesReducer,
    // locationsPage: locationsReducer,
    // myWatchListPage: myWatchListReducer
})
let store =  createStore(rootReducer)
export  default store