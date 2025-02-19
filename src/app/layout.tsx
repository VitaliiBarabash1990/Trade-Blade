import type { Metadata } from "next";

import "./globals.css";
import "modern-normalize";
import BaseLayout from "@/components/BaseLayout/BaseLayout";

export const metadata: Metadata = {
	title: "TradeBlade",
	description: "Моментально Копируй сделки профи трейдеров",
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <BaseLayout>{children}</BaseLayout>;
}
