import Link from "next/link";
import s from "./NavigationMob.module.css";
import clsx from "clsx";
import links from "../Navigation/links.json";
import { div } from "framer-motion/client";

type MyComponentProps = {
	isModal: boolean;
	setMenuOpen: (open: boolean) => void; // Указываем конкретный тип
};

export const NavigationMob = ({ isModal, setMenuOpen }: MyComponentProps) => {
	const handlerSubmit = () => {
		if (isModal) {
			setMenuOpen(false);
		}
	};

	return (
		<div className={s.navMob_wraper}>
			<ul className={clsx(s.navMenu, isModal && s.navMenu_modal)}>
				{links.map((linkData) => (
					<li key={linkData.id} className={s.navMenu_link}>
						<Link href={linkData.link} className={`navlink ${s.navlink_mob}`}>
							{linkData.text}
						</Link>
					</li>
				))}
			</ul>
			<ul className={`list ${s.registration_item}`}>
				<li className={s.button_list}>
					<button type="button" className={s.enter_button}>
						Регистрация
					</button>
				</li>
				<li className={s.button_list}>
					<button
						type="button"
						className={`${s.enter_button} ${s.registration_button}`}
					>
						Войти
					</button>
				</li>
			</ul>
		</div>
	);
};
