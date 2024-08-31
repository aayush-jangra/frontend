import { useAuthState } from "../providers/AuthProvider";
import { AuthErrorMsg } from "../schema/auth.schema";
import { Routes } from "../schema/routes.schema";
import { User } from "../schema/users.schema";

// Mock user data for demonstration purposes
const users: User[] = [
  {
    username: "admin",
    email: "admin@gmail.com",
    password: "admin",
  },
];

/**
 * Custom hook to handle user authentication and registration.
 *
 * Provides functionality for user login and registration, including validation checks
 * for username and email, as well as handling password requirements.
 */
export const useUsers = () => {
  const { loginUser: logUser } = useAuthState();

  /**
   * Checks if a user is registered based on their email.
   *
   * @param email - The email to check for registration.
   * @returns True if the email is registered; otherwise, false.
   */
  const isUserRegistered = (email: string) => {
    return users.some((user) => user.email === email);
  };

  /**
   * Checks if a username is already taken.
   *
   * @param username - The username to check for availability.
   * @returns True if the username is taken; otherwise, false.
   */
  const isUsernameTaken = (username: string) => {
    return users.some((user) => user.username === username);
  };

  /**
   * Validates whether a given username or email is registered.
   *
   * @param usernameOrEmail - The username or email to validate.
   * @returns True if either the username or email exists; otherwise, false.
   */
  const isValidUsernameOrEmail = (usernameOrEmail: string) => {
    return users.some(
      (user) =>
        user.email === usernameOrEmail || user.username === usernameOrEmail
    );
  };

  /**
   * Retrieves a user based on username or email and password.
   *
   * @param usernameOrEmail - The username or email to search for.
   * @param password - The password associated with the username or email.
   * @returns The user object if found and password matches; otherwise, undefined.
   */
  const getUser = (usernameOrEmail: string, password: string) => {
    return users.find(
      (user) =>
        (user.email === usernameOrEmail || user.username === usernameOrEmail) &&
        user.password === password
    );
  };

  /**
   * Logs in a user by validating credentials and navigating to the home page.
   *
   * @param usernameOrEmail - The username or email of the user.
   * @param password - The password of the user.
   * @throws {Error} If the user does not exist or the password is invalid.
   */
  const loginUser = (usernameOrEmail: string, password: string) => {
    if (!isValidUsernameOrEmail(usernameOrEmail))
      throw new Error(AuthErrorMsg.DOES_NOT_EXIST);
    const user = getUser(usernameOrEmail, password);
    if (!user) throw new Error(AuthErrorMsg.INVALID_PASSWORD);

    logUser(user.username);

    // Redirect to home page if currently on login page
    if (window.location.pathname === Routes.LOGIN)
      window.location.pathname = Routes.HOME;
  };

  /**
   * Registers a new user with validation checks and logs them in.
   *
   * @param user - The user details to register.
   * @throws {Error} If the email is already registered, the username is taken,
   *                  or the password does not meet the criteria.
   */
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
