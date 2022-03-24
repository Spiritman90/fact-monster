import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducer, composeEnhancer);

export default store;
