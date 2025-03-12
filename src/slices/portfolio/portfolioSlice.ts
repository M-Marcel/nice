import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Portfolio, PortfolioFormData, PortfolioUpdatePayload } from "../../dataTypes";
import { toast } from "react-toastify";
import portfolioService from "../../helpers/portfolioService";

type InitialState = {
    portfolios: Portfolio[]
    portfolio: Portfolio | null
    message: string;
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    error: string | null;
}

const initialState: InitialState = {
    portfolios: [],
    portfolio: null,
    message: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
}

export const createPortfolio = createAsyncThunk<{ portfolio: Portfolio; message: string }, PortfolioFormData, { rejectValue: string }>('portfolio/create-portfolio', async (portfolioData, thunkApi) => {
    try {
        const response = await portfolioService.createPortfolio(portfolioData);
        return response;
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'portfolio creation failed';

        return thunkApi.rejectWithValue(message)
    }
})

export const getPortfolioById = createAsyncThunk(
    "portfolio/fetchPortfolioById",
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await portfolioService.getPortfolioById(id);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const updatePortfolio = createAsyncThunk(
    "portfolio/updatePortfolio",
    async ({ id, portfolioData }: { id: string; portfolioData: PortfolioUpdatePayload  }, { rejectWithValue }) => {
        try {
            const response = await portfolioService.updatePortfolio(id, portfolioData);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const getAllPortfolios = createAsyncThunk(
    "portfolio/fetchAllPortfolios",
    async (_, { rejectWithValue }) => {
        try {
            const response = await portfolioService.getAllPortfolios();
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''

        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(createPortfolio.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createPortfolio.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.portfolio = action.payload.portfolio;
                state.message = action.payload.message;
            })
            // Handle fetchTemplates rejected state
            .addCase(createPortfolio.rejected, (state, action) => {
                state.isError = true;
                state.error = action.payload as string;
                state.message = action.payload as string;
                toast.error(action.payload as string)
            })
            .addCase(getPortfolioById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPortfolioById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.portfolio = action.payload.portfolio;
                state.message = action.payload.message;
            })
            .addCase(getPortfolioById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload as string;
                state.message = action.payload as string;
                toast.error(action.payload as string);
            })
            .addCase(updatePortfolio.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updatePortfolio.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.portfolio = action.payload.portfolio;
                state.message = action.payload.message;
              
            })
            .addCase(updatePortfolio.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload as string;
                state.message = action.payload as string;
                toast.error(action.payload as string);
            })
            .addCase(getAllPortfolios.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllPortfolios.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.portfolios = action.payload.portfolios; // Update the portfolios array
                state.message = action.payload.message;
            })
            .addCase(getAllPortfolios.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload as string;
                state.message = action.payload as string;
                toast.error(action.payload as string);
            });

    }
})

export const { reset } = portfolioSlice.actions;
export default portfolioSlice.reducer;