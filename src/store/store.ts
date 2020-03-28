import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { appReducer, IAppReducerState } from "./reducers";
import { rootSaga } from "./sagas";

/** Interface du state du store de l'application */
export interface IStoreState {
  app: IAppReducerState;
}

const rootReducerState = {
  app: appReducer
};

const rootReducer = combineReducers(rootReducerState);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
