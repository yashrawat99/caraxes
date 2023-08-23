import { spawn, all, call } from "redux-saga/effects";
import consignmentsSaga from "../marketplace/trips/store/saga";
import PodUploaderSaga from "../components/templates/PODUploaderTemplate/store/saga";

export default function* rootSaga() {
  const sagas = [consignmentsSaga, PodUploaderSaga];
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
