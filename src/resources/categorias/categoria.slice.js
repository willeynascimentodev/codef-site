import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import categoriaService from './categoria.service'

const initialState =  {
    categorias: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const findAll = createAsyncThunk('categorias/findAll', async (thunkAPI) => {
    try {
        return await categoriaService.findAll();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const categoriaSlice = createSlice({
    name: 'categorias',
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
            state.categorias = action.payload.registros
        })
        .addCase(findAll.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.categorias = null
        }) 
    }
})

export const { reset } = categoriaSlice.actions;
export default categoriaSlice.reducer;