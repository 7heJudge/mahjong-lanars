import {mahjongActions} from "./mahjong-actions";
import generateNumbers from "../../scripts";

let initialState = {
    numbers: generateNumbers(1, 50)
};

const mahjongReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case mahjongActions.CHANGE_CARDS: {
            return {
                ...state,
                numbers: [...state.numbers, action.changeArray]
            };
        }
        default:
            return state;
    }
};

export default mahjongReducer;