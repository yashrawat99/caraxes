import React, { useCallback, useMemo } from "react";
import { isEmpty } from "lodash";
import { CardType, PodWidgetType, TrackingButtonDesc } from "./trips.spec";
// import TripsOtpTemplate from '../TripsTemplate/TripsOtpTemplate';
// import NextArrowGreen from "../../../../components/Icons/svg/next-arrow-green-16.svg";
// import arrow from "../../../../components/Icons/svg/rightArrowNew.svg";
// import ArrowIcon from "../../../../components/Icons/svg/right-arrow2.svg";

import {
  ButtonContainer,
  Container,
  TrackingContainer,
  FeedbackWidgetContainer,
  TransactionWidgetContainer,
  TicketWidget,
} from "./style";
import { FeedbackAesthetics, getIcon } from "./util";
// import {
//   EVENTS_VS_CALLBACK,
//   EVENT_ACTION,
//   EVENT_CATEGORY,
//   EVENT_NAMES,
// } from "./analytics.trips";
import PropertyControlledComponent from "@/app/HOC/PropertyControlledComponent";
import PODUploaderTemplate from "../PODUploaderTemplate";
import CustomButton from "../../atoms/CustomButton";

const Card = ({
  heading,
  subHeading,
  stickyWidget,
  tripId,
  buttonDesc,
  paymentWidget,
  trackingInfoWidget,
  podWidget,
  otpWidget,
  feedbackWidget,
  tripState,
  handleVehicleReplace,
  redirectToDetail,
  ticketWidget,
}: CardType) => {
  const handleButtonAction = useCallback(
    (btnType: string) => {
      switch (btnType) {
        case TrackingButtonDesc.TRIP_DETAIL:
          // EVENTS_VS_CALLBACK[EVENT_NAMES.DETAIL](
          //   EVENT_ACTION.CLICK,
          //   EVENT_CATEGORY.TRIP_CARD,
          //   JSON.stringify({
          //     TripID: tripId,
          //     vehicle_id: heading,
          //   })
          // );
          redirectToDetail(tripId, tripState, feedbackWidget);
          return;
        case TrackingButtonDesc.VEHICLE_REPLACEMENT:
          handleVehicleReplace(tripId);
          return;
        case TrackingButtonDesc.CANCELLED_TICKET_OPEN:
          // EVENTS_VS_CALLBACK[EVENT_NAMES.CANCELLED_TICKET_OPEN](
          //   EVENT_ACTION.CLICK,
          //   EVENT_CATEGORY.TRIP_CARD,
          //   JSON.stringify({
          //     vehicle_id: heading,
          //     TripID: tripId,
          //   })
          // );
          localStorage.setItem("scroll_to_tickets", "true");
          redirectToDetail(tripId, tripState, feedbackWidget);
          return;
        default:
          redirectToDetail(tripId);
          return;
      }
    },
    [redirectToDetail, tripId, tripState, feedbackWidget, handleVehicleReplace]
  );
  const MemoizedStickyWidget = useMemo(() => {
    if (!stickyWidget?.desc) return null;
    return <div className="info-widget">{stickyWidget?.desc}</div>;
  }, [stickyWidget]);

  const MemoizedHeaderWidget = useMemo(() => {
    return (
      <>
        <div className="header">
          <div className="header__content">
            <div className="heading">{heading}</div>
            <div className="desc">{subHeading}</div>
          </div>
          <div
            className="header__icon"
            onClick={() => handleButtonAction(TrackingButtonDesc.TRIP_DETAIL)}
          >
            {/* <img src={ArrowIcon} alt="" /> */}
          </div>
        </div>
        {tripState !== "CANCELLED" && <div className="divider"></div>}
      </>
    );
  }, [heading, subHeading, tripState, handleButtonAction]);
  const MemoizedPaymentWidget = useMemo(() => {
    if (!paymentWidget?.items) return null;
    return (
      <TransactionWidgetContainer>
        {paymentWidget?.items.map((tnxList, index) =>
          tnxList.map((tnx, tnxIndex) => {
            if (index !== 0 && tnxIndex === 0) {
              return (
                <React.Fragment key={tnx.key}>
                  <div className="divider" />
                  <div key={tnx.key + tnx.value} className="table-flex">
                    <div className="left">{tnx.key}</div>
                    <div className="right">{tnx.value}</div>
                  </div>
                </React.Fragment>
              );
            }
            return (
              <div key={tnx.key + tnx.value} className="table-flex">
                <div className="left">{tnx.key}</div>
                <div className="right">{tnx.value}</div>
              </div>
            );
          })
        )}
      </TransactionWidgetContainer>
    );
  }, [paymentWidget]);

  const MemoizedTrackingWidget = useMemo(() => {
    return (
      <PropertyControlledComponent
        controllerProperty={!isEmpty(trackingInfoWidget)}
      >
        <TrackingContainer>
          {trackingInfoWidget?.trackingInfo.map((tracking) => (
            <div className="tracking__info" key={tracking.heading}>
              <div className="tracking__info-icon">
                <img src={getIcon(tracking.icon)} alt="" />
              </div>
              <div className="tracking__info-content">
                <div className="tracking__heading">{tracking.heading}</div>
                <div className="tracking__desc">{tracking.desc}</div>
              </div>
            </div>
          ))}
          <PropertyControlledComponent
            controllerProperty={!isEmpty(trackingInfoWidget?.buttonDesc)}
          >
            <ButtonContainer>
              {trackingInfoWidget?.buttonDesc?.map((btn) => (
                <div className="footer" key={btn.type}>
                  <CustomButton
                    label={btn.desc}
                    onClick={() => handleButtonAction(btn.type)}
                    variant="outlined"
                  />
                </div>
              ))}
            </ButtonContainer>
          </PropertyControlledComponent>
        </TrackingContainer>
      </PropertyControlledComponent>
    );
  }, [handleButtonAction, trackingInfoWidget]);
  const MemoizedPODWidget = useMemo(() => {
    return (
      <PropertyControlledComponent controllerProperty={!isEmpty(podWidget)}>
        {podWidget?.type === PodWidgetType.UPLOAD && (
          <PODUploaderTemplate id={tripId} validity={PodWidgetType.UPLOAD} />
        )}
        {podWidget?.type === PodWidgetType.VALIDITY && (
          <PODUploaderTemplate id={tripId} validity={PodWidgetType.VALIDITY} />
        )}
      </PropertyControlledComponent>
    );
  }, [podWidget, tripId]);

  const MemoizedFeedbackWidget = useMemo(() => {
    if (!feedbackWidget) return null;
    return (
      <PropertyControlledComponent
        controllerProperty={!isEmpty(feedbackWidget)}
      >
        <FeedbackWidgetContainer bg={feedbackWidget.feedbackType}>
          <div className="feedback__container">
            <div className="feedback__message">
              <img
                src={new FeedbackAesthetics(
                  feedbackWidget.feedbackType
                ).getFeedbackIcon()}
                alt=""
              />
              <div className="feedback__text">{feedbackWidget.desc}</div>
            </div>
            <div className="feedback__score">{feedbackWidget.score}</div>
          </div>
        </FeedbackWidgetContainer>
      </PropertyControlledComponent>
    );
  }, [feedbackWidget]);

  const MemoizedOTPWidget = useMemo(() => {
    if (!otpWidget) return null;
    return (
      <PropertyControlledComponent controllerProperty={!isEmpty(otpWidget)}>
        <div
          style={{
            margin: -16,
            marginTop: 0,
          }}
        >
          {/* <TripsOtpTemplate
            heading={otpWidget.heading}
            desc={otpWidget.desc}
            tripId={tripId}
            tripStatus={tripState}
            tripStage={tripState}
          /> */}
        </div>
      </PropertyControlledComponent>
    );
  }, [otpWidget, tripId, tripState]);

  const MemoizedButtonWidget = useMemo(() => {
    return (
      <PropertyControlledComponent controllerProperty={!isEmpty(buttonDesc)}>
        <div className="footer">
          <CustomButton
            label={buttonDesc!}
            variant="outlined"
            onClick={() => handleButtonAction(TrackingButtonDesc.TRIP_DETAIL)}
          />
        </div>
      </PropertyControlledComponent>
    );
  }, [buttonDesc, handleButtonAction]);
  const MemoizedTicketWidget = useMemo(() => {
    return (
      <PropertyControlledComponent controllerProperty={!isEmpty(ticketWidget)}>
        <TicketWidget
          onClick={() =>
            handleButtonAction(TrackingButtonDesc.CANCELLED_TICKET_OPEN)
          }
        >
          <div className="ticket__content">
            <div className="ticket__count">{ticketWidget?.count}</div>
            <div className="ticket__desc">{ticketWidget?.desc}</div>
          </div>
          <div className="ticket__cta">{/* <img src={arrow} alt="" /> */}</div>
        </TicketWidget>
      </PropertyControlledComponent>
    );
  }, [ticketWidget, handleButtonAction]);
  return (
    <Container>
      {MemoizedStickyWidget}
      {MemoizedHeaderWidget}
      <div className="body">
        {MemoizedPaymentWidget}
        {MemoizedTicketWidget}
        {MemoizedTrackingWidget}
      </div>
      {MemoizedPODWidget}
      {MemoizedFeedbackWidget}
      {MemoizedOTPWidget}
      {MemoizedButtonWidget}
    </Container>
  );
};

export default Card;
