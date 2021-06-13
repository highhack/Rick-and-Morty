import React from "react";
import {useSelector} from "react-redux";
import loading from './../../folder_UI/loading.gif'
import s from'./Preloader.module.css'

const Preloader = () => {
    let loadingStatus = useSelector(state => state.commonComponents.loadingStatus);
    return (
        loadingStatus === "loading"
            ? <div>
                <div className={s.background}>{}</div>
                <div className={s.window}><img className={s.img} alt={''} src={loading}/></div>
            </div>
            : <div>{}</div>
    );
};

export default Preloader;