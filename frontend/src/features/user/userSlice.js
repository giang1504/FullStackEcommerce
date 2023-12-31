import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk("auth/register", async (thunkAPI) => {
    try {
        // const response = await 
    } catch (error) {
        throw new Error(error)
    }
})


export const authSlice = createSlice({
    name: "auth",
    initialState: "",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase()
    }
})