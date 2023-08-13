// import { Anaytics, sendEvent2 } from '../../../../utils/tracking';

// export const EVENT_NAMES = {
//   ACTIVE: 'filtr_running',
//   TRIP_END: 'filtr_tripend',
//   CANCELLED: 'filtr_cancel',
//   DETAIL: 'trip_detail',
//   CANCELLED_TICKET_OPEN: 'cancel_ticket_open',
// };
// export const EVENT_ACTION = {
//   CLICK: 'click',
//   CLOSE: 'close',
// };

// export const EVENT_CATEGORY = {
//   TRIP_FILTER: 'my_trip_filter',
//   TRIP_CARD: 'trip_card',
// };
// const SCREEN_NAME = 'my_trips::trip_detail_v1';

// export const sendTripEvent = ({
//   event_name,
//   event_action,
//   event_category,
//   screen_name = SCREEN_NAME,
//   miscellaneous,
//   target_product = 'marketplace',
//   sendUserCode = true,
// }: Anaytics) => {
//   return sendEvent2(
//     event_name,
//     {
//       event_action,
//       event_category,
//       screen_name,
//       miscellaneous,
//       target_product,
//     },
//     sendUserCode,
//   );
// };

// export const EVENTS_VS_CALLBACK = {
//   [EVENT_NAMES.ACTIVE]: (event_action: string, category: string, miscellaneous: string) => {
//     sendTripEvent({
//       event_name: EVENT_NAMES.ACTIVE,
//       event_action,
//       event_category: category,
//       screen_name: SCREEN_NAME,
//       miscellaneous,
//     });
//   },
//   [EVENT_NAMES.CANCELLED]: (event_action: string, category: string, miscellaneous: string) => {
//     sendTripEvent({
//       event_name: EVENT_NAMES.CANCELLED,
//       event_action,
//       event_category: category,
//       screen_name: SCREEN_NAME,
//       miscellaneous,
//     });
//   },
//   [EVENT_NAMES.TRIP_END]: (event_action: string, category: string, miscellaneous: string) => {
//     sendTripEvent({
//       event_name: EVENT_NAMES.TRIP_END,
//       event_action,
//       event_category: category,
//       screen_name: SCREEN_NAME,
//       miscellaneous,
//     });
//   },
//   [EVENT_NAMES.DETAIL]: (event_action: string, category: string, miscellaneous: string) => {
//     sendTripEvent({
//       event_name: EVENT_NAMES.DETAIL,
//       event_action,
//       event_category: category,
//       screen_name: SCREEN_NAME,
//       miscellaneous,
//     });
//   },
//   [EVENT_NAMES.CANCELLED_TICKET_OPEN]: (event_action: string, category: string, miscellaneous: string) => {
//     sendTripEvent({
//       event_name: EVENT_NAMES.CANCELLED_TICKET_OPEN,
//       event_action,
//       event_category: category,
//       screen_name: SCREEN_NAME,
//       miscellaneous,
//     });
//   },
// };
