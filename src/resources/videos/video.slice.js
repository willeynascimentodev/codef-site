import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import videoService from './video.service'

const initialState =  {
    videos: [],
    videosTotal: 0,
    searchVideo: '',
    skip: 0,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',

    videosCarousel: [],
    isErrorCarousel: false,
    isSuccessCarousel: false,
    isLoadingCarousel: false,
    messageCarousel: ''
}

var aditionalState = {
    search: '',
    skip: 0
}

export const findAll = createAsyncThunk('videos/findAll', async (data, thunkAPI) => {
    aditionalState.skip = data.offset;
    aditionalState.search = data.nome;
    try {
        return await videoService.findAll(data);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const findCarousel = createAsyncThunk('videos/findCarousel', async (data, thunkAPI) => {
    try {
        return await videoService.findAll(data);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const videoSlice = createSlice({
    name: 'videos',
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
            state.videos = action.payload.registros
            state.videosTotal = action.payload.total_registros
            state.searchVideo = aditionalState.search
            state.skip = aditionalState.skip
        })
        .addCase(findAll.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.videos = null
            state.videosTotal = action.payload.total_registros
            state.searchVideo = aditionalState.search
            state.skip = aditionalState.skip

        })
        .addCase(findCarousel.pending, (state) => {
            state.isLoadingCarousel = true
        })
        .addCase(findCarousel.fulfilled, (state, action) => {
            state.isLoadingCarousel = false
            state.isSuccessCarousel = true
            state.videosCarousel = action.payload.registros
        })
        .addCase(findCarousel.rejected, (state, action) => {
            state.isLoadingCarousel = false
            state.isErrorCarousel = true
            state.messageCarousel = action.payload
            state.videosCarousel = null
        })  
    }
})

export const { reset } = videoSlice.actions;
export default videoSlice.reducer;