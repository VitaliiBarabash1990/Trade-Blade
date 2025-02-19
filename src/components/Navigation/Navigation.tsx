"use client";
import s from "./Navigation.module.css";
import { useState } from "react";
import { NavigationMob } from "../NavigationMob/NavigationMob";
import BurgerButton from "@/components/UI/BurgerButton/BurgerButton";
import Link from "next/link";
import link from "./links.json";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const isModal = true;

	return (
		<div className={`container ${s.container_nav}`}>
			<nav className={s.nav_wrap}>
				<Link href="/" className={s.header_link}>
					<svg className={s.header_link_icon}>
						<use href="/sprite.svg#icon-logo"></use>
					</svg>
				</Link>
				<ul className={s.nav_item}>
					{link.map((linkData) => (
						<li key={linkData.id} className={s.navlink_link}>
							<Link
								href={linkData.link}
								className={`navlink ${s.navlink_header}`}
							>
								{linkData.text}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<ul className={s.nav_list_button}>
				<li>
					<button
						type="button"
						className={`button ${s.header_button} ${s.button_enter}`}
					>
						вхід
					</button>
				</li>
				<li>
					<button
						type="button"
						className={`button ${s.header_button} ${s.button_registration}`}
					>
						регистрация
					</button>
				</li>
			</ul>

			<div className={s.nav_mob}>
				<BurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			</div>
			<div className={`${s.menu_burger} ${menuOpen ? s.open : ""}`}>
				<NavigationMob isModal={isModal} setMenuOpen={setMenuOpen} />
			</div>
		</div>
	);
};

export default Navigation;
