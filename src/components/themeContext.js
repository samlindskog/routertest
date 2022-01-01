import React, {useState} from "react";

const stateObject = {
    themeIndex: 0,
    themeArray: ["dark","light"],
    themeToggle: () => {
        stateObject.themeIndex === 0 ?
            stateObject.themeIndex === 1 :
            stateObject.themeIndex === 0
    },
};

const stateContext = React.createContext(stateObject);

function ThemeContext(props) {

    const [state, setState] = useState(stateObject);

    setState({
        themeToggle: () => {
            state.themeIndex === 0 ?
                setState({themeIndex: 1}) :
                setState({themeIndex: 0})
        },
    });

    return (
        <stateContext.Provider value={state}>
            {props.children}
        </stateContext.Provider>
    );
}

export {ThemeContext, stateContext, stateObject};