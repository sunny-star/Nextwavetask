import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
    const [input, setInput] = useState({ username: "", password: "" });
    const { signup } = useAuth();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(input);
        } catch (err) {
            setError("Signup failed. Please try again.");
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
                    Sign Up
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
                    Sign Up
                </button>
                {error && (
                    <div style={{ color: "#e53935", textAlign: "center", marginTop: "0.5rem" }}>
                        {error}
                    </div>
                )}
            </form>
        </div>
    );
}
