"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthContextValue {
	user: User | null;
	loading: boolean;
}

const AuthContext = createContext<AuthContextValue>({
	user: null,
	loading: true,
});

// auth provider
export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (firebaseUser) => {
			setUser(firebaseUser);
			if (loading) {
				setLoading(false);
			}
			console.log("auth change", firebaseUser);
		});
	}, []);

	return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
}

// useAuth hook
export function useAuth() {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider.");
	}

	return context;
}
