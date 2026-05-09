import {
  createContext,
  useState,
  useEffect
} from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  // VERIFICAR SESIÓN
  useEffect(() => {

    const loggedUser =
      localStorage.getItem("loggedUser");

    if (loggedUser) {
      setIsAuthenticated(true);
    }

  }, []);

  // LOGIN
  const login = (email, password) => {

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find(

      (user) =>

        user.email === email &&
        user.password === password
    );

    if (userFound) {

      localStorage.setItem(
        "loggedUser",
        JSON.stringify(userFound)
      );

      setIsAuthenticated(true);

      return true;
    }

    return false;
  };

  // REGISTER
  const register = (
    name,
    email,
    password
  ) => {

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // VALIDAR EXISTENTE
    const userExists = users.find(
      (user) => user.email === email
    );

    if (userExists) {

      alert("Este correo ya está registrado");

      return false;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password
    };

    const updatedUsers = [
      ...users,
      newUser
    ];

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    localStorage.setItem(
      "loggedUser",
      JSON.stringify(newUser)
    );

    setIsAuthenticated(true);

    return true;
  };

  // LOGOUT
  const logout = () => {

    localStorage.removeItem("loggedUser");

    setIsAuthenticated(false);
  };

  return (

    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        register,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>
  );
}