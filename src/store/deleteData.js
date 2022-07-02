import Cookies from "universal-cookie";

export const DeleteCookie = (key) => {
  const cookies = new Cookies();
  cookies.remove(key);
};

export const DeleteLocalstore = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const DeleteSessionstore = (key) => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(key);
  }
};
