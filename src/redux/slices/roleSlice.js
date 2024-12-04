import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { db } from '../../config/firebase';

export const fetchUserRole = createAsyncThunk(
  'role/fetchUserRole',
  async (uid, { rejectWithValue }) => {
    try {
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        return userSnap.data().role;
      }

      return 'user';
    } catch (error) {
      toast.error('Rol bilgisi alınamadı');
      return rejectWithValue(error.message);
    }
  }
);

const roleSlice = createSlice({
  name: 'role',
  initialState: {
    currentUserRole: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearRole: (state) => {
      state.currentUserRole = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRole.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserRole.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUserRole = action.payload;
      })
      .addCase(fetchUserRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearRole } = roleSlice.actions;
export default roleSlice.reducer;
