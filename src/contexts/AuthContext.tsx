import { createContext, useContext, useState, ReactNode } from "react";

export type UserRole = "customer" | "staff" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => { success: boolean; error?: string };
  register: (name: string, email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Demo accounts for demonstration
const DEMO_ACCOUNTS: { email: string; password: string; user: User }[] = [
  { email: "admin@fitzone.com", password: "admin123", user: { id: "1", name: "Admin User", email: "admin@fitzone.com", role: "admin" } },
  { email: "staff@fitzone.com", password: "staff123", user: { id: "2", name: "Staff Member", email: "staff@fitzone.com", role: "staff" } },
  { email: "customer@fitzone.com", password: "customer123", user: { id: "3", name: "John Doe", email: "customer@fitzone.com", role: "customer" } },
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<{ email: string; password: string; user: User }[]>([]);

  const allAccounts = [...DEMO_ACCOUNTS, ...registeredUsers];

  const login = (email: string, password: string) => {
    const account = allAccounts.find((a) => a.email === email && a.password === password);
    if (account) {
      setUser(account.user);
      return { success: true };
    }
    return { success: false, error: "Invalid email or password" };
  };

  const register = (name: string, email: string, password: string) => {
    if (allAccounts.some((a) => a.email === email)) {
      return { success: false, error: "Email already registered" };
    }
    const newUser: User = { id: crypto.randomUUID(), name, email, role: "customer" };
    setRegisteredUsers((prev) => [...prev, { email, password, user: newUser }]);
    setUser(newUser);
    return { success: true };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
