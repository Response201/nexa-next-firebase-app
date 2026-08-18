"use client";

import styles from "./dashboard.module.css";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className={styles.shell}>
			<aside className={styles.sidebar}>
				<p className={styles.brand}>Nexa</p>
				<div className={styles.userBlock}>{/* output user dets here later */}</div>
				{/* add logout button here later */}
			</aside>
			<section className={styles.content}>{children}</section>
		</main>
	);
}
