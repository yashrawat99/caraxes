const tesseractBaseUrl = "/rest/tesseract/v1";
export const urlConfig = {
  getTrips: (args: [string, string]) =>
    `${tesseractBaseUrl}/trip?${args.join("&")}`,
  getTripFilters: () => `${tesseractBaseUrl}/trip/trip-state-filter`,
};
