import { User } from "../schema/users.schema";

const users: User[] = [
  {
    username: "admin",
    email: "admin@gmail.com",
    password: "admin",
  },
];

export const useUsers = () => {
  const isUserRegistered = (email: string) => {
    return users.some((user) => user.email === email);
  };

  const isUsernameTaken = (username: string) => {
    return users.some((user) => user.username === username);
  };

  const isValidUser = (usernameOrEmail: string, password: string) => {
    return users.some(
      (user) =>
        (user.email === usernameOrEmail || user.username === usernameOrEmail) &&
        user.password === password
    );
  };

  const registerUser = ({ username, email, password }: User) => {
    if (isUserRegistered(email)) throw new Error("User already registerd");
    if (isUsernameTaken(username)) throw new Error("Username not available");

    users.push({ username, email, password });
  };

  return { isValidUser, registerUser };
};
