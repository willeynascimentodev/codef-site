import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import produtoService from './produto.service'

const initialState =  {
    produtos: [],
    produtosTotal: 0,
    searchProduto: '',
    skip: 0,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',

    produtosCarousel: [],
    isErrorCarousel: false,
    isSuccessCarousel: false,
    isLoadingCarousel: false,
    messageCarousel: ''
}

var aditionalState = {
    search: '',
    skip: 0
}

export const findAll = createAsyncThunk('produtos/findAll', async (data, thunkAPI) => {
    aditionalState.skip = data.offset;
    aditionalState.search = data.nome;
    try {
        return await produtoService.findAll(data);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const findCarousel = createAsyncThunk('produtos/findCarousel', async (data, thunkAPI) => {
    try {
        return await produtoService.findAll(data);
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
            state.produtosTotal = action.payload.total_registros
            state.searchProduto = aditionalState.search
            state.skip = aditionalState.skip
        })
        .addCase(findAll.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.produtos = null
            state.produtosTotal = action.payload.total_registros
            state.searchProduto = aditionalState.search
            state.skip = aditionalState.skip

        })
        .addCase(findCarousel.pending, (state) => {
            state.isLoadingCarousel = true
        })
        .addCase(findCarousel.fulfilled, (state, action) => {
            state.isLoadingCarousel = false
            state.isSuccessCarousel = true
            state.produtosCarousel = action.payload.registros
        })
        .addCase(findCarousel.rejected, (state, action) => {
            state.isLoadingCarousel = false
            state.isErrorCarousel = true
            state.messageCarousel = action.payload
            state.produtosCarousel = null
        })  
    }
})

export const { reset } = produtoSlice.actions;
export default produtoSlice.reducer;