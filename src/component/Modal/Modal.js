import React from "react";

function Modal({active, setActive, children}){
    return(
        <div className={`modal ${active? 'open' : 'close'}`} onClick={()=> setActive(false)}>
            {children}
        </div>
    )
}

export default Modal