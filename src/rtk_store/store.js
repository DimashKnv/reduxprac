import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers";

export const rtk_store=configureStore({
    reducer:{
        count:counterSlice.reducer
    }
})