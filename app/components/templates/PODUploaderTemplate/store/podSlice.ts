import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PodDTO, podUpload, podUploader, SubmitPOD } from "./contract";

const initialState: podUploader = {
  podDto: {},
  images: [],
  canSubmit: false,
  imagesDto: {},
  submitted: false,
};

const podUploaderSlice = createSlice({
  name: "podUploader",
  initialState: initialState,
  reducers: {
    asyncUploadPod: (state, action: PayloadAction<podUpload>) => {
      const { image, tripID } = action.payload;

      state.imagesDto = {
        ...state.imagesDto,
        [tripID]: state.imagesDto[+tripID]
          ? [...state.imagesDto[+tripID], image]
          : [image],
      };
    },
    asyncUploadPodSuccess: (state, action: PayloadAction<PodDTO>) => {},
    asyncUploadPodFailure: (state, action) => {
      state.canSubmit = false;
    },
    removeImage: (
      state,
      action: PayloadAction<{ index: number; id: string | number }>
    ) => {
      const { index, id } = action.payload;
      const newImages = [...state.imagesDto[+id]];
      newImages.splice(index, 1);
      state.imagesDto = {
        ...state.imagesDto,
        [id]: newImages,
      };
    },
    asyncUploadImgAWS: (state, action: PayloadAction<PodDTO>) => {},
    asyncUploadImgAWSSuccess: (state, action: PayloadAction<PodDTO>) => {
      const { tripID } = action.payload;
      state.podDto = {
        ...state.podDto,
        [tripID]: state.podDto[tripID]
          ? [...state.podDto[tripID], action.payload.data]
          : [action.payload.data],
      };
      state.canSubmit = true;
    },
    asyncUploadImgAWSFailure: (state, action: PayloadAction<string>) => {},
    asyncSubmitPod: (state, action: PayloadAction<SubmitPOD>) => {
      state.submitted = false;
    },
    asyncSubmitPodSuccess: (state, action: PayloadAction<string>) => {
      state.submitted = true;
    },
    asyncSubmitPodFailure: (state) => {},
  },
});

export const {
  asyncUploadPod,
  asyncUploadPodSuccess,
  asyncUploadPodFailure,
  removeImage,
  asyncUploadImgAWS,
  asyncUploadImgAWSSuccess,
  asyncUploadImgAWSFailure,
  asyncSubmitPod,
  asyncSubmitPodSuccess,
  asyncSubmitPodFailure,
} = podUploaderSlice.actions;
export default podUploaderSlice.reducer;
