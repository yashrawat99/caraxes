import consignmentTypes from "./types";

export const fetchOperatorTripsStart = (payload: any) => ({
  type: consignmentTypes.FETCH_OPERATOR_TRIPS_START,
  payload: payload,
});

export const clearOperatorTrips = () => ({
  type: consignmentTypes.CLEAR_OPERATOR_TRIPS,
  payload: null,
});

export const fetchTripFiltersData = () => ({
  type: consignmentTypes.FETCH_TRIP_FILTERS,
});
export const fetchTripFiltersDataSuccess = (payload: any) => ({
  type: consignmentTypes.FETCH_TRIP_FILTERS_SUCCESS,
  payload,
});
export const fetchTripFiltersDataFailure = () => ({
  type: consignmentTypes.FETCH_TRIP_FILTERS_FAILURE,
});
export const applyTripFilter = (payload: any) => ({
  type: consignmentTypes.APPLY_FILTER,
  payload,
});
