"use client";

import Link from "next/link";
import styles from "./auth.module.css";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { user, loading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && user) {
			router.replace("/dashboard");
		}
	}, [user, loading]);

	if (loading || user) return null;

	return (
		<main className={styles.shell}>
			<section className={styles.panel}>
				<Link href="/" className={styles.brand}>
					Nexa
				</Link>
				{children}
			</section>
		</main>
	);
}
