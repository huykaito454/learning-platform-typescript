import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import { reducer } from "./reducers";
import { useDispatch } from "react-redux";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: reducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
sagaMiddleware.run(rootSaga);
