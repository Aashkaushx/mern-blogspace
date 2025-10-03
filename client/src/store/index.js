import {configureStore} from "@reduxjs/toolkit";
import prodReducer from "./prodRoute"
import authReducer from "./authReducer"
const store = configureStore({
    reducer: {
        prod : prodReducer,
        auth : authReducer,
    },
    devTools: process.env.NODE_ENV !== "production", // ensure DevTools
});

export default store;
