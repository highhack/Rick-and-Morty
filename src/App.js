import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import LocationsContainer from './Components/Locations/LocationContainer';
import MyWatchList from './Components/MyWatchList/MyWatchList';
import CharactersContainer from "./Components/Characters/CharactersContainer";
import EpisodesContainer from "./Components/Episodes/EpisodesContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                {/*<Header />*/}
                <Nav />
                <div className='app-wrapper-content'>
                    <Route path = '/Characters' render = {() => <CharactersContainer/>} />
                    <Route path = '/Episodes' render = {() => <EpisodesContainer/>} />
                    <Route path = '/Locations' render = {() => <LocationsContainer/>} />
                    <Route path = '/MyWatchList' render = {() => <MyWatchList/>} />
                </div>
            </div>
        </BrowserRouter>
    )
}



export default App;