import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  Filter,
  FilterDTO,
  TripsListingDTO,
} from "../../../components/templates/TripTemplate/trips.spec";

export interface TripState {
  page: number;
  filterState: string;
  tripsDTO: TripsListingDTO;
  isFetching: boolean;
  tripFilters: {
    isFetching: boolean;
    filters: FilterDTO;
  };
}

const initialState: TripState = {
  page: 0,
  filterState: "",
  tripsDTO: {
    pageNo: 0,
    pageSize: 5,
    trips: [],
    totalPageCount: 1,
  },
  isFetching: false,
  tripFilters: {
    isFetching: false,
    filters: {
      stateFilters: [],
    },
  },
};

const tripsSlice = createSlice({
  name: "trips",
  initialState: initialState,
  reducers: {
    fetchTrips: (state, action) => {
      state.isFetching = true;
    },
    fetchTripsSuccess: (state, action: PayloadAction<TripsListingDTO>) => {
      state.tripsDTO = {
        pageNo: action.payload.pageNo,
        pageSize: action.payload.pageSize,
        totalPageCount: action.payload.totalPageCount,
        trips: state.tripsDTO.trips.concat(action.payload.trips),
      };
      state.isFetching = false;
    },
    fetchTripsFailure: (state) => {
      state.isFetching = false;
    },
    clearTrips: (state) => {
      state.tripsDTO = {
        pageNo: 0,
        pageSize: 5,
        trips: [],
        totalPageCount: 1,
      };
    },
    fetchTripFilters: (state) => {
      state.tripFilters.isFetching = true;
    },
    fetchTripFiltersSuccess: (state, action) => {
      const { stateFilters } = action.payload;
      state.tripFilters.filters.stateFilters = stateFilters.map((f: any) => ({
        ...f,
        selected: false,
      }));
      state.tripFilters.isFetching = false;
    },
    fetchTripFiltersFailure: (state) => {
      state.tripFilters.isFetching = false;
    },
    applyFilter: (state, action: PayloadAction<{ filter: string }>) => {
      const { filter } = action.payload;

      state.tripFilters.filters.stateFilters =
        state.tripFilters.filters.stateFilters.map((f: Filter) => {
          if (f.key === filter) {
            return {
              ...f,
              selected: true,
            };
          }
          return {
            ...f,
            selected: false,
          };
        });
    },
  },
});

export const {
  fetchTrips,
  fetchTripsSuccess,
  fetchTripsFailure,
  fetchTripFilters,
  fetchTripFiltersSuccess,
  fetchTripFiltersFailure,
  applyFilter,
  clearTrips,
} = tripsSlice.actions;
export default tripsSlice.reducer;
