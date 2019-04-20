import React, { useReducer } from 'react';
import MainStateContext from './app-state';


const reducer = (state, action) => {
    switch (action.type) {
        case 'addItem':
            return {
                ...state,
                items: [...state.items, action.item]
            };
        case 'removeItem':
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.id)
            };
        default:
            return state;
    }
};

const AppStateComponent = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {
        items: [{name:'asaf', id: 1}, {name:'moshe', id: 2}],
        addItem: (item) => {
            return dispatch({
                type: 'addItem',
                item
            })
        },
        removeItem: (item) => {
            return dispatch({
                type: 'removeItem',
                id: item.id
            })
        }
    });

    return (
        <MainStateContext.Provider value = {state}>
            {children}
        </MainStateContext.Provider>
    )
};

export default AppStateComponent;