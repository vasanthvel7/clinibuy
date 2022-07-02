import Cookies from "universal-cookie";

export const getCookieData = (key) => {
  const cookies = new Cookies();
  return cookies.get(key);
};

export const getLocalstoreData = (key) => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return;
  }
};

export const getSessionstoreData = (key) => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem(key);
  } else {
    return JSON.stringify(["NO DATA"]);
  }
};
