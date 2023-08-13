import { axiosInstance } from "@/utils/apiConfig";
import React from "react";
import { TripsListingDTO } from "./trips.type";
import TripTemplate from "@/app/components/templates/TripTemplate";

const getTrips = async () => {
  const data = await axiosInstance.get("/rest/tesseract/v1/trip");
  return await data.data;
};

const Trips = async () => {
  const trips: TripsListingDTO = await getTrips();
  console.log(trips, "afdav");

  return (
    <TripTemplate
      trips={trips.trips}
      handleScroll={() => {}}
      handleVehicleReplace={() => {}}
      redirectToDetail={() => {}}
      isFetching={false}
      handleFilterSelect={() => {}}
    />
  );
};

export default Trips;
