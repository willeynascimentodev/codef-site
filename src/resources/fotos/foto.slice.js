import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fotoService from './foto.service'

const initialState =  {
    fotos: [],
    fotosTotal: 0,
    searchFoto: '',
    skip: 0,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',

    fotosCarousel: [],
    isErrorCarousel: false,
    isSuccessCarousel: false,
    isLoadingCarousel: false,
    messageCarousel: ''
}

var aditionalState = {
    search: '',
    skip: 0
}

export const findAll = createAsyncThunk('fotos/findAll', async (data, thunkAPI) => {
    aditionalState.skip = data.offset;
    aditionalState.search = data.nome;
    try {
        return await fotoService.findAll(data);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const findCarouselFotos = createAsyncThunk('fotos/findCarousel', async (data, thunkAPI) => {
    try {
        return await fotoService.findAll(data);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const fotoSlice = createSlice({
    name: 'fotos',
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
            state.fotos = action.payload.registros
            state.fotosTotal = action.payload.total_registros
            state.searchFoto = aditionalState.search
            state.skip = aditionalState.skip
        })
        .addCase(findAll.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.fotos = null
            state.fotosTotal = action.payload.total_registros
            state.searchFoto = aditionalState.search
            state.skip = aditionalState.skip

        })
        .addCase(findCarouselFotos.pending, (state) => {
            state.isLoadingCarousel = true
        })
        .addCase(findCarouselFotos.fulfilled, (state, action) => {
            state.isLoadingCarousel = false
            state.isSuccessCarousel = true
            state.fotosCarousel = action.payload.registros
        })
        .addCase(findCarouselFotos.rejected, (state, action) => {
            state.isLoadingCarousel = false
            state.isErrorCarousel = true
            state.messageCarousel = action.payload
            state.fotosCarousel = null
        })  
    }
})

export const { reset } = fotoSlice.actions;
export default fotoSlice.reducer;