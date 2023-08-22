import { AxiosResponse } from "axios";
import { axiosInstance } from "@/utils/apiConfig";
import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, put } from "redux-saga/effects";
import consignmentTypes from "./types";
import {
  fetchTripFiltersFailure,
  fetchTripFiltersSuccess,
  fetchTripsFailure,
  fetchTripsSuccess,
} from "@/app/marketplace/trips/store/tripsSlice";
import { urlConfig } from "./urls";

function* getConsignments({ payload }: PayloadAction<[string, string]>) {
  const requestUrl = urlConfig.getTrips(payload);
  try {
    const response: AxiosResponse = yield axiosInstance.get(requestUrl);
    yield put(fetchTripsSuccess(response.data));
  } catch {
    yield put(fetchTripsFailure());
  }
}

function* getTripFilters() {
  const requestUrl = urlConfig.getTripFilters();
  try {
    const response: AxiosResponse = yield axiosInstance.get(requestUrl);
    yield put(fetchTripFiltersSuccess(response.data));
  } catch {
    yield put(fetchTripFiltersFailure());
  }
}

function* consignmentsSaga() {
  yield takeLatest(
    consignmentTypes.FETCH_OPERATOR_TRIPS_START,
    getConsignments
  );
  yield takeLatest(consignmentTypes.FETCH_TRIP_FILTERS, getTripFilters);
}

export default consignmentsSaga;
