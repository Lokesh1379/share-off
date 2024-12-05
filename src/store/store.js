import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import introSlice from "../featers/intro";
import globalSlice from "../featers/global";
const introPersistConfig = {
  key: "intro",
  storage,
  whitelist: ["intro", "globalAttributes"],
};

const persistedIntroReducer = persistReducer(introPersistConfig, introSlice);
const persistedGlobalReducer = persistReducer(introPersistConfig, globalSlice);
const store = configureStore({
  reducer: {
    intro: persistedIntroReducer,
    globalAttributes: persistedGlobalReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
