import { configureStore } from '@reduxjs/toolkit'
import ListReducer from '../List/listSlice'

export const store = configureStore({
  reducer: {
    list: ListReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch