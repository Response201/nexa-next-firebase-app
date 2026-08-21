"use client";

import { auth } from "@/lib/firebase";
import styles from "./dashboard.module.css";
import { signOut } from "firebase/auth";
import { useAuth } from "@/context/AuthContext";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { user, loading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !user) {
			router.replace("/auth/login");
		}
	}, [user, loading]);

	if (loading || !user) return null;

	const handleClick = async () => {
		await signOut(auth);
	};

	return (
		<main className={styles.shell}>
			<aside className={styles.sidebar}>
				<p className={styles.brand}>Nexa</p>
				<div className={styles.userBlock}>{user?.email && <span>Welcome, {user?.email}</span>}</div>
				<button className="cursor-pointer mt-4" onClick={handleClick}>
					Logout
				</button>
			</aside>
			<section className={styles.content}>{children}</section>
		</main>
	);
}
