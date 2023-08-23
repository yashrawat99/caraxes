const odinUrl = "/odin";
const tesseractUrl = "/rest/tesseract/v1";

export const urlConfig = {
  uploadUrl: () => `${odinUrl}/operator-app/upload-url`,
  submitPod: () => `${tesseractUrl}/trip/submit-pod`,
};
