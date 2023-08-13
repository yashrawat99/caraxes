// export const getToken = () => {
//   const params = getQueryParams();
//   const accessToken = params.token;
//   if (typeof window === undefined) return "";
//   return accessToken || localStorage.getItem("accessToken") || "";
// };

// export const getQueryParams = () => {
//   if (typeof window === "undefined") return "";
//   return decodeURI(window.location.search)
//     .replace("?", "")
//     .split("&")
//     .map((param) => param.split("="))
//     .reduce((values: any, [key, value]) => {
//       values[key] = value;
//       return values;
//     }, {});
// };
// export const setLocale = (locale: string) =>
//   localStorage.setItem("locale", "hi");
// export const setToken = (token: string) =>
//   localStorage.setItem("accessToken", token);

// export const getUtmSource = () => {
//   const params = getQueryParams();
//   const utm_source = params["utm_source"] || params["source"];
//   return utm_source || "";
// };

// export const getAppVersion = () => {
//   return sessionStorage.getItem("x-app-version:") || "";
// };

// export const getAppPlatForm = () => {
//   return sessionStorage.getItem("x-app-platform:") || "";
// };

// export const getUserCode = () => {
//   const params = getQueryParams();
//   const userCode = params["USER-CODE"];
//   if (!!userCode && userCode !== localStorage.getItem("userCode")) {
//     localStorage.setItem("userCode", userCode);
//   }
//   return userCode || localStorage.getItem("userCode") || "";
// };

// export const getAppId = () => {
//   const params = getQueryParams();
//   const appId = params["X-APP-ID"];
//   if (!!appId && appId !== localStorage.getItem("appId")) {
//     localStorage.setItem("appId", appId);
//   }
//   return appId || localStorage.getItem("appId") || "";
// };

// export const getOperatorId = () => {
//   const params = getQueryParams();
//   const operatorId = params["OP-ID"];
//   if (!!operatorId && operatorId !== localStorage.getItem("operatorId")) {
//     localStorage.setItem("operatorId", operatorId);
//   }
//   return operatorId || localStorage.getItem("operatorId") || "";
// };

// export const getSessionId = () => {
//   // const params = getQueryParams();
//   // const sessionId = params['session-id'];
//   return sessionStorage.getItem("session-id") || "";
// };
