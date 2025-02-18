import {createStore} from "redux";
import reducers from "./reducers/index";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig ={
    key:"persist-store",
    storage
}

const persistedReducer =  persistReducer(persistConfig,reducers);

const store = createStore(persistedReducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store)
console.log("Initial Redux Store:", store.getState());
export default store;