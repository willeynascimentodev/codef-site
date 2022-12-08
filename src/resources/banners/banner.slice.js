import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import bannerService from './banner.service'

const initialState =  {
    banners: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const findAll = createAsyncThunk('banners/findAll', async (thunkAPI) => {
    try {
        return await bannerService.findAll();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const bannerSlice = createSlice({
    name: 'banners',
    initialState, 
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(findAll.pending, (state) => {
            state.isLoading = true
        })
        .addCase(findAll.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.banners = action.payload.registros
        })
        .addCase(findAll.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.banners = null
        }) 
    }
})

export const { reset } = bannerSlice.actions;
export default bannerSlice.reducer;