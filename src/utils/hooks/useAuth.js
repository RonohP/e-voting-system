// Hook (use-auth.js)
import React, { useContext, createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  console.log("called");
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useLocalStorage("user", {});
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(
    "isAuthenticated",
    false
  );
  const [accessToken, setAccessToken] = useLocalStorage("access-token", "");
  // Wrap any  methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (user, accessToken) => {
    console.log(user, "user");
    setUser(user);
    setAccessToken(accessToken);
    if (accessToken) {
      setIsAuthenticated(true);
    }
  };

  const signout = () => {
    setAccessToken("");
    setUser({});
    setIsAuthenticated(false);
  };
  //   const sendPasswordResetEmail = (email) => {
  //     return firebase
  //       .auth()
  //       .sendPasswordResetEmail(email)
  //       .then(() => {
  //         return true;
  //       });
  //   };
  //   const confirmPasswordReset = (code, password) => {
  //     return firebase
  //       .auth()
  //       .confirmPasswordReset(code, password)
  //       .then(() => {
  //         return true;
  //       });
  //   };

  // Return the user object and auth methods
  return {
    user,
    accessToken,
    signin,
    isAuthenticated,
    signout,
  };
}
