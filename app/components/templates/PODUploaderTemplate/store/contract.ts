export interface podUpload {
  tripID: number | string;
  docType: string;
  fileName: string;
  image: string;
}
export interface podUploader {
  podDto: any; //TODO: FIX THIS @YASH
  canSubmit: boolean;
  imagesDto: Record<number, string[]>;
  submitted: boolean;
}
export interface PodDTO {
  data: {
    docType: string;
    imgResourceKey: string;
    imgUrl: string;
  };
  tripID: number;
}

export interface SubmitPOD {
  tripId: number;
  podResourceKeys: string[];
}
