import React, {useContext} from 'react';
import MainStateContext from '../app-state/app-state';

const ListComponent = (props) => {
    const appContext = useContext(MainStateContext);
    const {items, addItem, removeItem} = appContext;
    const addNewItem = () => {
        let newItem;

        if (!items.length) {
            newItem = {id: 1, name:`kakaroto ${1}`};
        } else {
            newItem = {id: items[items.length - 1].id + 1, name:`kakaroto ${items[items.length - 1].id + 1}`};
        }
        addItem(newItem)
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