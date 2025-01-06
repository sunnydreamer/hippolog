import React, { useState, ReactNode } from "react";
import { AuthContext } from "./AuthContext";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(
    {
      id: "string",
      name: "string",
      email: "string",
    }
    // null
  );

  const login = (userData: User) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
