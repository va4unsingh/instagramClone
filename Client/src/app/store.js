// import { configureStore } from "@reduxjs/toolkit";
// import modalReducer from "../features/modals/modalSlice";
// import postReducer from "../features/posts/postSlice";

// export const store = configureStore({
//   reducer: {
//     modal: modalReducer,
//     posts: postReducer, // register post slice
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import modalReducer from "../features/modals/modalSlice";
import postReducer from "../features/posts/postSlice";

// Persist config for posts
const postsPersistConfig = {
  key: "posts",
  storage,
  whitelist: ["data"], // only persist the 'data' field
};

// Create persisted reducer
const persistedPostReducer = persistReducer(postsPersistConfig, postReducer);

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    posts: persistedPostReducer, // use persisted reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
