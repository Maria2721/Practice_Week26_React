import React from "react";

import "./Heroe.css"

function Heroe(props) {
    return (
        <div className="heroe-card">
            <h2>{props.name}</h2>
            <img
                src={require(`../assets/images/${props.photo}.jpg`)}
                alt={props.ratingname} className="images"
            />
            <div>
                <span className="title">Вселенная: </span>
                {props.universe}
            </div>
            <div>
                <span className="title">Альтер эго: </span>
                {props.alter_ego}
            </div>
            <div>
                <span className="title">Род деятельности: </span>
                {props.activity}
            </div>
            <div>
                <span className="title">Друзья: </span>
                {props.friends}
            </div>
            <div>
                <span className="title">Суперсилы: </span>
                {props.superpowers}
            </div>
            <div>
                <span className="title">Подробнее: </span>
                {props.more}
            </div>
        </div>
    );
}

export default Heroe;
