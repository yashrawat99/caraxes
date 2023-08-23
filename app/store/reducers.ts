import tripsSlice from "../marketplace/trips/store/tripsSlice";
import podUploaderSlice from "../components/templates/PODUploaderTemplate/store/podSlice";
const rootReducer = {
  tripsReducer: tripsSlice,
  podReducer: podUploaderSlice,
};
export default rootReducer;
