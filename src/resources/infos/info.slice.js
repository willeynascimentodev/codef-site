import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import infoService from './info.service'

const initialState =  {
    infos: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const findAll = createAsyncThunk('infos/findAll', async (thunkAPI) => {
    try {
        return await infoService.findAll();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const infoSlice = createSlice({
    name: 'infos',
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
            state.infos = action.payload.info
        })
        .addCase(findAll.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.infos = null
        }) 
    }
})

export const { reset } = infoSlice.actions;
export default infoSlice.reducer;