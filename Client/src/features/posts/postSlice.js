import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [], // array of posts
  },
  reducers: {
    addPost: (state, action) => {
      state.data.unshift(action.payload); // add new post at the top
    },
    deletePost: (state, action) => {
      state.data = state.data.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
