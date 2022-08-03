import { AuthProvider } from "@pankod/refine-core";
import { AxiosInstance } from "axios";
import { store } from "store/configureStore";
import { setUser } from "store/userGoggle/userGoogleSlice";
export const authProvider = (axiosInstance: AxiosInstance): AuthProvider => {
  return {
    login: async (payload) => {
      try {
      } catch (error) {}
      return Promise.resolve("/");
    },
    logout: () => {
      store.dispatch(setUser(null));
      return Promise.resolve("/sign-in");
    },
    checkError: () => Promise.resolve(),
    checkAuth: () => Promise.resolve(),
    // localStorage.getItem(TOKEN_KEY) ? Promise.resolve() : Promise.reject(),
    getPermissions: () => {
      const auth = JSON.parse(localStorage.getItem("user")!);
      if (auth) {
        store.dispatch(setUser(auth));
        const user = store.getState().userGoogle.user;
        return Promise.resolve(user);
      } else {
        store.dispatch(setUser(null));
        const user = store.getState().userGoogle.user;
        return user;
      }
    },
    getUserIdentity: () => {
      const auth = JSON.parse(localStorage.getItem("user")!);
      if (auth) {
        store.dispatch(setUser(auth));
        const user = store.getState().userGoogle.user;
        return Promise.resolve(user);
      } else {
        store.dispatch(setUser(null));
        const user = store.getState().userGoogle.user;
        return user;
      }
    },
  };
};
