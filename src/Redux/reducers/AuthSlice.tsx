import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define types for user and subscription data
interface User {
    id: string;
    email: string;
    name: string;
    password: string;
    image: string;
    isEmailVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

interface Subscription {
    id: string;
    userId: string;
    plan: string;
    credit: number;
    createdAt: string;
    updatedAt: string;
}

interface AuthState {
    user: User | null;
    subscription: Subscription | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    subscription: null,
    loading: false,
    error: null
}

// Async thunk for fetching data
export const FetchData = createAsyncThunk("auth/fetchdata", async (email: string) => {
    const response = await axios.get(`http://localhost:3000/api/auth?email=${email}&subscription=true`);
    return response.data;
});

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.subscription = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchData.fulfilled, (state, action) => {
            state.user = action.payload.data;
            state.subscription = action.payload.subscription;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(FetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch data";
        });
        builder.addCase(FetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
    }
});

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;