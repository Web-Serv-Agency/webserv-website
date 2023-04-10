import themeReducer from "@/features/theme/themeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import apiBase from "./apiBase";

export interface RootState {
  theme: ReturnType<typeof themeReducer>;
  // ------------ Add New Reducer here ------------
}

const reducer = combineReducers({
  theme: themeReducer,
  
  // ------------ Add New Reducer here ------------
  [apiBase.reducerPath]: apiBase.reducer,
});
const persistConfig = {
  key: "webserv",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiBase.middleware),
});

export const persistor = persistStore(store);

export default store;
