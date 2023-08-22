export interface TripsListingDTO {
  trips: Trip[];
  pageNo: number;
  pageSize: number;
  totalPageCount: number;
}

interface Trip {
  tripId: number;
  heading: string;
  subHeading: string;
  tripState: string;
  stickyWidget: StickyWidget | null;
  trackingInfoWidget: TrackingInfoWidget | null;
  feedbackWidget: FeedbackWidget | null;
  paymentWidget: TransactionWidget | null;
  otpWidget: OtpWidget | null;
  podWidget: PodWidget | null;
  buttonDesc: string | null;
  ticketWidget: TicketWidget | null;
}

interface TicketWidget {
  count: number;
  desc: string;
  color: "RED" | "GREEN" | "ORANGE";
  bgColor: "RED" | "GREEN" | "ORANGE";
}
interface PodWidget {
  type: "UPLOAD" | "VALIDITY";
  title: string;
  desc: Desc | null;
  tag: Desc | null;
  button: Desc | null;
}
export enum PodWidgetType {
  UPLOAD = "UPLOAD",
  VALIDITY = "VALIDITY",
}

interface Desc {
  icon: "WARNING" | "CAMERA";
  text: string;
  color: string;
}

export enum IconType {
  WARNING = "WARNING",
  CAMERA = "CAMERA",
}

interface OtpWidget {
  heading: string;
  desc: string;
  buttonDesc: string;
}

interface TransactionWidget {
  items: Transaction[][] | null;
}

interface Transaction {
  key: string;
  value: string;
}

interface FeedbackWidget {
  desc: string;
  feedbackType: "GOOD" | "BAD" | "NORMAL";
  score: string;
}
export enum FeedBackTypes {
  GOOD = "GOOD",
  BAD = "BAD",
  NORMAL = "NORMAL",
}
interface TrackingInfoWidget {
  trackingInfo: TrackingInfo[];
  buttonDesc: ButtonDesc[] | null;
}

interface ButtonDesc {
  type: "TRIP_DETAIL" | "VEHICLE_REPLACEMENT";
  desc: string;
}

export enum TrackingButtonDesc {
  TRIP_DETAIL = "TRIP_DETAIL",
  VEHICLE_REPLACEMENT = "VEHICLE_REPLACEMENT",
  CANCELLED_TICKET_OPEN = "CANCELLED_TICKET_OPEN",
}

interface TrackingInfo {
  icon: "ADDRESS" | "TIME";
  heading: string;
  desc: string;
}
export enum TrackingIcon {
  ADDRESS = "ADDRESS",
  TIME = "TIME",
}
interface StickyWidget {
  desc: string;
}

export interface CardType {
  tripId: number;
  heading: string;
  subHeading: string;
  buttonDesc: string | null;
  paymentWidget: TransactionWidget | null;
  stickyWidget: StickyWidget | null;
  trackingInfoWidget: TrackingInfoWidget | null;
  podWidget: PodWidget | null;
  otpWidget: OtpWidget | null;
  feedbackWidget: FeedbackWidget | null;
  tripState: string;
  handleVehicleReplace: Function;
  redirectToDetail: Function;
  ticketWidget: TicketWidget | null;
  trip: Trip;
}
export interface Colors {
  BG_COLOR: {
    [key: string]: string;
  };
  COLOR: {
    [key: string]: string;
  };
}

export interface TripTemplateDTO {
  trips: undefined | Trip[];
  handleScroll: Function;
  handleVehicleReplace: Function;
  redirectToDetail: Function;
  isFetching: boolean;
  handleFilterSelect: Function;
}

export interface FilterType {
  isFetching: boolean;
  filters: Filter[];
}

export interface FilterDTO {
  stateFilters: Filter[];
}
export interface Filter {
  key: string;
  value: string;
  selected: boolean;
}

export interface FilterComponent {
  handleFilterSelect: Function;
}
