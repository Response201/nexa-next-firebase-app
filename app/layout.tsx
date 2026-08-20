import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
export const metadata: Metadata = {
	title: "Nexa",
	description:
		"A welcoming writing group for shared drafts, thoughtful feedback, and steady creative momentum.",
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AuthProvider>
			<html lang="en" className="h-full antialiased">
				<body className="min-h-full flex flex-col">{children}</body>
			</html>
		</AuthProvider>
	);
}
