import { configureStore } from "@reduxjs/toolkit";
import lang from "./lang";

const store = configureStore({
    reducer: {
        lang, 
         
        
    },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
