import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import apiBase from "./apiBase";
import rootReducer, { rootPersistConfig } from "./rootReducer";

// ----------------------------------------------------------------------

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(apiBase.middleware),
});

const persistor = persistStore(store);

const { dispatch } = store;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

const useDispatch = () => useAppDispatch<AppDispatch>();

const makeStore = ({isServer}: any) => {
  if (isServer) {
    return store
  } else {
    return store;
  }
};



const wrapper = createWrapper(makeStore, { debug: true });

export { store, persistor, dispatch, useSelector, useDispatch, wrapper };
