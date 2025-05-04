import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
    const [input, setInput] = useState({ username: "", password: "" });
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await login(input);
            setInput({ username: "", password: "" });
        } catch (err) {
            setError(
                err?.message
                    ? err.message
                    : "Login failed. Please check your credentials and try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fafafd"
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    background: "#fff",
                    padding: "2.5rem 2rem",
                    borderRadius: "10px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                    minWidth: 320,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.2rem"
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                        letterSpacing: "0.03em"
                    }}
                >
                    Sign In
                </h2>
                <input
                    placeholder="Username"
                    value={input.username}
                    onChange={e => setInput({ ...input, username: e.target.value })}
                    required
                    style={{
                        padding: "0.9rem 1rem",
                        fontSize: "1rem",
                        borderRadius: "5px",
                        border: "1.5px solid #e0e0e0",
                        outline: "none",
                        background: "#fafafa"
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={input.password}
                    onChange={e => setInput({ ...input, password: e.target.value })}
                    required
                    style={{
                        padding: "0.9rem 1rem",
                        fontSize: "1rem",
                        borderRadius: "5px",
                        border: "1.5px solid #e0e0e0",
                        outline: "none",
                        background: "#fafafa"
                    }}
                />
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        background: "#ec4e99",
                        color: "#fff",
                        padding: "0.9rem 1rem",
                        border: "none",
                        borderRadius: "5px",
                        fontWeight: 700,
                        fontSize: "1.07rem",
                        letterSpacing: "0.03em",
                        cursor: "pointer",
                        marginTop: "0.5rem"
                    }}
                >
                    {loading ? "Signing In..." : "Sign In"}
                </button>
                {error && (
                    <div style={{ color: "#e53935", textAlign: "center", marginTop: "0.5rem" }}>
                        {error}
                    </div>
                )}
                <div style={{ textAlign: "center", marginTop: "0.5rem", fontSize: "0.97rem" }}>
                    Don't have an account?{" "}
                    <Link to="/signup" style={{ color: "#ec4e99", textDecoration: "underline" }}>
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    );
}
