import { createStore } from "redux";

import storeReducer from "ducks/reducers/store.reducer";

const store = createStore(storeReducer);

export default store;
