import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
//import type { RootState } from '../State/store'

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

export const fetchVideos = createAsyncThunk('videos/fetch', async (query: string) => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&q=${query}&type=video&maxResults=5`)
    if (response.ok) {
        const data = await response.json()
        return data
    } else {
        throw new Error();        
    }
})

export const fetchVideoById = createAsyncThunk('video/fetch', async (id: string) => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${apiKey}`)
    if (response.ok) {
        const data = await response.json()
        return data
    } else {
        throw new Error();        
    }
})

// Define a type for the slice state
interface listState {
    status: string,
    error: string | null | true,
    data: []
}

const initialState: listState = {
    status: 'idle',
    error: null,
    data: []
}

export const listSlice = createSlice({
  name: 'list',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
    reducers: {    
    },
    extraReducers(builder) {            
        builder
        .addCase(fetchVideos.pending, (state: listState) => {
            state.status = 'loading'
        })
        .addCase(fetchVideos.fulfilled, (state: listState, action: PayloadAction<any>) => {            
            state.data = action.payload.items
        })
        .addCase(fetchVideos.rejected, (state: listState) => {            
            state.error = true 
        })
        .addCase(fetchVideoById.pending, (state: listState) => {
            state.status = 'loading'
        })
        .addCase(fetchVideoById.fulfilled, (state: listState, action: PayloadAction<any>) => {            
            state.data = action.payload.items
        })
        .addCase(fetchVideoById.rejected, (state: listState) => {            
            state.error = true 
        })
    }
})

export default listSlice.reducer