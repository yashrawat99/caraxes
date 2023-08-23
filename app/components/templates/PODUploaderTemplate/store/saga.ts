import { AxiosResponse } from "axios";
import { S3Instance, axiosInstance } from "@/utils/apiConfig";
import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, put } from "redux-saga/effects";
import { PODUploaderTypes } from "./action";
import { PodDTO, SubmitPOD, podUpload } from "./contract";
import { urlConfig } from "./urls";
import {
  asyncSubmitPodFailure,
  asyncSubmitPodSuccess,
  asyncUploadImgAWS,
  asyncUploadImgAWSFailure,
  asyncUploadImgAWSSuccess,
  asyncUploadPodFailure,
  asyncUploadPodSuccess,
} from "./podSlice";

function* uploadPodWatcher({ payload }: PayloadAction<podUpload>) {
  const { docType, fileName, tripID } = payload;
  const requestUrl = urlConfig.uploadUrl();
  const formData = {
    docType: docType,
    fileName: fileName,
  };
  try {
    let response: AxiosResponse = yield axiosInstance.post(
      requestUrl,
      formData
    );
    response.data.tripID = tripID;
    yield put(asyncUploadPodSuccess(response.data));
    yield put(asyncUploadImgAWS(response.data));
  } catch {
    yield put(asyncUploadPodFailure(payload));
  }
}
function* uploadAwsWatcher({ payload }: PayloadAction<PodDTO>) {
  const { imgUrl } = payload.data;
  try {
    yield S3Instance.put(imgUrl);
    yield put(asyncUploadImgAWSSuccess(payload));
  } catch {
    yield put(asyncUploadImgAWSFailure(""));
  }
}

function* submitPod({ payload }: PayloadAction<SubmitPOD>) {
  const requestUrl = urlConfig.submitPod();
  const {} = payload;
  try {
    const response: AxiosResponse = yield axiosInstance.post(
      requestUrl,
      payload
    );
    yield put(asyncSubmitPodSuccess(""));
  } catch (error) {
    yield put(asyncSubmitPodFailure());
  }
}

function* PodUploaderSaga() {
  yield takeLatest(PODUploaderTypes.UPLOAD_POD, uploadPodWatcher);
  yield takeLatest(PODUploaderTypes.UPLOAD_AWS, uploadAwsWatcher);
  yield takeLatest(PODUploaderTypes.SUBMIT_POD, submitPod);
}

export default PodUploaderSaga;
