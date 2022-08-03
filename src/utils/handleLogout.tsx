import { store } from "store/configureStore";
import { setUser } from "store/userGoggle/userGoogleSlice";
export default function handleLogout() {
  localStorage.clear();
  store.dispatch(setUser(null));
}
