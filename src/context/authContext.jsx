import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const provideUser = (data) => {
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, provideUser }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuthProvider() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be used within an AuthProvider");
  return context;
}

export { AuthContext, useAuthProvider };
