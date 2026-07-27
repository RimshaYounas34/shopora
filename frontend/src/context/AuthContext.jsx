import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });


  // ================= LOGIN =================

  const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    localStorage.setItem(
      "token",
      userToken
    );
  };


  // ================= LOGOUT =================

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };


  // ================= CHECK LOGIN =================

  const isAuthenticated = !!user && !!token;


  // ================= SYNC USER =================

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error(
          "Failed to load user:",
          error
        );

        localStorage.removeItem("user");
      }
    }
  }, []);


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