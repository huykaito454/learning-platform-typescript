import { AuthProvider } from "@pankod/refine-core";
import { AxiosInstance } from "axios";
import { API_URL } from "../constants";
import { store } from "store/configureStore";
import { setUser } from "store/user/userSlice";
export const authProvider = (axiosInstance: AxiosInstance): AuthProvider => {
  return {
    login: async (payload) => {
      try {
      } catch (error) {}
      return Promise.resolve("/");
    },
    logout: () => {
      store.dispatch(setUser(null));
      localStorage.clear();
      sessionStorage.clear();
      return Promise.resolve("/sign-in");
    },
    checkError: () => Promise.resolve(),
    checkAuth: () => Promise.resolve(),
    // localStorage.getItem(TOKEN_KEY) ? Promise.resolve() : Promise.reject(),
    getPermissions: async () => {
      const token = localStorage.getItem("token")!;
      if (token) {
        const jwt = Number(token);
        const { data } = await axiosInstance.get(`${API_URL}profile`, {
          params: { id: jwt },
        });
        store.dispatch(setUser(data[0]));
        const user = store.getState().user.user;
        return Promise.resolve(user.role);
      } else {
        store.dispatch(setUser(null));
        const user = store.getState().user.user;
        return user;
      }
    },
    getUserIdentity: async () => {
      const token = localStorage.getItem("token")!;
      if (token) {
        const jwt = Number(token);
        const { data } = await axiosInstance.get(`${API_URL}profile`, {
          params: { id: jwt },
        });
        store.dispatch(setUser(data[0]));
        const user = store.getState().user.user;

        return Promise.resolve(user);
      } else {
        store.dispatch(setUser(null));
        const user = store.getState().user.user;
        return user;
      }
    },
  };
};
