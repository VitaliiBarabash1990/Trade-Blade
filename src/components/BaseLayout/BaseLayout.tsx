import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import s from "./BaseLayout.module.css";

type Props = {
	children: ReactNode;
};

export default async function BaseLayout({ children }: Props) {
	return (
		<html className={s.page} lang="ua">
			<body className={s.body}>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
