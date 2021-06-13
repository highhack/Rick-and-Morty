import React from 'react';
import s from './CharacterWindow.module.css'




const CharacterWindow = (props) => {

    const hideWindow = () =>  {props.hideWindow()}


    return <div  className={s.backAndWindow}>
        <div className={s.background} onClick={hideWindow}>{}</div>
         <div className={s.window}>
            <div >
                <img className={s.img} alt={''} src={props.information.image}/>
            </div>
            <div>
                <span>Name: </span>
                <span>{props.information.name}</span>
            </div>
            <div>
                <span>Created:</span>
                <span>{props.information.created}</span>
            </div>
            <div>
                <span>Gender: </span>
                <span>{props.information.gender} </span>
            </div>
            <div>
                <span>Species: </span>
                <span>{props.information.species} </span>
            </div>
            <div>
                <span>Status: </span>
                <span>{props.information.status} </span>
            </div>
            <div>
                <span>Location: </span>
                <a href={props.information.location.url}>{props.information.location.name}: </a>
            </div>
            <div>
                <span>Origin: </span>
                <a href={props.information.origin.url}>{props.information.origin.name}: </a>
            </div>
            <div>
                <span>URL: </span>
                <span>{props.information.url} </span>
            </div>
            <div>
                <span>Type: </span>
                <span>{props.information.type} </span>
            </div>
            {/*episode: (41) ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/34", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/37", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41"]*/}
        </div>

    </div>

}

export default CharacterWindow
