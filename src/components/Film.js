import React from 'react';


const Film = ({name, children}) => {
    return(
        <div className="film">
            <h2>{name}</h2>
        </div>
    )

}

export default Film;