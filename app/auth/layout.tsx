"use client";

import Link from "next/link";
import styles from "./auth.module.css";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
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
