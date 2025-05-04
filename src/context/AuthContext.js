import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => localStorage.getItem("token") || null);
    const navigate = useNavigate();

    // Login function
    const login = async (input) => {
        try {
            const res = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input),
            });
            // If the fetch fails due to DNS/network, this will throw
            if (!res.ok) {
                throw new Error("Network or server error");
            }
            const data = await res.json();
            if (data.token) {
                setToken(data.token);
                localStorage.setItem("token", data.token);
                navigate("/");
            } else {
                alert("Invalid credentials");
            }
        } catch (err) {
            // This will catch DNS/network errors as well as thrown errors above
            alert("Login failed: " + err.message + "\n\nIf you see 'ERR_NAME_NOT_RESOLVED', please check your internet connection and DNS settings.");
        }
    };

    // Signup function
    const signup = async (input) => {
        try {
            const res = await fetch("https://fakestoreapi.com/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: input.username + "@example.com",
                    username: input.username,
                    password: input.password,
                    name: { firstname: "First", lastname: "Last" },
                    address: { city: "City", street: "Street", number: 1, zipcode: "12345", geolocation: { lat: "0", long: "0" } },
                    phone: "1234567890"
                }),
            });
            if (!res.ok) {
                throw new Error("Network or server error");
            }
            navigate("/login");
        } catch (err) {
            alert("Signup failed: " + err.message + "\n\nIf you see 'ERR_NAME_NOT_RESOLVED', please check your internet connection and DNS settings.");
        }
    };

    // Logout function
    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
