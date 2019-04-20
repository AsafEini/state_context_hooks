import React from 'react';
import './App.css';
import { initialState, ListReducer } from './app-state/reducers/ListReducer';
import AppStateComponent from './app-state/app-state-component';

import ListComponent from './List/List-component'


const App = () => {
    return (
        <div>
            <AppStateComponent reducer = {ListReducer}>
                <ListComponent/>
            </AppStateComponent>

        </div>
    )
};

export default App;
