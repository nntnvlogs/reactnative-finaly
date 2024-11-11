// slice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchImage = createAsyncThunk("image/fetchImage", async () => {
  const response = await fetch(
    "https://67109fd5a85f4164ef2e8e58.mockapi.io/user"
  );
  const data = await response.json();

  return data.map((item) => item.image); // Trả về mảng URL ảnh
});

const imageSlice = createSlice({
  name: "image",
  initialState: {
    imageURLs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImage.fulfilled, (state, action) => {
        state.loading = false;
        state.imageURLs = action.payload;
      })
      .addCase(fetchImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default imageSlice.reducer;
