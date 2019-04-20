import React, {useContext} from 'react';
import MainStateContext from '../app-state/app-state';

const ListComponent = () => {
    const appContext = useContext(MainStateContext);
    const {state:{ items }, dispatch} = appContext;

    const addNewItem = () => {
        let newItem;

        if (!items.length) {
            newItem = {id: 1, name:`i want it ? i got it!! => ${1}`};
        } else {
            newItem = {id: items[items.length - 1].id + 1, name:`gee thnx!! just bought it! ==> ${items[items.length - 1].id + 1}`};
        }
        dispatch({
            type: 'addItem',
            item: newItem
        })
    };

    const removeItem = (item) => {
        dispatch({
            type: 'removeItem',
            id: item.id
        })
    };
    return (
        <div>
            <div>
                <button onClick={addNewItem}>add item</button>
            </div>
            {
                items.map((item) =>
                    <div key={item.id} onClick={() => removeItem(item)}>
                        <span>{item.id}</span>
                        <span>{item.name}</span>
                    </div>
                )
            }
        </div>
    )
};

export default ListComponent;