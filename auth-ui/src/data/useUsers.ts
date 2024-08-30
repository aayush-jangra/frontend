import { useAuthState } from "../Pages/Home/AuthProvider";
import { AuthErrorMsg } from "../schema/auth.schema";
import { Routes } from "../schema/routes.schema";
import { User } from "../schema/users.schema";

const users: User[] = [
  {
    username: "admin",
    email: "admin@gmail.com",
    password: "admin",
  },
];

export const useUsers = () => {
  const { loginUser: logUser } = useAuthState();

  const isUserRegistered = (email: string) => {
    return users.some((user) => user.email === email);
  };

  const isUsernameTaken = (username: string) => {
    return users.some((user) => user.username === username);
  };

  const isValidUsernameOrEmail = (usernameOrEmail: string) => {
    return users.some(
      (user) =>
        user.email === usernameOrEmail || user.username === usernameOrEmail
    );
  };

  const getUser = (usernameOrEmail: string, password: string) => {
    return users.find(
      (user) =>
        (user.email === usernameOrEmail || user.username === usernameOrEmail) &&
        user.password === password
    );
  };

  const loginUser = (usernameOrEmail: string, password: string) => {
    if (!isValidUsernameOrEmail(usernameOrEmail))
      throw new Error(AuthErrorMsg.DOES_NOT_EXIST);
    const user = getUser(usernameOrEmail, password);
    if (!user) throw new Error(AuthErrorMsg.INVALID_PASSWORD);

    logUser(user.username);

    if (window.location.pathname === Routes.LOGIN)
      window.location.pathname = Routes.HOME;
  };

  const registerUser = ({ username, email, password }: User) => {
    if (isUserRegistered(email)) throw new Error(AuthErrorMsg.REGISTERED_USER);
    if (isUsernameTaken(username))
      throw new Error(AuthErrorMsg.UNAVAILABLE_USERNAME);
    if (password.length < 8) throw new Error(AuthErrorMsg.WEAK_PASSWORD);

    users.push({ username, email, password });

    loginUser(username, password);
  };

  return { loginUser, registerUser };
};
