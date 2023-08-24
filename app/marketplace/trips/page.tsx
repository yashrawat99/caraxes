"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TripTemplate from "@/app/components/templates/TripTemplate";
import {
  applyFilter,
  clearTrips,
  fetchTripFilters,
  fetchTrips,
} from "@/app/marketplace/trips/store/tripsSlice";
import { RootState } from "@/app/store/configureStore";
import { FeedbackWidget, Filter } from "./trips.type";

const Trips = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { tripFilters, isFetching, tripsDTO } = useSelector(
    (state: RootState) => state.tripsReducer
  );
  const { filters } = tripFilters;
  const appliedFilter = filters.stateFilters?.filter((f) => f.selected);
  const filterKey = appliedFilter.length > 0 ? appliedFilter[0].key : "";

  useEffect(() => {
    dispatch(fetchTripFilters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(
      fetchTrips([`pageNo=${page}`, `pageSize=${5}`, `tripStates=${filterKey}`])
    );
    return () => {
      dispatch(clearTrips());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterKey]);

  const handleScroll = (event: any) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (
      scrollTop + clientHeight + 100 >= scrollHeight &&
      !isFetching &&
      page + 1 < tripsDTO.totalPageCount
    ) {
      const latestPage = page + 1;
      setPage(latestPage);
      dispatch(
        fetchTrips([
          `pageNo=${latestPage}`,
          `pageSize=${5}`,
          `tripStates=${
            filters.stateFilters.filter((filter) => filter.selected)[0]?.key ??
            ""
          }`,
        ])
      );
    }
  };
  const redirect = (tripId: number) =>
    (window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/web-view/marketplace/trips/details/v2/${tripId}`);

  const onRedirectionToDetail = (
    tripId: number,
    tripState?: string,
    feedbackWidget?: FeedbackWidget | null
  ) => {
    // FIXME: Add proper events
    redirect(tripId);
  };
  const onVehicleReplaceRedirectionToDetail = (tripId: number) => {
    // FIXME: Add proper events here too
    localStorage.setItem("replaceMentOptionTrip", "true");
    redirect(tripId);
  };
  const handleUnselectFilter = (currentkey: Filter, key: string): boolean =>
    currentkey.selected && currentkey.key === key;

  const handleFilterClick = (key: "ACTIVE" | "CANCELLED" | "TRIP_END") => {
    const currentFilter = filters.stateFilters.filter(
      (filter) => filter.key === key
    )[0];
    const isAlreadySelected = handleUnselectFilter(currentFilter, key);

    const filter = filters.stateFilters.map((filter) => ({
      ...filter,
      selected: filter.key === key ? (isAlreadySelected ? false : true) : false,
    }));
    localStorage.setItem(
      "tripFilter",
      JSON.stringify(filter.find((f) => f.selected)?.key)
    );
    dispatch(applyFilter({ filter: isAlreadySelected ? "" : key }));
    setPage(0);
  };

  return (
    <TripTemplate
      isFetching={isFetching}
      trips={tripsDTO.trips}
      handleScroll={handleScroll}
      handleVehicleReplace={onVehicleReplaceRedirectionToDetail}
      redirectToDetail={onRedirectionToDetail}
      handleFilterSelect={handleFilterClick}
    />
  );
};

export default Trips;
