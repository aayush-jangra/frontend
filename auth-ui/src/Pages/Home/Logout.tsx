import { useAuthState } from "./AuthProvider";
import LogoutIcon from "../../Assets/Icons/logout.svg";

export const Logout = () => {
  const { isUserLoggedIn, logoutUser } = useAuthState();

  if (!isUserLoggedIn) return null;
  return (
    <button
      aria-label="Logout"
      className="absolute top-0 right-0 m-4"
      onClick={logoutUser}
    >
      <img alt="" className="flex" src={LogoutIcon} />
    </button>
  );
};
