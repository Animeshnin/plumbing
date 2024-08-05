import React from "react";
import './search.css';

function Search(){
    return(
    <div className="modal">
        <h2>Что вы ищете?</h2>
        <input type="search" className="input__search"/>
    </div>
    )

}

export default Search;