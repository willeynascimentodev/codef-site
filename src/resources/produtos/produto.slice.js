import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import produtoService from './produto.service'

const initialState =  {
    produtos: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const findAll = createAsyncThunk('produtos/findAll', async (data, thunkAPI) => {
    try {
        return await produtoService.findAll();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const produtoSlice = createSlice({
    name: 'produtos',
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
            state.produtos = action.payload.registros
        })
        .addCase(findAll.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.produtos = null
        }) 
    }
})

export const { reset } = produtoSlice.actions;
export default produtoSlice.reducer;