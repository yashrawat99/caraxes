export interface podUpload {
  tripID: number | string;
  docType: string;
  fileName: string;
  image: string;
}
export interface podUploader {
  podDto: Record<
    number,
    {
      docType: string;
      imgResourceKey: string;
      imgUrl: string;
    }[]
  >;
  images: string[];
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
