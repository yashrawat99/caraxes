import React, { useMemo } from "react";

import { TripTemplateDTO } from "./trips.spec";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import Filters from "./Filter";

const TripTemplateV2 = ({
  trips,
  handleScroll,
  handleVehicleReplace,
  redirectToDetail,
  isFetching,
  handleFilterSelect,
}: TripTemplateDTO) => {
  const SkeletonGroup = () => {
    return (
      <>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </>
    );
  };
  const MemoizedTripCardsTemplate = useMemo(() => {
    return trips.length ? (
      trips.map((trip) => (
        <React.Fragment key={trip.tripId}>
          <Card
            key={trip.tripId}
            heading={trip.heading}
            subHeading={trip.subHeading}
            tripId={trip.tripId}
            buttonDesc={trip?.buttonDesc}
            paymentWidget={trip?.paymentWidget}
            stickyWidget={trip.stickyWidget}
            trackingInfoWidget={trip?.trackingInfoWidget}
            podWidget={trip.podWidget}
            otpWidget={trip.otpWidget}
            feedbackWidget={trip.feedbackWidget}
            tripState={trip.tripState}
            handleVehicleReplace={handleVehicleReplace}
            redirectToDetail={redirectToDetail}
            ticketWidget={trip.ticketWidget}
          />
          {isFetching && <SkeletonGroup />}
        </React.Fragment>
      ))
    ) : isFetching ? (
      <SkeletonGroup />
    ) : null;
  }, [handleVehicleReplace, isFetching, redirectToDetail, trips]);

  const MemoizedTripTemplate = useMemo(() => {
    return (
      <div
        style={{
          background: "#F4F5FA",
          paddingTop: 16,
          height: "calc(100vh - 3rem)",
          overflowY: "scroll",
          overflowX: "hidden",
          marginBottom: "2rem",
        }}
        onScroll={(e) => handleScroll(e)}
      >
        <Filters handleFilterSelect={handleFilterSelect} />
        {MemoizedTripCardsTemplate}
      </div>
    );
  }, [MemoizedTripCardsTemplate, handleScroll, handleFilterSelect]);
  return MemoizedTripTemplate;
};

export default TripTemplateV2;
