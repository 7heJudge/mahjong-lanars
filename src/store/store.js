import {combineReducers, createStore} from "redux";
import mahjongReducer from "./mahjong/mahjong-reducer";

let reducers = combineReducers({
    mahjong: mahjongReducer
});

export let store = createStore(reducers);
