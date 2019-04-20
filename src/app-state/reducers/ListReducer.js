export const ListReducer = (state, action) => {
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