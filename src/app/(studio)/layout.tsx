import { draftMode } from "next/headers";
import LiveVisualEditing from "./components/LiveVisualEditing";

export const metadata = {
	title: "Benchmark Homes – Sanity",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
