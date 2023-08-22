import { spawn, all, call } from "redux-saga/effects";
import consignmentsSaga from "../marketplace/trips/store/saga";

export default function* rootSaga() {
  const sagas = [consignmentsSaga];
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
