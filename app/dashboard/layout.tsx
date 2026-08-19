"use client";

import { auth } from "@/lib/firebase";
import styles from "./dashboard.module.css";
import { signOut } from "firebase/auth";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {



const handleClick = async () => {
await signOut(auth)
console.log("User signed out successfully");
}





	return (
		<main className={styles.shell}>
			<aside className={styles.sidebar}>
				<p className={styles.brand}>Nexa</p>
				<div className={styles.userBlock}>
				
					{/* output user dets here later */}
					
					</div>
			  <button className="cursor-pointer mt-4" onClick={handleClick}>Logout</button>
			</aside>
			<section className={styles.content}>{children}</section>
		</main>
	);
}
