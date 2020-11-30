import React from 'react';
import Film from '../components/Film.js';

const FilmList = ({films}) => {

    const filmNodes = films.map(film => {
        return(
            <li><Film key={film.id} name={film.name}></Film></li>
        )
    })

    return(
        <div className="film-list">
            <ul>
                {filmNodes}
            </ul>
        </div>
    )

}

export default FilmList;