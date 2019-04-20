import React from 'react';
import './App.css';
import AppStateComponent from './app-state/app-state-component';

import ListComponent from './List/List-component'


const App = () => {
    return (
        <div>
            <AppStateComponent>
                <ListComponent/>
            </AppStateComponent>

        </div>
    )
};

export default App;
