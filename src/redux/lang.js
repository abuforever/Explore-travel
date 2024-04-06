import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "createSlice",
  initialState: localStorage.getItem("lang") || "en",
  reducers: {
    setLang: (_, { payload }) => {
      localStorage.setItem("lang", payload);
      return payload;
    },
  },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
