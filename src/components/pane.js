import React, {useContext} from "react";
import {stateContext} from "./themeContext";

function Pane(props) {
    const context = useContext(stateContext)
    
    return(
        <div className={context.themeArray[context.themeIndex]}>
            {props.children}
        </div>
    );
}

export default Pane;