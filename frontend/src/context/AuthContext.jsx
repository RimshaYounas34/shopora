
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  // ================= LOAD USER =================

  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("user");

    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (error) {
        console.error(
          "Failed to load user:",
          error
        );

        sessionStorage.removeItem("user");
        return null;
      }
    }

    return null;
  });


  // ================= LOAD TOKEN =================

  const [token, setToken] = useState(() => {
    return sessionStorage.getItem("token") || null;
  });


  // ================= LOGIN =================

  const login = (userData, userToken) => {

    setUser(userData);
    setToken(userToken);

    // Save user for current browser session
    sessionStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    // Save token for current browser session
    sessionStorage.setItem(
      "token",
      userToken
    );
  };


  // ================= LOGOUT =================

  const logout = () => {

    setUser(null);
    setToken(null);

    // Remove session data
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
  };


  // ================= CHECK LOGIN =================

  const isAuthenticated =
    !!user &&
    !!token;


  // ================= AUTH PROVIDER =================

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


// ================= CUSTOM HOOK =================

export function useAuth() {
  return useContext(AuthContext);
}
