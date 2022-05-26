import { createContext, useEffect, useState } from "react";
import { signInUser } from "../https/CreateUser";
import { parse, removeToken, setToken } from "../helpers/jwt";
import LoadingRing from "../components/Loading/Loading";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isInitialized: false,
});

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  async function login(username, password) {
    const response = await signInUser(username, password);
    const { token } = response;
    setToken(token);
    const { payload } = parse(token);
    setIsAuthenticated(true);
    setUser(payload);
  }

  function logout() {
    removeToken();
    setIsAuthenticated(false);
    setUser(null);
  }

  function handleFailInit() {
    setIsInitialized(true);
    setIsAuthenticated(false);
  }

  useEffect(() => {
    try {
      const token = localStorage.getItem("accessToken");
      const { valid, payload } = parse(token);
      if (token && valid) {
        setIsInitialized(true);
        setIsAuthenticated(true);
        setUser(payload);
      } else {
        handleFailInit();
      }
    } catch (error) {
      handleFailInit();
    }
  }, []);

  if (!isInitialized) {
    return setTimeout(() => {
      <LoadingRing />;
    }, 2000);
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isInitialized, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
