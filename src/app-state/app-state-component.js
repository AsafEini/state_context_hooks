import React, {useReducer} from 'react';
import MainStateContext from './app-state';


const AppStateComponent = ({children, reducer}) => {

    const [state, dispatch] = useReducer(reducer, {
        items: [
            {name: 'asaf', id: 1},
            {name: 'moshe', id: 2}
        ]
    });

    return (
        <MainStateContext.Provider value={{state, dispatch}}>
            {children}
        </MainStateContext.Provider>
    )
};

export default AppStateComponent;