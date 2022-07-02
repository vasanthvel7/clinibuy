import Cookies from "universal-cookie";

export const Cookiestore = (key, data) => {
  const cookies = new Cookies();
  cookies.set(key, data, { path: "/" });
};

export const Localstore = (key, data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const Sessionstore = (key, data) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
};
