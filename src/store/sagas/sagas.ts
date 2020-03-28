/** Imports NPM */
import { all, call } from "redux-saga/effects";

/** Imports locaux */
function* testSaga() {
  yield console.log("test saga");
}

export function* rootSaga() {
  yield all([call(testSaga)]);
}
