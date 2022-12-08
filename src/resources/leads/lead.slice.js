import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import leadService from './lead.service'

const initialState =  {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const insert = createAsyncThunk('leads/insert', async (data, thunkAPI) => {
    try {
        return await leadService.insert(data);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const leadSlice = createSlice({
    name: 'leads',
    initialState, 
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(insert.pending, (state) => {
            state.isLoading = true
        })
        .addCase(insert.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(insert.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload

        }) 
    }
})

export const { reset } = leadSlice.actions;
export default leadSlice.reducer;