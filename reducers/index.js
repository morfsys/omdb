import { actionTypes } from "../actions";

export const exampleInitialState = {
    data: null,
    loading: null
};

const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_MOVIE:
            return { ...state, data: action.payload, loading: true };
        case actionTypes.DATA_RECEIVED:
            return { ...state, data: action.payload, loading: false };
        default:
            return state;
    }
};
export default reducer;
