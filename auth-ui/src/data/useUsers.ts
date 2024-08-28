import { User } from "../schema/users.schema";

export const useUsers = () => {
  const users: User[] = [
    {
      username: "admin",
      email: "admin@gmail.com",
      password: "admin",
    },
  ];

  const isValidUser = (usernameOrEmail: string, password: string) => {
    return users.some(
      (user) =>
        (user.email === usernameOrEmail || user.username === usernameOrEmail) &&
        user.password === password
    );
  };

  const registerUser = (newUser: User) => {
    users.push(newUser);
  };

  return { isValidUser, registerUser };
};
