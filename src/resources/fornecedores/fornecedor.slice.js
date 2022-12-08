import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fornecedorService from './fornecedor.service'

const initialState =  {
    fornecedores: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const findAll = createAsyncThunk('fornecedores/findAll', async (thunkAPI) => {
    try {
        return await fornecedorService.findAll();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const fornecedorSlice = createSlice({
    name: 'fornecedores',
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
            state.fornecedores = action.payload.registros
        })
        .addCase(findAll.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.fornecedores = null
        }) 
    }
})

export const { reset } = fornecedorSlice.actions;
export default fornecedorSlice.reducer;